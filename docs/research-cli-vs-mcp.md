# CLI ou MCP para acessar o Obsidian

Pesquisa técnica em 2026-10-24. Este arquivo trata apenas da arquitetura de acesso. Não contém dados do vault.

**Atualização após a pesquisa:** a CLI oficial foi configurada no WSL e testada com leitura de nota. As conexões MCP do WSL foram removidas, e o plugin Local REST API foi desinstalado do Obsidian. O estado de conexão descrito abaixo registra o momento inicial da pesquisa.

## Resposta

O servidor MCP **deste repositório** não é indispensável. Existem três caminhos distintos:

| Caminho | Uso mais direto | Condição principal |
| --- | --- | --- |
| CLI oficial do Obsidian | Comandos humanos e scripts locais | Obsidian 1.12.7+ instalado no Windows, opção CLI habilitada e aplicativo em execução. [Documentação oficial](https://obsidian.md/help/cli) |
| MCP embutido no plugin Local REST API | Agentes com cliente MCP HTTP | Versão do plugin com `/mcp/`, rede Windows–WSL acessível, chave Bearer e TLS configurado. [README do plugin](https://github.com/coddingtonbear/obsidian-local-rest-api) |
| Ponte MCP deste repositório | Clientes que exigem `stdio` ou lógica própria de WSL | Plugin REST acessível pela rede; o projeto traduz chamadas MCP em REST. [README local](../README.md) |

A CLI elimina o protocolo MCP **para quem usa shell**, mas não fornece ferramentas MCP descobertas pelo agente. MCP descreve ferramentas e seus parâmetros para clientes compatíveis. A CLI fornece comandos de processo e saída de texto; para o agente usá-la, ele precisa de acesso e permissão ao shell. Esta é uma inferência a partir da [documentação da CLI](https://obsidian.md/help/cli) e da [arquitetura do MCP](https://modelcontextprotocol.io/specification/2025-11-25/server/tools).

## CLI oficial: o que já cobre

A CLI oficial foi lançada em fevereiro de 2026. Ela oferece `read`, `files`, `search`, `search:context`, `create`, `append`, `prepend`, `delete`, comandos da paleta, tags, propriedades e outros comandos. `vault=<nome>` seleciona o vault; `path=<caminho>` aponta para a nota exata. O aplicativo precisa estar em execução, embora o primeiro comando possa iniciá-lo. Requer instalador Obsidian 1.12.7+ e ativação em **Settings → General → Command line interface**. [Ajuda oficial](https://obsidian.md/help/cli), [changelog](https://obsidian.md/changelog/page/3/).

O `obsidian` encontrado **neste WSL** não é a CLI oficial: `/home/arthur/.local/bin/obsidian` aponta para `dist/cli.js` deste repositório. Essa CLI local usa `src/client.ts` e a REST API. Seus comandos são `status`, `active`, `open`, `read`, `list`, `search`, `append`, `tags` e `cmd`; `search` imprime no máximo 15 caminhos, sem contexto. A CLI oficial usa sintaxe diferente, por exemplo `obsidian read path="..."`. [Código local da CLI](../src/cli.ts), [código local do cliente](../src/client.ts).

O WSL pode executar programas Windows pelo nome com a extensão do executável. Porém, `cmd.exe /C where Obsidian.com` **não encontrou** o redirecionador da CLI oficial no PATH do Windows nesta sessão. Isso não prova que o Obsidian esteja desinstalado; o registro da CLI ou o PATH pode faltar. A ajuda oficial diz que o instalador Windows fornece `Obsidian.com` como redirecionador de terminal. A chamada exata a partir deste WSL ainda precisa de teste com o Obsidian ativo. [Microsoft WSL interop](https://learn.microsoft.com/en-us/windows/wsl/interop), [ajuda da CLI](https://obsidian.md/help/cli).

## MCP nativo do plugin

O plugin Local REST API atual publica um servidor MCP em `/mcp/`, com transporte **Streamable HTTP** e cabeçalho `Authorization: Bearer <chave>`. O plugin documenta `https://127.0.0.1:27124/mcp/`; HTTP sem TLS em `27123` depende de ativação explícita. A versão atual documentada do plugin oferece leitura, escrita, busca, metadados e operações parciais em notas, além de recursos MCP. A linha 5.x já inclui o servidor MCP; a versão instalada aqui ainda não foi confirmada. [README do plugin](https://github.com/coddingtonbear/obsidian-local-rest-api), [releases](https://github.com/coddingtonbear/obsidian-local-rest-api/releases).

Codex aceita servidores MCP por URL HTTP. Logo, **em princípio**, pode ligar-se diretamente ao `/mcp/` do plugin, se o endpoint for alcançável e o certificado/chave forem aceitos. Isto deve ser verificado nesta máquina antes de aposentar a ponte. [Documentação Codex MCP](https://developers.openai.com/learn/docs-mcp), [README do plugin](https://github.com/coddingtonbear/obsidian-local-rest-api).

No WSL2 com rede NAT, `127.0.0.1` dentro do WSL não aponta automaticamente para um serviço Windows; usa-se o IP do host e o serviço Windows precisa aceitar conexões nele. Em rede espelhada, `localhost` pode funcionar nos dois sentidos. Isso vale tanto para REST quanto para MCP HTTP. O certificado HTTPS deve cobrir o nome ou IP escolhido e ser confiável para o cliente; o plugin oferece sua CA para instalação. [Microsoft WSL networking](https://learn.microsoft.com/en-us/windows/wsl/networking), [README do plugin](https://github.com/coddingtonbear/obsidian-local-rest-api).

## Estado verificado nesta sessão

- A ponte e a CLI própria compartilham `ObsidianClient` e dependem da REST API do plugin. [Arquivos locais](../src/client.ts).
- `obsidian status` tentou consultar o plugin e terminou em `Erro ao conectar ao Obsidian: fetch failed`. Portanto, não houve teste funcional do endpoint nativo nem confirmação da versão instalada.
- `cmd.exe /C where Obsidian.com` não encontrou a CLI oficial no PATH do Windows.
- Na pesquisa inicial, [AGENTS.md](../AGENTS.md) exigia MCP para o conteúdo do vault. O usuário depois autorizou a mudança; a regra vigente agora exige a CLI oficial.

## Decisão sugerida na pesquisa inicial

Para uso humano no terminal, a CLI oficial tende a simplificar. Para agentes, testar primeiro o MCP nativo do plugin: pode remover a manutenção da ponte sem perder a interface MCP. Manter a ponte própria só se o cliente exigir `stdio`, o MCP nativo não for alcançável pelo WSL, ou alguma função/controle específico deste projeto faltar. Antes da troca, confirmar versão do Obsidian/plugin, rede, autenticação, certificado e equivalência das operações realmente usadas.
