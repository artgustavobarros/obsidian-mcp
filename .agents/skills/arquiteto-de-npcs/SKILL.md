---
name: arquiteto-de-npcs
description: Concepção, ficha narrativa e paradas mecânicas de NPCs/SPCs para V5 com continuidade ancorada no Obsidian. Use para criar figurantes, contatos, antagonistas ou aprofundar fichas de elenco.
metadata:
  system: "Vampire: The Masquerade 5th Edition (V5)"
  version: "1.0.0"
  framework: "Addy Osmani (Process-over-Prose) + Matt Pocock (Leading Words & Co-location)"
  tags: "npc, spc, figurante, elenco, ficha, antagonista, v5, obsidian"
---

# Arquiteto de NPCs — Criação e Paradas de Antagonistas V5

Fornece ao narrador personagens de apoio (SPCs) rápidos, consistentes e prontos para uso em cena, integrados à continuidade do vault do Obsidian e ao sistema V5.

---

## 1. Fluxo de Execução

1. **Sondagem no Vault (CLI)**:
   * Antes de inventar, busque no vault se já existe um NPC registrado ocupando a função ou relação desejada.
   * Se existir, apresente o existente para reaproveitamento.
   * Se for criar um novo, verifique colisão de nomes no vault.
2. **Definição de Nível**:
   * **Figurante**: Mook de balcão, guarda de passagem ou transeunte (3 linhas narrativas + parada mecânica).
   * **Destaque**: Personagem com agência, ambição, conflito ou segredo (Universal Template Alexandrian + V5 SPC).
3. **Composição Mecânica (Para todo NPC)**:
   * Declare a **Parada de Dados Padrão** (Físico, Social, Mental) — *obrigatório*.
   * Acrescente **Atributos Secundários**, **Paradas Excepcionais** e **Especial** conforme a relevância do NPC na cena.
4. **Entrega e Trava de Escrita**:
   * Entregue a proposta na conversa.
   * **Não grave no vault** sem o comando explícito: *"registre isso no Obsidian"*.

---

## 2. Modelos de Saída

### Modelo A: Figurante
* **[Nome] — [Função/Ocupação]**
  * **Visual**: [1 frase descritiva].
  * **Voz/Trejeito**: [tom de voz ou cacoete físico].
  * **Utilidade na cena**: [o que faz ou informa se ninguém intervir].
  * **Mecânica**: Padrão (Físico X, Social Y, Mental Z) | *[Secundários/Excepcionais/Especial se relevante]*.

### Modelo B: Personagem de Destaque
### [Nome] ([Conceito / Clã / Papel])
- **Aparência**: 1 a 2 frases prontas para narrar a primeira impressão.
- **Voz & Trejeito**: Tom vocal, postura corporal e cacoete marcante.
- **Fala de Referência**: *"Frase típica entre aspas para calibrar a atuação"*.
- **Ambição & Desejo**: O que busca no longo prazo vs o que quer nesta noite.
- **Segredo Portátil / Alavancagem**: Pista que carrega ou recurso para pressioná-lo.
- **Mecânica (SPC)**:
  - **Parada de Dados Padrão**: Físico X, Social Y, Mental Z *(obrigatório)*.
  - **Atributos Secundários**: Vitalidade [X], Força de Vontade [Y].
  - **Paradas Excepcionais**: [Perícia]: N, [Perícia]: N.
  - **Especial**: [Disciplinas ativas, Potência do Sangue, Humanidade].

---

## 3. Ponteiros de Contexto

* **Cálculo de Regras e Combate**: Delegue para `v5_rules` para resolver paradas, dificuldades, Fome e disputa de margem líquida.
* **Cenas, Relógios e Tramas**: Delegue para `co-roterista-de-mesa` para encaixar o NPC em perguntas de cena e nós proativos.
