# Desacoplar Skill de Criação de NPCs de Co-roteirista de Mesa

Decidimos extrair a lógica de concepção e fichamento de NPCs da skill `co-roterista-de-mesa` para uma skill dedicada, `arquiteto-de-npcs`. 

`co-roterista-de-mesa` permanece focada em cenas, ritmo, nós proativos e continuidade de sessões, acionando `arquiteto-de-npcs` quando precisar compor elenco. Isso reduz o inchaço de contexto e permite invocar a criação de NPCs isoladamente sem arrastar o fluxo de roteiro.
