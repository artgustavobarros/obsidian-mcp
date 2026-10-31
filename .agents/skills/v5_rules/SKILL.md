---
name: v5_rules
description: Calcular e resolver mecânicas de Vampire: The Masquerade 5th Edition (V5): paradas de dados, dificuldades, economia de sangue (Rouse e Fome), Falha Bestial, Crítico Caótico, Compulsões, combate, dano e Humanidade/Remorso.
---

# V5 Rules Engine — Compêndio Mecânico e Operacional

## 1. Processos de Resolução de Testes

### Fluxo 1: Teste Simples (Atributo + Perícia vs. Dificuldade)
1. **Definir Parada:** `[Atributo] + [Perícia]`. Substitua dados normais por **Dados de Fome** até o nível atual de Fome do personagem (1 a 5).
2. **Definir Dificuldade (e Regra de *Pegar Metade / Take Half*):**
   * Para tarefas fora de conflito direto onde metade da parada ($\lfloor Parada / 2 \rfloor$) for igual ou superior à Dificuldade, recomende **Pegar Metade (Take Half)** ou sucesso automático para evitar rolagens triviais e desgaste artificial dos Dados de Fome.
   * **Dif. 1 (Rotineiro):** Ação básica sob calma (arrombar trinco comum sem pressa).
   * **Dif. 2 (Médio / Padrão):** Homem comum sob estresse (dirigir na chuva, mentir para sentinela desatenta).
   * **Dif. 3 (Desafiador / Profissional):** Exige treinamento sério (notar veneno sutil, resistir a interrogador experiente).
   * **Dif. 4 (Difícil / Alta Voltagem):** Situação de alto risco (invadir prédio militar vigiado, intimidar coronel armado).
   * **Dif. 5+ (Extremo / Sobrenatural):** Quase impossível para mortais (resistir a Laço de Sangue, lutar contra pelotão).
3. **Avaliar Sucessos:** Cada dado $\ge 6$ é um sucesso. Cada par de 10s em dados normais vale **4 sucessos**.
4. **Graduação de Margem ($Sucessos - Dificuldade$):**
   * **Margem 0 (Sucesso Marginal):** Objetivo alcançado por um triz, com barulho, lentidão ou deixando ponta solta.
   * **Margem +1 (Sucesso Limpo):** Vitória profissional, discreta e sem complicações extras.
   * **Margem +2 ou mais (Crítico / Folga):** Vitória folgada com vantagem tática, segredo adicional ou prestígio social.

### Fluxo 2: Teste Disputado (Contest / Conflito Oposto)
* Ambas as partes rolam suas paradas completas.
* O lado com mais sucessos vence.
* **Margem Líquida:** $Sucessos_{Vencedor} - Sucessos_{Perdedor}$. Essa margem determina o dano ou a profundidade do efeito.
* Em caso de empate, a situação entra em impasse (nenhum avança) ou ambos sofrem dano simultâneo.

### Fluxo 3: Trabalho em Equipe (Teamwork)
* Um personagem assume a **Liderança** e realiza a rolagem principal.
* Cada aliado qualificado (com pelo menos 1 ponto na Perícia utilizada) soma **+1 dado bônus** à parada do líder (bônus máximo = Atributo relevante do líder).

### Fluxo 4: Avanço de Relógios (Progresso e Perigo)
Quando uma cena usar relógios (4, 6 ou 8 marcas), converta a margem do teste diretamente em marcas acompanhadas de um **sinal sensorial na ficção**, evitando empilhar punições em espiral da morte:
* **Relógio de Progresso (Objetivo do Grupo):**
  * **Margem 0 (Sucesso Marginal):** escolha **OU** avanço com atrito menor na cena (+1 marca no progresso com custo local/tempo) **OU** +1 marca no progresso e +1 marca no relógio de perigo.
  * **Margem +1 (Sucesso Limpo):** +1 marca limpa.
  * **Margem +2 ou mais / Crítico:** +2 marcas (ou +3 se abordagem tiver grande alavancagem ficcional).
  * **Crítico Caótico:** +2 marcas no progresso, mas dispara complicação da Besta (ou +1/+2 marcas no perigo quando o barulho/método brutal alertar a ameaça).
