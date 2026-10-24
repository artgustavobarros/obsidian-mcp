# Skills para a CLI oficial do Obsidian

Pesquisa em 2026-10-24. Trata apenas da interface; não contém dados do vault.

## Recomendação

A melhor skill pública encontrada para a **CLI oficial** é [`kepano/obsidian-skills@obsidian-cli`](https://www.skills.sh/kepano/obsidian-skills/obsidian-cli). A página do skills.sh mostra cerca de 80,7 mil instalações e 50 mil estrelas no [repositório de origem](https://github.com/kepano/obsidian-skills). O arquivo [SKILL.md do autor](https://github.com/kepano/obsidian-skills/blob/main/skills/obsidian-cli/SKILL.md) ensina sintaxe, seleção explícita de vault e nota e remete a `obsidian help` para a lista atual de comandos. A skill é simples, sem scripts de execução.

| Candidata | Evidência | Ajuste a este projeto |
| --- | --- | --- |
| [`kepano/obsidian-skills@obsidian-cli`](https://www.skills.sh/kepano/obsidian-skills/obsidian-cli) | Maior adoção encontrada; [fonte GitHub](https://github.com/kepano/obsidian-skills) e [skill](https://github.com/kepano/obsidian-skills/blob/main/skills/obsidian-cli/SKILL.md). | Melhor base pública para CLI oficial. Descrição ampla, inclui desenvolvimento de plugins, então convém adaptar o gatilho ao papel de mediador deste projeto. |
| [`gmickel/obsidian-skill`](https://github.com/gmickel/obsidian-skill) | Skill com referências sob demanda e checagem da versão do executável; repositório com cerca de 5 estrelas. | Mais detalhada, mas menos testada pela comunidade; não cobre a configuração WSL deste projeto. |
| [`rokokol/obsidian-cli-skill`](https://github.com/rokokol/obsidian-cli-skill) | Registra comportamento observado da CLI, casos de falha e um script auxiliar; repositório com cerca de 1 estrela. | Útil como referência de armadilhas; instalar também traz script e complexidade que não se justificam para o escopo atual. |
| [`hkuds/cli-anything@cli-anything-obsidian`](https://www.skills.sh/hkuds/cli-anything/cli-anything-obsidian) | Aproximadamente 801 instalações, mas usa Python e o plugin Local REST API. | Não é skill para a CLI oficial; preserva a dependência do plugin que o usuário quer avaliar. |

A skill `kepano` serviu de referência para a [skill local](../.agents/skills/obsidian-cli/SKILL.md), adaptada para distinguir a CLI oficial da antiga CLI deste projeto. Depois da pesquisa, o usuário autorizou a mudança em [`AGENTS.md`](../AGENTS.md): leitura e escrita do vault agora usam a CLI oficial.

## Aplicativo aberto

A [ajuda oficial da CLI](https://obsidian.md/help/cli) diz que **o aplicativo Obsidian precisa estar em execução**. Se estiver fechado, o primeiro comando pode iniciá-lo automaticamente; isso não torna a CLI independente do aplicativo. No Windows, a CLI depende do redirecionador `Obsidian.com` incluído no instalador 1.12.7+. A documentação recomenda atualizar o instalador, ativar **Settings → General → Command line interface** e registrar o comando no PATH.

Mais tarde, o usuário autorizou a remoção do plugin. A CLI oficial foi testada com leitura de nota; o comando `obsidian` no WSL agora aponta para ela. O plugin Local REST API foi desinstalado do Obsidian, e os registros MCP do WSL foram removidos. O aplicativo Obsidian continua necessário para usar a CLI.
