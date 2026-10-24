---
name: obsidian-cli
description: Configurar e usar a CLI oficial do Obsidian a partir do WSL, distinguindo-a da CLI deste projeto. Use para dúvidas sobre comandos, busca e gestão de notas quando o acesso por CLI estiver autorizado.
---

# CLI oficial do Obsidian

Use esta skill para a **CLI oficial** do Obsidian no Windows. A [referência oficial](https://obsidian.md/help/cli) e `obsidian help` definem os comandos atuais. A [skill pública de referência](https://github.com/kepano/obsidian-skills/blob/main/skills/obsidian-cli/SKILL.md) cobre a sintaxe geral.

## Limite do projeto

Leia `AGENTS.md` antes de acessar o vault. Use a CLI oficial do Obsidian para conteúdo; siga as regras de leitura, escrita e autorização do projeto. Esta skill não amplia a autorização para modificar notas.

## Identifique o executável

1. No WSL, verifique `command -v obsidian`, `readlink -f "$(command -v obsidian)"` e a saída de ajuda antes de tratar `obsidian` como a CLI oficial. O alias deste projeto pode apontar para `dist/cli.js`, cuja sintaxe e dependência REST são diferentes.
2. A CLI oficial do Windows usa o redirecionador `Obsidian.com`. Verifique se ele está instalado e acessível pelo Windows. Se não estiver, reporte a lacuna; não atribua comandos oficiais ao alias local.
3. O Obsidian precisa executar no Windows. Se estiver fechado, o primeiro comando da CLI oficial pode iniciá-lo. A CLI não oferece acesso independente do aplicativo.

## Operações autorizadas

- Consulte `help` ou `help <comando>` para parâmetros antes de uma operação cuja sintaxe seja incerta.
- Na CLI oficial, parâmetros usam `nome=valor`; valores com espaços precisam de aspas. Use `vault=<nome-ou-id>` como primeiro parâmetro quando houver risco de escolher o vault errado.
- Sempre redirecione a entrada com `< /dev/null` no WSL para evitar que o wrapper `/init` trave esperando stdin.
- **Evite passar textos longos no argumento `content="..."`**: `Obsidian.com` empacota a linha de comando em JSON para o Electron via socket. Se o texto for longo (> 1-2 KB), contiver aspas ou múltiplas linhas, o JSON é corrompido e trava o Obsidian com um modal de erro no Windows. Para textos longos, grave em arquivo temporário (`%TEMP%`) e use `obsidian eval` com `app.vault.modify` + `fs.readFileSync`, excluindo o temporário logo após.
- Para nota conhecida, prefira `path=<caminho-exato-no-vault>`; `file=<nome>` faz resolução pelo nome e pode ser ambíguo. Não dependa da nota ativa para uma escrita.
- Siga a ordem de fontes e as regras de autorização de `AGENTS.md`. Antes de gravar, leia a nota exata; depois, leia-a de volta e confira a diferença. Mantenha conteúdo do vault fora do repositório local.

Se a CLI oficial não responder no WSL, reporte o comando tentado e o erro. A skill não substitui a instalação da CLI, a execução do Obsidian nem a conexão entre WSL e Windows.
