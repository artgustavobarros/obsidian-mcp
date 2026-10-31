---
name: arquiteto-de-npcs
description: Criar e aprofundar fichas narrativas e paradas mecânicas de NPCs/SPCs para V5 com continuidade no Obsidian (figurantes, contatos, aliados e antagonistas).
---

# Arquiteto de NPCs (SPCs V5)

## 1. Fluxo de Execução

1. **Sondagem no Vault (CLI)**:
   * Procure no vault se já existe um NPC registrado ocupando a função ou relação desejada; se existir, apresente-o para reaproveitamento. Se criar um novo, confira colisão de nomes.
2. **Definição de Nível & Nomenclatura**:
   * **Nomenclatura e Tom Verossímeis**: Os nomes e falas devem respeitar o contexto do cenário em que estiverem inseridos temporal e geopoliticamente, rejeitando estereótipos, caricaturas, exotizações e representações xenofóbicas. Construa os personagens como pessoas reais, complexas e dignas do seu contexto histórico.
   * **Figurante**: Mook de balcão, guarda de passagem ou transeunte (sempre com **Nome e Idade**, 3 linhas narrativas + parada mecânica).
   * **Destaque**: Personagem com agência, ambição, conflito ou segredo (Universal Template Alexandrian + V5 SPC).
3. **Composição Mecânica (Para todo NPC)**:
   * Declare a **Parada de Dados Padrão** (Físico, Social, Mental) — *obrigatório*.
   * Acrescente **Atributos Secundários**, **Paradas Excepcionais** e **Especial** conforme a relevância do NPC na cena.
4. **Entrega e Trava de Escrita**:
   * Entregue a proposta na conversa e siga `AGENTS.md` para qualquer leitura ou escrita no vault.

---

## 2. Modelos de Saída

### Modelo A: Figurante
* **[Nome] ([Idade] anos) — [Função/Ocupação]**
  * **Visual**: [1 frase descritiva].
  * **Voz/Trejeito**: [tom de voz ou cacoete físico].
  * **Utilidade na cena**: [o que faz ou informa se ninguém intervir].
  * **Mecânica**: Padrão (Físico X, Social Y, Mental Z) | *[Secundários/Excepcionais/Especial se relevante]*.

### Modelo B: Personagem de Destaque
### [Nome] ([Conceito / Clã / Papel])
- **Aparência**: 1 a 2 frases prontas para narrar a primeira impressão, usando **sinestesia** (cruzar visual, cheiro, temperatura ou textura) quando reforçar a presença.
- **Voz & Trejeito**: Tom vocal, postura corporal e cacoete marcante.
- **Fala de Referência**: *"Frase típica entre aspas para calibrar a atuação"* (use cadência ou **quiasmo** — espelhamento A-B/B-A — para líderes, pregadores ou Anciões).
- **Ambição & Desejo**: O que busca no longo prazo vs. o que quer nesta noite.
- **Fachada, Mentira & Arco**: A máscara social que exibe, **a mentira em que acredita** para justificar seus atos e a direção provável sob pressão (*queda*, *mudança* ou *convicção fixa*).
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