* **Relógio de Perigo / Alerta (Ameaça ou Contagem Regressiva):**
  * **Falha Simples ou Perda de Tempo Ficcional:** +1 marca no perigo.
  * **Falha Bestial:** aplica a **Compulsão** ativa na cena como custo principal (some +1 marca no perigo apenas se a falha gerar barulho ou alerta direto, nunca +2 automático acumulado com a Compulsão).

---

## 2. A Economia do Sangue (Rouse, Fome & Potência)

### Cheque de Incitação (Rouse Check)
* Role 1d10 isolado:
  * **Resultado 6 a 10:** Sucesso. O sangue se preserva; a Fome não sobe.
  * **Resultado 1 a 5:** Falha. O sangue foi gasto; **aumente a Fome em +1** (máximo 5).
* **Gatilhos Obrigatórios de Rouse Check:**
  * Despertar a cada anoitecer (o custo diário de existir).
  * Cura Vampírica: reparar dano superficial no início do turno (cura 1 a 3 pontos, conforme Potência de Sangue).
  * Surto de Sangue (Blood Surge): somar dados bônus temporários em um teste físico ou social.
  * Ativação de poderes de Disciplina que declarem "Custo: 1 Cheque de Rouse".

### Tabela de Potência de Sangue (Blood Potency)

| Nível (BP) | Geração Típica | Surto de Sangue | Cura Superficial por Rouse | Re-rolagem de Rouse | Severidade da Maldição |
|---|---|---|---|---|---|
| **0** | Sangue-fraco | Nenhum | 1 ponto | Nenhuma | 0 |
| **1** | Neófito (12ª–13ª) | +2 dados | 1 ponto | Nenhuma | 1 |
| **2** | Ancilla (10ª–11ª) | +2 dados | 2 pontos | Poderes de Nível 1 | 2 |
| **3** | Ancilla Velho (9ª) | +3 dados | 2 pontos | Poderes de Nível 1 e 2 | 2 |
| **4** | Ancião (8ª) | +3 dados | 3 pontos | Poderes de Nível 1 e 2 | 3 |

---

## 3. A Besta em Ação: Falha Bestial, Crítico Caótico & Compulsões

### Falha Bestial (Bestial Failure)
* **Gatilho:** O total de sucessos foi inferior à Dificuldade E pelo menos um dado de Fome tirou **1**.
* **Efeito:** A ação falha categoricamente e a Besta se manifesta, impondo uma **Compulsão** que dura até o fim da cena ou até ser satisfeita.

### Tabela de Compulsões Gerais

| Compulsão | Impulso da Besta | Penalidade Mecânica |
|---|---|---|
| **Fome (Hunger)** | Obsessão primária em alimentar-se agora de qualquer fonte viável. | -2 dados em qualquer ação que não seja procurar sangue ou alimentar-se. |
| **Dominância (Dominance)** | Precisa subjugar alguém próximo para reafirmar controle e poder. | -2 dados em ações sociais ou cooperativas até que alguém se curve formalmente. |
| **Destruição (Harm)** | Desejo violento de destruir um objeto de valor ou infligir dor física. | -2 dados em testes mentais ou de contenção até quebrar algo significativo. |
| **Paranoia (Paranoia)** | Pavor de traição ou emboscada; desconfiança absoluta dos aliados. | -2 dados em qualquer teste social; recusa-se a ficar de costas ou desarmado. |

