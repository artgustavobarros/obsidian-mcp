# Obsidian MCP Server & CLI (WSL to Windows)

Servidor MCP (Model Context Protocol) e ferramenta de linha de comando (CLI) para integrar o **Obsidian** rodando no Windows com agentes de IA (Antigravity, Claude Desktop, Cursor, Cline) e terminais rodando no **WSL2** ou Linux.

## 🚀 Funcionalidades

- **Detecção automática de IP do Windows**: Resolve dinamicamente o IP do host Windows a partir do WSL2 (`ip route default` / `/etc/resolv.conf`).
- **Suporte a HTTPS autoassinado**: Aceita os certificados SSL padrão gerados pelo plugin Local REST API do Obsidian.
- **Protocolo MCP nativo (stdio)**: Compatível com Google Antigravity, Claude Desktop, Cursor e qualquer cliente MCP.
- **CLI integrada**: Permite interagir com o Obsidian diretamente pelo terminal bash no WSL.

### Ferramentas MCP Disponíveis

| Ferramenta | Descrição |
|---|---|
| `get_active_file` | Retorna o caminho e conteúdo da nota aberta/em foco no Obsidian |
| `open_file` | Abre uma nota no Obsidian no Windows, tornando-a a aba ativa |
| `read_note` | Lê o conteúdo markdown completo de uma nota do vault |
| `create_or_update_note` | Cria ou atualiza o conteúdo de uma nota |
| `append_to_note` | Adiciona texto ao final de uma nota existente |
| `delete_note` | Remove uma nota do vault |
| `list_files` | Lista arquivos e pastas do vault |
| `search_notes` | Pesquisa no índice interno de notas do Obsidian |
| `list_tags` | Lista todas as tags e suas contagens de ocorrência |
| `list_commands` | Lista os comandos disponíveis na paleta do Obsidian |
| `execute_command` | Executa um comando da paleta do Obsidian |

---

## 📋 Pré-requisitos

1. **Obsidian** instalado no Windows com o plugin comunitário [Local REST API](https://github.com/coddingtonbear/obsidian-local-rest-api) instalado e ativado.
2. Copie a chave de API gerada nas configurações do plugin *Local REST API* no Obsidian.
3. **Node.js** (v18+) e **npm** instalados no ambiente WSL2 / Linux.

---

## ⚙️ Instalação e Configuração

1. Clone o repositório:
```bash
git clone https://github.com/artgustavobarros/obsidian-mcp.git
cd obsidian-mcp
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o arquivo de ambiente:
```bash
cp .env.example .env
```
Edite o arquivo `.env`:
```env
OBSIDIAN_API_KEY=sua_chave_de_api_aqui
OBSIDIAN_PORT=27124
OBSIDIAN_PROTOCOL=https
# Deixe OBSIDIAN_HOST vazio para detecção automática do IP do Windows no WSL2:
OBSIDIAN_HOST=
```

4. Compile o projeto TypeScript:
```bash
npm run build
```

---

## 🛠️ Configuração nos Clientes MCP

### Antigravity (`~/.gemini/antigravity-cli/mcp_config.json`)
```json
{
  "mcpServers": {
    "obsidian": {
      "command": "node",
      "args": ["/caminho/absoluto/para/obsidian-mcp/dist/index.js"],
      "env": {
        "OBSIDIAN_API_KEY": "sua_chave_aqui"
      }
    }
  }
}
```

### Claude Desktop (`claude_desktop_config.json`)
```json
{
  "mcpServers": {
    "obsidian": {
      "command": "node",
      "args": ["/caminho/absoluto/para/obsidian-mcp/dist/index.js"]
    }
  }
}
```

---

## 💻 Uso via Linha de Comando (CLI)

Você pode interagir diretamente com o Obsidian a partir do terminal:

```bash
# Verificar status da conexão
node dist/cli.js status

# Ver qual nota está aberta no momento
node dist/cli.js active

# Ler uma nota
node dist/cli.js read "Minhas Anotações.md"

# Abrir uma nota no Obsidian no Windows
node dist/cli.js open "01 - Sessões/Sessão 01.md"

# Buscar notas
node dist/cli.js search "projeto"

# Adicionar conteúdo a uma nota
node dist/cli.js append "Diário/2026-10-16.md" "Reunião finalizada com sucesso."

# Listar tags
node dist/cli.js tags

# Executar comando da paleta
node dist/cli.js cmd "app:open-vault"
```

Opcionalmente, vincule o CLI globalmente no WSL:
```bash
npm link
# Agora você pode usar diretamente:
obsidian status
obsidian active
```

---

## 📄 Licença

Distribuído sob a licença [MIT](LICENSE).
