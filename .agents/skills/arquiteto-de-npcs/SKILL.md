---
name: arquiteto-de-npcs
description: Criar e aprofundar fichas narrativas e paradas mecânicas de NPCs/SPCs para V5 com continuidade no Obsidian (figurantes, contatos, aliados e antagonistas).
---

# Arquiteto de NPCs (SPCs V5)

## 1. Fluxo de Execução

1. **Sondagem no Vault (CLI) & Alinhamento de Personalidade**:
   * Procure no vault se já existe um NPC registrado ocupando a função ou relação desejada; se existir, apresente-o para reaproveitamento. Caso opte por criar um novo (porque nada registrado serve ou porque reutilizar um conhecido deixaria o mundo artificialmente pequeno / entregaria o mistério por eliminação), **avise explicitamente no plano que optou por criar um novo e apresente a justificativa**, conferindo colisão de nomes.
   * Quando a personalidade ainda não tiver sido definida no pedido, pergunte se o narrador já tem alguma ideia para a personalidade considerando o papel do NPC ou se prefere que você a gere e recomende.
2. **Definição de Nível & Nomenclatura**:
   * **Nomenclatura e Tom Verossímeis**: Os nomes e falas devem respeitar o contexto do cenário em que estiverem inseridos temporal e geopoliticamente, rejeitando estereótipos, caricaturas, exotizações e representações xenofóbicas. Construa os personagens como pessoas reais, complexas e dignas do seu contexto histórico.
   * **Figurante**: Mook de balcão, guarda de passagem ou transeunte (Ocupação + 1 detalhe sensorial ou atitude imediata + parada padrão; Nome e Idade opcionais, usados quando os jogadores interagirem diretamente ou pedirem, evitando dar peso de NPC-chave a todo transeunte).
   * **Destaque**: Personagem com agência, ambição, conflito ou segredo (Universal Template Alexandrian + V5 SPC).
3. **Composição Mecânica (Para todo NPC)**:
   * Declare a **Parada de Dados Padrão** (Físico, Social, Mental) — *obrigatório*.
   * Acrescente **Atributos Secundários**, **Paradas Excepcionais** e **Especial** conforme a relevância do NPC na cena.
4. **Entrega e Trava de Escrita**:
   * Entregue a proposta na conversa e siga `AGENTS.md` para qualquer leitura ou escrita no vault.

---

## 2. Modelos de Saída

### Modelo A: Figurante
* **[Ocupação/Função]** *(opcional: [Nome], [Idade] anos — se houver interação direta)*
  * **Detalhe / Atitude**: [1 detalhe sensorial ou reação imediata].
  * **Utilidade na cena**: [o que faz ou informa se ninguém intervir].
  * **Mecânica**: Padrão (Físico X, Social Y, Mental Z) | *[Secundários/Excepcionais/Especial se relevante]*.

### Modelo B: Personagem de Destaque
### [Nome] ([Conceito / Clã / Papel])
- **Aparência**: 1 a 2 frases prontas para narrar a primeira impressão, usando **sinestesia** (cruzar visual, cheiro, temperatura ou textura) quando reforçar a presença.
- **Voz & Trejeito**: Tom vocal, postura corporal e cacoete marcante.
- **Fala de Referência**: *"Frase típica entre aspas para calibrar a atuação"* (use cadência ou **quiasmo** — espelhamento A-B/B-A — para líderes, pregadores ou Anciões).
- **Ambição & Desejo**: O que busca no longo prazo vs. o que quer nesta noite.
- **Fachada, Mentira & Ponto de Quebra**: A máscara social que exibe, **a mentira em que acredita** para justificar seus atos e **o que o faria ceder, trair, recuar ou atacar** sob pressão dos jogadores (sem pré-roteirizar um arco fixo).
- **Segredo Portátil / Alavancagem**: Pista que carrega ou recurso para pressioná-lo.
- **Mecânica (SPC)**:
  - **Parada de Dados Padrão**: Físico X, Social Y, Mental Z *(obrigatório)*.
  - **Atributos Secundários**: Vitalidade [X], Força de Vontade [Y].
  - **Paradas Excepcionais**: [Perícia]: N, [Perícia]: N.
  - **Especial**: [Disciplinas ativas, Potência do Sangue, Humanidade].

---

## 3. Ponteiros de Contexto

* **Cálculo de Regras e Combate**: Delegue para `v5_rules` para resolver paradas, dificuldades, Fome e disputa de margem líquida.
* **Cenas, Relógios e Tramas**: Se foi acionado pela `co-roterista-de-mesa`, devolva a ficha pronta e encerre; acione `co-roterista-de-mesa` apenas quando o pedido direto ao `arquiteto-de-npcs` também solicitar cenas, relógios ou nós proativos.
