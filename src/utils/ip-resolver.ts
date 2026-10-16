import { execSync } from "node:child_process";
import fs from "node:fs";

export function getWindowsHost(): string {
  if (process.env.OBSIDIAN_HOST && process.env.OBSIDIAN_HOST.trim().length > 0) {
    return process.env.OBSIDIAN_HOST.trim();
  }

  // Tenta extrair a rota padrão do WSL
  try {
    const route = execSync("ip route show default", { encoding: "utf8" });
    const match = route.match(/default via ([0-9.]+)/);
    if (match && match[1]) {
      return match[1];
    }
  } catch {
    // fallback
  }

  // Tenta ler de /etc/resolv.conf
  try {
    if (fs.existsSync("/etc/resolv.conf")) {
      const content = fs.readFileSync("/etc/resolv.conf", "utf8");
      const match = content.match(/nameserver\s+([0-9.]+)/);
      if (match && match[1] && !match[1].startsWith("127.")) {
        // No WSL2 standard, nameserver pode ser o host ou DNS proxy
        return match[1];
      }
    }
  } catch {
    // fallback
  }

  return "127.0.0.1";
}

export function getBaseUrl(): string {
  if (process.env.OBSIDIAN_BASE_URL && process.env.OBSIDIAN_BASE_URL.trim().length > 0) {
    return process.env.OBSIDIAN_BASE_URL.trim().replace(/\/+$/, "");
  }

  const protocol = process.env.OBSIDIAN_PROTOCOL || "https";
  const port = process.env.OBSIDIAN_PORT || "27124";
  const host = getWindowsHost();

  return `${protocol}://${host}:${port}`;
}