### Compulsões de Clã (Exemplos Canônicos)
* **Brujah (Rebelião):** O vampiro se rebela contra qualquer figura de autoridade ou ordem direta.
* **Gangrel (Regressão Animal):** O vampiro perde a articulação civilizada e comunica-se apenas por rosnados e gestos territoriais.
* **Malkaviano (Delírio):** Uma verdade oculta ou alucinação desconcertante turva a percepção prática (-2 dados em Percepção).
* **Nosferatu (Criptofilia):** Obsessão por descobrir um segredo podre de alguém antes de qualquer cooperação.
* **Toreador (Obsessão Estética):** Fascinado por uma pessoa, objeto ou detalhe do ambiente; fica paralisado em contemplação.
* **Tremere (Perfeccionismo):** Recusa-se a aceitar qualquer resultado imperfeito; precisa repetir ou polir a ação (-2 em novas tarefas).
* **Ventrue (Comando):** Precisa emitir ordens e fazer outros executarem o trabalho em seu lugar.

### Crítico Caótico (Messy Critical)
* **Gatilho:** Vitória com par de 10s onde pelo menos um dos 10s está em um **Dado de Fome**.
* **Efeito:** O personagem obtém sucesso absoluto no teste, mas a Besta conduz a vitória com métodos brutais e desumanos.
* **O Narrador escolhe uma consequência compatível com a natureza da ação:**
  1. *Quebra da Máscara:* Exibição ostensiva de presas, força grotesca ou sangue na frente de mortais (+Frestas imediatas).
  2. *Alienação Social:* O alvo ou testemunhas cooperam por puro pavor visceral, mas juram vingança ou denunciam a coterie.
  3. *Dano Colateral:* Destruição do ambiente, perda de uma pista delicada ou ferimento acidental em um aliado.
  4. *Distorção Mental, Obsessão ou Perda de Tempo (Testes Mentais, Acadêmicos e Sutis):* A Besta contamina a leitura (a pista vem filtrada pela paranoia, fome ou fúria do vampiro), consome tempo precioso em fixação obsessiva ou inutiliza a fonte consultada após extrair a informação, sem forçar violência física absurda.

---

## 4. Combate, Tipos de Dano e Empalamento

### Absorção Vampírica (A Regra de Ouro)
* **Sangue-Fracos (Thin-Bloods):** Consulte as qualidades e defeitos do personagem antes de aplicar regras de vampiros plenos. Sem *Resiliência Vampírica*, o sangue-fraco sofre dano de armas de fogo e lâminas como mortal (**Dano Agravado**); com *Fragilidade Mortal*, recupera-se como mortal sem curar por Cheque de Rouse; e só realiza testes de Frenesi/Rötschreck se possuir *Temperamento Bestial* ou *Heliofobia*.
* **Dano Superficial em Vampiros Plenos (ou com Resiliência Vampírica):** Armas de fogo, socos, pontapés, facadas e clavas causam **Dano Superficial**.
* **Cálculo:** Todo dano superficial sofrido por vampiros é **DIVIDIDO POR 2 (arredondado para cima)** após a absorção de sucessos líquidos.
  * *Exemplo:* Um tiro de fuzil causa 5 de dano superficial líquido $\rightarrow$ o vampiro anota apenas 3 caixas de dano superficial na ficha.
* **Dano Agravado Direto:**
  * **Fogo**, **Luz Solar** e dentes/garras sobrenaturais causam dano Agravado integral (sem divisão).
  * Atingir o limite da trilha de Vitalidade: quando todas as caixas estiverem marcadas com Superficial, cada novo dano superficial converte uma caixa existente em **Dano Agravado**.

### Empalamento no Coração
* Ataque direcionado com estaca de madeira: **Dificuldade da rolagem de ataque aumenta em +2**.
* Se o ataque acertar e causar **3 ou mais pontos de dano penetrante** após a redução, o coração é trespassado.
* **Efeito:** O vampiro cai paralisado em **Torpor Imediato** e permanece imóvel até que a estaca seja fisicamente extraída.

