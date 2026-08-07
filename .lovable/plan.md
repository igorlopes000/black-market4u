# Incorporar exclusividades do dia da Black Friday

## Contexto

O briefing define a "Jogada especial no dia da Black" como um dos quatro pilares da ação. As exclusividades do dia da Black Friday estão concentradas no pacote **Comando Black**:

- **Pop-up de abertura:** slot exclusivo no dia da Black Friday.
- **Banner checkout:** presença exclusiva no dia da Black Friday.
- **Push notification:** 3 disparos/semana, com exclusividade no dia da Black Friday.

Hoje o deck já cobre mecânica, arquitetura operacional e investimento, mas não dá destaque isolado a esse momento de pico.

## Proposta recomendada

Criar um **novo slide dedicado** chamado **"Jogada Especial no Dia da Black"**, posicionado entre o slide **Arquitetura Operacional** e o slide **Investimento**. Isso eleva o pico da campanha antes de falar de valores, reforçando a escassez e o premium do Comando Black.

### Conteúdo do novo slide

- **Kicker:** Dia da Black Friday
- **Título:** A jogada que vale mais
- **Subtítulo:** No dia da partida, quem tem Comando Black leva vantagem em três lances exclusivos.
- **Três destaques (cards):**
  1. **Pop-up de abertura** — Slot exclusivo no dia da Black Friday; impacto máximo na entrada do app.
  2. **Banner checkout** — Presença exclusiva no fechamento da compra, a última impressão antes da conversão.
  3. **Push notification** — 3 disparos/semana; exclusividade de alcance direto na palma do shopper no dia da Black.

### Visual proposto

- Manter a estética dark do deck com o tom de **ouro do Comando Black** (`--deck-gold`) como cor de destaque.
- Layout centralizado: título no topo, subtítulo abaixo, três cards dispostos horizontalmente no centro do slide.
- Cada card:
  - Ícone minimalista à esquerda ou topo (usar `lucide-react`: `Zap`, `ShoppingCart`, `Smartphone`).
  - Título do benefício em destaque.
  - Uma linha de descrição curta.
  - Borda sutil dourada ou badge "Exclusivo Comando Black".
- Fundo: reutilizar um dos backgrounds escuros existentes ou criar um `bg-slide-08.jpg` com a mesma atmosfera do deck.
- Animação: componente `Reveal` já usado no deck, com delay escalonado nos cards.
- Mobile: empilhar os três cards verticalmente abaixo do título.

## Alternativa

Se preferir não aumentar a contagem de slides, podemos destacar as exclusividades no slide **Arquitetura Operacional** com:

- Uma linha adicional "Exclusividades no dia da Black" na tabela, com destaque dourado na coluna Comando Black.
- Um selo "Dia da Black" ao lado dos itens exclusivos na coluna Comando Black.

## Próximo passo

Definir qual caminho seguir — novo slide dedicado ou destaque na tabela existente — e, em seguida, implementar o conteúdo e o visual propostos.
