#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { ObsidianClient } from "./client.js";

const client = new ObsidianClient();

const server = new Server(
  {
    name: "obsidian-mcp",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Lista de ferramentas disponíveis
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "get_active_file",
        description:
          "Retorna o caminho e conteúdo completo da nota atualmente aberta ou em foco na janela do Obsidian no Windows.",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "open_file",
        description:
          "Abre uma nota na interface do Obsidian no Windows, tornando-a a aba ativa.",
        inputSchema: {
          type: "object",
          properties: {
            path: {
              type: "string",
              description:
                "Caminho relativo da nota no vault, ex: '01 - Sessões/Sessão 01/Sessão 01 - Registro.md'",
            },
          },
          required: ["path"],
        },
      },
      {
        name: "read_note",
        description:
          "Lê o conteúdo markdown completo de uma nota do vault do Obsidian.",
        inputSchema: {
          type: "object",
          properties: {
            path: {
              type: "string",
              description:
                "Caminho relativo da nota no vault (com extensão .md).",
            },
          },
          required: ["path"],
        },
      },
      {
        name: "create_or_update_note",
        description:
          "Cria uma nova nota ou sobrescreve o conteúdo de uma nota existente no vault do Obsidian.",
        inputSchema: {
          type: "object",
          properties: {
            path: {
              type: "string",
              description: "Caminho relativo da nota no vault.",
            },
            content: {
              type: "string",
              description: "Conteúdo Markdown a ser salvo na nota.",
            },
          },
          required: ["path", "content"],
        },
      },
      {
        name: "append_to_note",
        description:
          "Adiciona texto ao final de uma nota existente no vault do Obsidian.",
        inputSchema: {
          type: "object",
          properties: {
            path: {
              type: "string",
              description: "Caminho relativo da nota no vault.",
            },
            content: {
              type: "string",
              description: "Texto a ser acrescentado ao final da nota.",
            },
          },
          required: ["path", "content"],
        },
      },
      {
        name: "delete_note",
        description: "Exclui uma nota do vault do Obsidian.",
        inputSchema: {
          type: "object",
          properties: {
            path: {
              type: "string",
              description: "Caminho relativo da nota a ser excluída.",
            },
          },
          required: ["path"],
        },
      },
      {
        name: "list_files",
        description:
          "Lista arquivos e subpastas de um diretório do vault do Obsidian.",
        inputSchema: {
          type: "object",
          properties: {
            directory: {
              type: "string",
              description:
                "Diretório relativo (opcional, deixe vazio para listar a raiz do vault).",
            },
          },
        },
      },
      {
        name: "search_notes",
        description:
          "Pesquisa notas no vault utilizando o índice interno de busca do Obsidian.",
        inputSchema: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description: "Texto ou termo a ser pesquisado.",
            },
          },
          required: ["query"],
        },
      },
      {
        name: "list_tags",
        description:
          "Lista todas as tags utilizadas no vault e a quantidade de ocorrências de cada uma.",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "list_commands",
        description:
          "Lista todos os comandos da paleta do Obsidian disponíveis no Windows.",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "execute_command",
        description:
          "Executa uma ação da paleta de comandos do Obsidian no Windows.",
        inputSchema: {
          type: "object",
          properties: {
            commandId: {
              type: "string",
              description:
                "ID do comando a executar (ex: 'editor:save-file', obtido via list_commands).",
            },
          },
          required: ["commandId"],
        },
      },
    ],
  };
});

// Execução das ferramentas
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case "get_active_file": {
        const file = await client.getActiveFile();
        return {
          content: [
            {
              type: "text",
              text: `Arquivo ativo: ${file.path}\n\n${file.content}`,
            },
          ],
        };
      }

      case "open_file": {
        const path = String(args?.path || "");
        if (!path) throw new Error("Parâmetro 'path' é obrigatório.");
        await client.openFile(path);
        return {
          content: [
            {
              type: "text",
              text: `Arquivo aberto com sucesso no Obsidian: ${path}`,
            },
          ],
        };
      }

      case "read_note": {
        const path = String(args?.path || "");
        if (!path) throw new Error("Parâmetro 'path' é obrigatório.");
        const content = await client.readNote(path);
        return {
          content: [
            {
              type: "text",
              text: content,
            },
          ],
        };
      }

      case "create_or_update_note": {
        const path = String(args?.path || "");
        const content = String(args?.content || "");
        if (!path) throw new Error("Parâmetro 'path' é obrigatório.");
        await client.createOrUpdateNote(path, content);
        return {
          content: [
            {
              type: "text",
              text: `Nota "${path}" salva com sucesso no vault.`,
            },
          ],
        };
      }

      case "append_to_note": {
        const path = String(args?.path || "");
        const content = String(args?.content || "");
        if (!path) throw new Error("Parâmetro 'path' é obrigatório.");
        await client.appendToNote(path, content);
        return {
          content: [
            {
              type: "text",
              text: `Conteúdo acrescentado com sucesso à nota "${path}".`,
            },
          ],
        };
      }

      case "delete_note": {
        const path = String(args?.path || "");
        if (!path) throw new Error("Parâmetro 'path' é obrigatório.");
        await client.deleteNote(path);
        return {
          content: [
            {
              type: "text",
              text: `Nota "${path}" excluída com sucesso.`,
            },
          ],
        };
      }

      case "list_files": {
        const dir = String(args?.directory || "");
        const files = await client.listFiles(dir);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(files, null, 2),
            },
          ],
        };
      }

      case "search_notes": {
        const query = String(args?.query || "");
        if (!query) throw new Error("Parâmetro 'query' é obrigatório.");
        const results = await client.searchNotes(query);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(results, null, 2),
            },
          ],
        };
      }

      case "list_tags": {
        const tags = await client.listTags();
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(tags, null, 2),
            },
          ],
        };
      }

      case "list_commands": {
        const commands = await client.listCommands();
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(commands, null, 2),
            },
          ],
        };
      }

      case "execute_command": {
        const commandId = String(args?.commandId || "");
        if (!commandId) throw new Error("Parâmetro 'commandId' é obrigatório.");
        await client.executeCommand(commandId);
        return {
          content: [
            {
              type: "text",
              text: `Comando "${commandId}" executado com sucesso no Obsidian.`,
            },
          ],
        };
      }

      default:
        throw new Error(`Ferramenta desconhecida: ${name}`);
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      isError: true,
      content: [
        {
          type: "text",
          text: `Erro: ${message}`,
        },
      ],
    };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("[obsidian-mcp] Servidor MCP iniciado via stdio.");
}

main().catch((err) => {
  console.error("[obsidian-mcp] Erro fatal:", err);
  process.exit(1);
});