---

## 5. Humanidade, Máculas (Stains) e Teste de Remorso

* **Gatilho de Máculas:** Violar Convicções pessoais, quebrar Crônicas da mesa ou cometer atrocidades desumanas.
* **Teste de Remorso (Fim da Sessão):**
  * Parada de Dados = **Caixas vazias (não marcadas) na trilha de Humanidade** (mínimo de 1 dado).
  * **Pelo menos um 6+:** O vampiro sente a dor de seus atos e mantém sua Humanidade. Limpe todas as Máculas.
  * **Nenhum sucesso:** A alma cede à indiferença da Besta. **Perca 1 ponto permanente de Humanidade** e sofra 1 ponto de dano agravado em Força de Vontade.

---

## 6. Tabela Anti-Racionalização (Anti-Rationalization Table)

| Racionalização Comum da IA / Narrador | Realidade Mecânica Estrita do V5 | Regra de Execução Obrigatória |
|---|---|---|
| *"O jogador descreveu bem a ação, então na Falha Bestial vou dar só um susto ou tensão leve."* | A Besta **sempre** cobra um tributo mecânico ou narrativo severo. | Aplique obrigatoriamente uma **Compulsão** (Geral ou de Clã) ou uma perda grave de recurso/reputação. |
| *"Tiro de fuzil ou revólver no peito causa Dano Agravado porque é arma militar pesada."* | Para vampiros, armas de fogo causam **Dano Superficial**. | Dano Superficial em vampiros é sempre **dividido por 2** (arredondado para cima). Agravado só com fogo, sol ou dentes/garras sobrenaturais. |
| *"O jogador tirou par de 10s e teve muitos sucessos, então o 10 no dado de fome não importa."* | Um 10 em dado de fome converte o teste em **Crítico Caótico (Messy Critical)**. | O objetivo é alcançado, mas a Besta assume a autoria: quebra da Máscara, brutalidade excessiva, perda de vantagem social ou (em testes mentais/sutis) distorção paranoica, perda de tempo ou dano à fonte. |
| *"Vou narrar o que o personagem do jogador sente e decide fazer após o teste."* | Agência do jogador é intocável. | Entregue a provocação mecânica/da Besta e devolva a escolha da ação ao jogador. |

---

## 7. Critérios de Conclusão para Consultas de Regras (Verification Gate)

Toda resposta desta skill diante de um desafio mecânico deve entregar:
1. **Parada Discriminada:** `[Atributo] + [Perícia] ± Modificadores` (especificando quantos dados de Fome entram).
2. **Dificuldade Justificada:** Nível numérico (1 a 5+) ancorado na situação ficcional.
3. **Escalonamento de Margem:** O que acontece na Margem 0 (por um triz), Margem +1 (limpo) e Margem +2 (crítico).
4. **Vetor da Besta:** Riscos de Cheque de Rouse, Falha Bestial ou Crítico Caótico aplicáveis à cena.

---

## 8. Referências Especializadas (Progressive Disclosure)

Consulte os arquivos dedicados na subpasta `references/` sob demanda para tabelas enciclopédicas:
* **Poderes e Disciplinas:** [`references/disciplinas.md`](references/disciplinas.md) — Ativação, paradas e custos de Rouse para Rapidez, Potência, Fortitude, Auspícios, Dominação, Presença, Ofuscação, Feitiçaria de Sangue e Alquimia.
* **Frenesi e Caçada:** [`references/frenesi-e-predadores.md`](references/frenesi-e-predadores.md) — Dificuldades de resistência para Fúria, Terror (Rötschreck) e Fome; tipos de predador (Alleycat, Siren, Sandman, etc.).
* **Armamento & Balística:** [`references/armas-e-conflito.md`](references/armas-e-conflito.md) — Estatísticas de armas de época (1936: Mauser, Winchester, facões, garruchas), cobertura e coletes de couro/militares.
