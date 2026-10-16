#!/usr/bin/env node
import { Command } from "commander";
import { ObsidianClient } from "./client.js";

const client = new ObsidianClient();
const program = new Command();

program
  .name("obsidian")
  .description("CLI para interagir com o Obsidian no Windows diretamente do WSL")
  .version("1.0.0");

program
  .command("status")
  .description("Verifica o status e conectividade com o Obsidian")
  .action(async () => {
    try {
      const status = await client.getStatus();
      console.log("Obsidian conectado com sucesso!\n", JSON.stringify(status, null, 2));
    } catch (err: any) {
      console.error("Erro ao conectar ao Obsidian:", err.message);
      process.exit(1);
    }
  });

program
  .command("active")
  .description("Exibe a nota atualmente aberta/ativa no Obsidian")
  .action(async () => {
    try {
      const active = await client.getActiveFile();
      console.log(`\x1b[36m[Nota Ativa]\x1b[0m ${active.path}\n`);
      console.log(active.content);
    } catch (err: any) {
      console.error(err.message);
      process.exit(1);
    }
  });

program
  .command("open <path>")
  .description("Abre uma nota na interface do Obsidian no Windows")
  .action(async (path: string) => {
    try {
      await client.openFile(path);
      console.log(`\x1b[32m✔\x1b[0m Aberto com sucesso no Obsidian: ${path}`);
    } catch (err: any) {
      console.error("Erro ao abrir nota:", err.message);
      process.exit(1);
    }
  });

program
  .command("read <path>")
  .description("Exibe o conteúdo markdown de uma nota do vault")
  .action(async (path: string) => {
    try {
      const content = await client.readNote(path);
      console.log(content);
    } catch (err: any) {
      console.error("Erro ao ler nota:", err.message);
      process.exit(1);
    }
  });

program
  .command("list [directory]")
  .description("Lista arquivos e pastas do vault")
  .action(async (directory = "") => {
    try {
      const files = await client.listFiles(directory);
      if (files.length === 0) {
        console.log("Nenhum arquivo encontrado.");
      } else {
        files.forEach((f) => console.log(f));
      }
    } catch (err: any) {
      console.error("Erro ao listar:", err.message);
      process.exit(1);
    }
  });

program
  .command("search <query>")
  .description("Pesquisa notas no vault")
  .action(async (query: string) => {
    try {
      const results = await client.searchNotes(query);
      console.log(`\x1b[36mEncontrados ${results.length} resultados para:\x1b[0m "${query}"\n`);
      for (const res of results.slice(0, 15)) {
        console.log(`• \x1b[32m${res.filename}\x1b[0m`);
      }
      if (results.length > 15) {
        console.log(`\n... e mais ${results.length - 15} notas.`);
      }
    } catch (err: any) {
      console.error("Erro na busca:", err.message);
      process.exit(1);
    }
  });

program
  .command("append <path> <text>")
  .description("Acrescenta texto ao final de uma nota")
  .action(async (path: string, text: string) => {
    try {
      await client.appendToNote(path, "\n" + text);
      console.log(`\x1b[32m✔\x1b[0m Conteúdo adicionado com sucesso a "${path}"`);
    } catch (err: any) {
      console.error("Erro ao adicionar conteúdo:", err.message);
      process.exit(1);
    }
  });

program
  .command("tags")
  .description("Lista todas as tags e ocorrências no vault")
  .action(async () => {
    try {
      const tags = await client.listTags();
      console.table(tags);
    } catch (err: any) {
      console.error("Erro ao listar tags:", err.message);
      process.exit(1);
    }
  });

program
  .command("cmd <commandId>")
  .description("Executa um comando da paleta do Obsidian no Windows")
  .action(async (commandId: string) => {
    try {
      await client.executeCommand(commandId);
      console.log(`\x1b[32m✔\x1b[0m Comando "${commandId}" executado com sucesso.`);
    } catch (err: any) {
      console.error("Erro ao executar comando:", err.message);
      process.exit(1);
    }
  });

program.parse(process.argv);
