import { getBaseUrl } from "./utils/ip-resolver.js";
import dotenv from "dotenv";

import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../.env"), quiet: true });

// Desabilita checagem de certificado autoassinado para o host local do Obsidian
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export interface ActiveFileResult {
  path: string;
  content: string;
}

export interface SearchResult {
  filename: string;
  score?: number;
  matches?: unknown[];
}

export interface TagResult {
  name: string;
  count: number;
}

export interface CommandResult {
  id: string;
  name: string;
}

export class ObsidianClient {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey?: string, baseUrl?: string) {
    this.apiKey = apiKey || process.env.OBSIDIAN_API_KEY || "";
    this.baseUrl = (baseUrl || getBaseUrl()).replace(/\/+$/, "");

    if (!this.apiKey) {
      console.error(
        "[ObsidianClient] AVISO: OBSIDIAN_API_KEY não foi configurada. As requisições podem falhar."
      );
    }
  }

  private encodePath(filePath: string): string {
    // Preserva as barras de diretório, mas codifica cada segmento de pasta/arquivo
    return filePath
      .split("/")
      .filter((segment) => segment.length > 0)
      .map((segment) => encodeURIComponent(segment))
      .join("/");
  }

  private async fetch(endpoint: string, options: RequestInit = {}): Promise<Response> {
    const url = `${this.baseUrl}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;
    const headers = new Headers(options.headers || {});

    if (this.apiKey) {
      headers.set("Authorization", `Bearer ${this.apiKey}`);
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    return response;
  }

  async getStatus(): Promise<unknown> {
    const res = await this.fetch("/");
    if (!res.ok) {
      throw new Error(`Falha ao obter status do Obsidian: HTTP ${res.status} ${res.statusText}`);
    }
    return res.json();
  }

  async listFiles(directory = ""): Promise<string[]> {
    const cleanDir = directory.trim().replace(/^\/+|\/+$/g, "");
    const encodedDir = cleanDir ? `${this.encodePath(cleanDir)}/` : "";
    const endpoint = `/vault/${encodedDir}`;

    const res = await this.fetch(endpoint);
    if (!res.ok) {
      throw new Error(`Falha ao listar arquivos em "${directory}": HTTP ${res.status}`);
    }

    const data = (await res.json()) as { files?: string[] };
    return data.files || [];
  }

  async readNote(path: string): Promise<string> {
    const encoded = this.encodePath(path);
    const res = await this.fetch(`/vault/${encoded}`);

    if (res.status === 404) {
      throw new Error(`Nota não encontrada no vault: "${path}"`);
    }

    if (!res.ok) {
      throw new Error(`Falha ao ler nota "${path}": HTTP ${res.status}`);
    }

    return res.text();
  }

  async createOrUpdateNote(path: string, content: string): Promise<void> {
    const encoded = this.encodePath(path);
    const res = await this.fetch(`/vault/${encoded}`, {
      method: "PUT",
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
      },
      body: content,
    });

    if (!res.ok) {
      const err = await res.text().catch(() => "");
      throw new Error(`Falha ao salvar nota "${path}": HTTP ${res.status} - ${err}`);
    }
  }

  async appendToNote(path: string, content: string): Promise<void> {
    const encoded = this.encodePath(path);
    const res = await this.fetch(`/vault/${encoded}`, {
      method: "POST",
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
      },
      body: content,
    });

    if (!res.ok) {
      const err = await res.text().catch(() => "");
      throw new Error(`Falha ao acrescentar conteúdo na nota "${path}": HTTP ${res.status} - ${err}`);
    }
  }

  async deleteNote(path: string): Promise<void> {
    const encoded = this.encodePath(path);
    const res = await this.fetch(`/vault/${encoded}`, {
      method: "DELETE",
    });

    if (!res.ok && res.status !== 404) {
      throw new Error(`Falha ao excluir nota "${path}": HTTP ${res.status}`);
    }
  }

  async getActiveFile(): Promise<ActiveFileResult> {
    const res = await this.fetch("/active/");

    if (res.status === 404) {
      throw new Error("Nenhum arquivo está aberto ou em foco atualmente no Obsidian.");
    }

    if (!res.ok) {
      throw new Error(`Falha ao buscar arquivo ativo: HTTP ${res.status}`);
    }

    const contentLocation = res.headers.get("content-location") || "";
    const path = decodeURIComponent(contentLocation);
    const content = await res.text();

    return { path, content };
  }

  async openFile(path: string): Promise<void> {
    const encoded = this.encodePath(path);
    const res = await this.fetch(`/open/${encoded}`, {
      method: "POST",
    });

    if (!res.ok) {
      throw new Error(`Falha ao abrir nota "${path}" no Obsidian: HTTP ${res.status}`);
    }
  }

  async searchNotes(query: string): Promise<SearchResult[]> {
    const encodedQuery = encodeURIComponent(query);
    const res = await this.fetch(`/search/simple/?query=${encodedQuery}`, {
      method: "POST",
    });

    if (!res.ok) {
      throw new Error(`Falha na busca por "${query}": HTTP ${res.status}`);
    }

    return (await res.json()) as SearchResult[];
  }

  async listTags(): Promise<TagResult[]> {
    const res = await this.fetch("/tags/");
    if (!res.ok) {
      throw new Error(`Falha ao listar tags: HTTP ${res.status}`);
    }

    const data = (await res.json()) as { tags: TagResult[] };
    return data.tags || [];
  }

  async listCommands(): Promise<CommandResult[]> {
    const res = await this.fetch("/commands/");
    if (!res.ok) {
      throw new Error(`Falha ao listar comandos: HTTP ${res.status}`);
    }

    const data = (await res.json()) as { commands?: CommandResult[] };
    return data.commands || [];
  }

  async executeCommand(commandId: string): Promise<void> {
    const encoded = encodeURIComponent(commandId);
    const res = await this.fetch(`/commands/${encoded}/`, {
      method: "POST",
    });

    if (!res.ok) {
      throw new Error(`Falha ao executar comando "${commandId}": HTTP ${res.status}`);
    }
  }
}
