<!-- lila-managed -->
# PROMPT DE IMPLEMENTAÇÃO — NATAL 2026 MARKET4U

| Metadado | Valor |
|---|---|
| Nome do Documento | Prompt de Implementação — Natal 2026 Market4U |
| Versão | 1.0 |
| Estado | Aprovado |
| Data | 14/09/2026 |
| Executor | Lovable |
| Projeto | Apresentação comercial web Natal 2026 Market4U |
| Objetivo | Substituir o deck web de Black Friday por uma apresentação comercial de Natal com 8 slides |
| Fonte canônica de código | Repositório GitHub conectado ao projeto |
| Artefatos canônicos | Briefing Conceitual — Natal 2026 Market4U; Linguagem Canônica de Mídia — Bauducco Natal; Esqueleto da Apresentação — Natal 2026 Market4U; Direção de Arte — Natal 2026 Market4U |
| Público | Marketing, trade marketing e decisores comerciais |
| Idioma visível | Português do Brasil |
| Formato | Web presentation deck, 8 slides, 16:9 |

---

## CABEÇALHO DO PROMPT

PROJECT: Natal 2026 Market4U — Apresentação Comercial Web

ROLE: Senior Frontend Engineer & UI/UX Designer especializado em apresentações comerciais executivas, acessibilidade e React/TypeScript.

OUTPUT: Web-based commercial presentation deck, 8 slides, 16:9, navigable by keyboard and touch, with fullscreen mode and PDF export.

---

## CONTEXT & GOAL

Build a polished 8-slide web presentation for the commercial proposal **Natal 2026 Market4U**.

The presentation must communicate a Christmas-season media opportunity built around:

- proximity;
- celebration;
- tradition;
- convenience;
- category exclusivity;
- two commercial packages;
- presence throughout the shopping journey;
- a special pop-up inventory rule on 24/12 and 25/12.

The central concept is:

> O Natal mora perto

The deck is based on an existing Black Friday presentation in the repository. Preserve its technical discipline and interaction model, but replace its content, visual language and metaphor completely.

This is not a Black Friday deck with Christmas words substituted into it.

The final presentation must not use visible references to:

- Black Friday;
- game;
- board;
- pieces;
- moves;
- match;
- playing;
- “Comando Black”;
- “Tático Black”;
- “Presença Black”.

The presentation must be commercially clear, emotionally warm and visually premium without becoming a generic Christmas catalogue.

---

## BUSINESS CONTEXT

Campaign period:

- 01/12/2026 to 27/12/2026.

Special period:

- 24/12/2026 and 25/12/2026.

Categories:

1. Sazonais doces natalinos:
   - Panetones;
   - Chocotones;
   - Bauducco is the reference brand for this category.

2. Espumantes.

Commercial rule:

- one exclusive partner per category;
- two commercial packages available;
- one inventory for each package;
- package and category are not pre-assigned;
- the customer chooses the available package at contracting;
- do not visually or textually imply that Presentão belongs to Bauducco or that Lembrancinha belongs to Espumantes.

Packages:

- Presentão — R$ 70.000;
- Lembrancinha — R$ 50.000.

---

## WORKSPACE SETUP AND OWNERSHIP

The GitHub repository is the canonical source for the implementation.

### Lovable execution

This prompt is intended for an existing Lovable workspace connected to the repository.

- Use the existing workspace.
- Do not clone another repository from inside Lovable.
- Inspect the current project before editing.
- Preserve the existing application entry point and route that renders the deck.
- Do not create a parallel presentation route unless the current architecture requires it.
- Do not add dependencies unless the existing stack cannot implement a required behavior.

### Local execution fallback

If this implementation is transferred to a local Cline or terminal workflow, use exactly one of the following flows.

#### PATCH flow — isolated worktree

Use this when another session, executor or branch may be active.

```bash
git worktree add ../market4u-natal-2026 -b feat/natal-2026-deck origin/main
cd ../market4u-natal-2026
```

Reason:

- isolates the implementation from another working tree;
- prevents accidental edits to another frame;
- gives the task an explicit branch and workspace owner.

#### STRUCTURAL flow — standalone clone

Use this when the task is intentionally performed in an independent clone.

```bash
git clone <REPOSITORY_URL> market4u-natal-2026
cd market4u-natal-2026
git switch -c feat/natal-2026-deck
```

Reason:

- creates a clean workspace for a multi-file structural change;
- avoids mixing unrelated local modifications with this deck.

### Ownership and safety rules

Before editing:

1. Inspect the first 30 lines of every target file for ownership tags.
2. Treat an untagged file as trunk-owned.
3. Do not edit a limb-owned file without explicit ownership authorization.
4. Do not use `git add -A`.
5. Stage only the files changed by this task.
6. Do not recover or alter another session’s branch, worktree or lock.
7. If `CHERRY_PICK_HEAD` or an active `index.lock` from another process exists, stop and report it.
8. Do not touch unrelated application modules.

Likely target files:

- `src/components/deck/slides.tsx`;
- `src/components/deck/SlideChrome.tsx`;
- `src/components/deck/Deck.tsx`;
- `src/components/deck/exportPdf.ts`;
- `src/styles.css`;
- new Christmas visual assets under `src/assets/`;
- the existing route or entry point only if required to render the updated deck.

---

## TECH STACK

Use the existing stack. Do not introduce a replacement architecture.

TECH STACK

- React 19;
- TypeScript strict;
- Vite;
- Tailwind CSS 4;
- `motion/react` for transitions and reveals;
- `lucide-react` for interface icons;
- `html2canvas-pro` for PDF capture;
- `jspdf` for PDF generation.

Existing scripts:

```bash
npm run lint
npm run build
```

Do not add a testing framework or dependency for this task.

---

## REFERENCE IMPLEMENTATION TO PRESERVE

Inspect these existing files before editing:

- `src/components/deck/slides.tsx`
- `src/components/deck/SlideChrome.tsx`
- `src/components/deck/Deck.tsx`
- `src/components/deck/exportPdf.ts`
- `src/styles.css`

Preserve the following behaviors from the existing deck:

- 8-slide structure;
- 16:9 full-viewport presentation;
- keyboard navigation with ArrowLeft and ArrowRight;
- PageUp, PageDown, Home and End navigation;
- touch swipe navigation;
- slide dots;
- previous and next buttons;
- fullscreen mode;
- progress bar;
- reduced-motion support;
- entrance reveals;
- PDF export;
- export mode that disables in-progress animations;
- responsive fallback for smaller screens.

Update all visible Black Friday labels in:

- slide content;
- accessible page title;
- `h1`;
- PDF filename;
- aria labels where applicable;
- metadata or visible controls.

The exported PDF filename must become:

```text
natal-2026-market4u.pdf
```

---

## DESIGN SYSTEM

Use the following visual system from the approved Direction of Art and the supplied Language Canônica.

The color values are approximate references, not the official Bauducco brand manual.

### Operational colors

```text
Bauducco Yellow: #FFC72C to #FFD400
Bauducco Red: #E4002B
Heritage Gold: #C9A24A
Chocolate Brown: #4A2C1D
Warm White: #FFFFFF
```

Recommended semantic tokens:

```text
--deck-yellow: #FFC72C
--deck-red: #E4002B
--deck-gold: #C9A24A
--deck-chocolate: #4A2C1D
--deck-cream: #FFFFFF
```

Use the existing deck token architecture where possible. Avoid broad changes to unrelated global design tokens.

### Color usage

- Chocolate Brown replaces the dominant Black Friday black.
- Yellow is the primary seasonal recognition color.
- Red is used for contrast, calls to action and secondary accents.
- Gold marks celebration, special dates and the Presentão package.
- White creates breathing room and readable technical layouts.
- Do not saturate every slide with yellow.
- Do not use traditional red-and-green Christmas palettes as the dominant system.
- Do not create fake official brand colors.
- Do not use neon green from the Black Friday deck.

### Typography

Headers:

- Montserrat or the existing display family;
- bold or extra-bold;
- large scale;
- sentence case for titles;
- uppercase reserved for kickers and package names.

Body:

- Inter or the existing sans-serif family;
- regular or medium weight;
- short lines;
- strong readability.

Update the existing `Title` component if necessary so ordinary slide titles are not forced into uppercase. Kicker labels and package names may remain uppercase.

### Visual territory

Use:

- warm light;
- close framing;
- table and gathering;
- hands and interaction;
- proximity;
- seasonal products;
- convenience;
- contemporary family tradition;
- restrained premium treatment.

Avoid:

- generic Santa Claus imagery;
- artificial snow;
- foreign Christmas catalogue aesthetics;
- overdecorated Christmas trees;
- excessive glitter;
- cartoon Christmas illustrations;
- exaggerated alcohol consumption;
- invented products or logos;
- competitor brands;
- fake Bauducco packaging;
- unapproved official claims.

---

## IMAGE STRATEGY

Prefer local assets under `src/assets/`.

Create or select the following assets if the execution environment supports asset generation:

```text
src/assets/natal-slide-01.jpg
src/assets/natal-slide-02.jpg
src/assets/natal-slide-03.jpg
src/assets/natal-slide-04.jpg
src/assets/natal-slide-05.jpg
src/assets/natal-slide-06.jpg
src/assets/natal-slide-07.jpg
src/assets/natal-slide-08.jpg
```

Recommended dimensions:

```text
1920x1080
```

If local assets cannot be generated during the implementation:

- use stable static image URLs;
- do not use dynamic `source.unsplash.com` endpoints;
- do not use random image URLs;
- isolate URLs in a single asset configuration;
- ensure images are CORS-compatible with `html2canvas-pro`;
- provide a CSS fallback background for every slide;
- do not treat generic stock images as final approved Bauducco assets.

Do not recreate:

- the Bauducco logo;
- Bauducco packaging;
- official claims;
- official campaign signatures;
- proprietary typography.

Until official assets are provided, use brand-neutral Christmas imagery with the approved color direction.

---

## PRESENTATION STRUCTURE

Use the following content literally. Do not paraphrase, shorten, rebrand or invent additional slide content.

### SLIDE 1 — O Natal mora perto

Kicker:

```text
NATAL 2026 | MARKET4U
```

Title:

```text
O Natal mora perto
```

Subtitle:

```text
Uma proposta de presença exclusiva para categorias que fazem a celebração acontecer.
```

Body:

```text
Bauducco | Panetones e Chocotones
```

Footer:

```text
01/12 a 27/12
```

Visual:

- full-bleed image of a close Christmas gathering or table;
- warm light;
- a yellow seasonal element on the right side;
- chocolate overlay;
- title in the left third;
- no generic catalogue composition.

---

### SLIDE 2 — O momento da compra

Kicker:

```text
CONTEXTO
```

Title:

```text
No Natal, a compra acontece perto da celebração
```

Body:

```text
Entre a última compra, a mesa e o encontro, o shopper busca conveniência — e marcas presentes no instante certo.
```

Footer:

```text
Market4U conecta proximidade e decisão.
```

Visual:

- close-to-home convenience shopping;
- shopper choosing or completing Christmas products;
- Christmas cues visible but not dominant;
- text over a clean area or a controlled white panel;
- visual connection between purchase and celebration.

---

### SLIDE 3 — A tese central

Kicker:

```text
TESE CENTRAL
```

Title:

```text
O Natal mora perto
```

Body:

```text
O Market4U coloca marcas exclusivas de cada categoria no caminho do shopper, da entrada no app ao momento da compra.
```

Footer:

```text
Presença que acompanha a celebração.
```

Visual:

Show a three-step journey:

1. entry in the app;
2. discovery and choice;
3. purchase close to the celebration.

Use a continuous yellow visual thread and restrained red action accents.

Do not create a heavy flowchart.

---

### SLIDE 4 — Mecânica da ação

Kicker:

```text
MECÂNICA
```

Title:

```text
Duas categorias. Dois pacotes. Uma presença exclusiva.
```

Subtitle:

```text
Um parceiro por categoria. Um inventário por pacote.
```

Footer:

```text
A escolha acontece conforme disponibilidade.
```

Visual content:

#### Category territory 1

```text
Sazonais doces natalinos
```

Supporting labels:

```text
Panetones
Chocotones
```

Visual direction:

- yellow seasonal recognition;
- tradition;
- sharing;
- warm food and table context.

#### Category territory 2

```text
Espumantes
```

Visual direction:

- elegant celebration;
- discreet bottle or glass context;
- no exaggerated alcohol consumption.

#### Package options

```text
PRESENTÃO
LEMBRANCINHA
```

Critical rule:

- show the two packages as independent options;
- do not draw a connection between Presentão and Sazonais doces natalinos;
- do not draw a connection between Lembrancinha and Espumantes;
- do not assign any package to any category.

The visual meaning is exclusive category availability plus package choice.

---

### SLIDE 5 — Arquitetura operacional

Kicker:

```text
ARQUITETURA OPERACIONAL
```

Title:

```text
A marca acompanha a jornada
```

Subtitle:

```text
Do pop-up ao checkout, a presença aparece nos pontos que movem a decisão.
```

Footer:

```text
01/12 a 27/12 | 90 lojas | 12 slots/dia nas telas in store
```

Use a clean, readable technical layout.

Render this table exactly:

| Mídia | Presentão — R$ 70.000 | Lembrancinha — R$ 50.000 |
|---|---|---|
| Pop-up de abertura | Slot reservado da ação em revezamento; 1 slot exclusivo em 24/12 e 25/12 | Slot reservado da ação em revezamento; 1 slot exclusivo em 24/12 e 25/12 |
| Banner Home | 2 inserções por dia | 1 inserção por dia |
| Banner Cross-Selling | 10 produtos à escolha, com acesso ao Top 20 dos itens mais comprados | 10 produtos à escolha, exceto o Top 20 |
| Banner Checkout | Incluso, com presença exclusiva | Não incluso |
| Telas offline in store | 2 inserções por slot | 1 inserção por slot |
| Push Notification | 3 disparos por semana | 1 disparo por semana |
| Comunicações Market4U com imagens de SKUs | Incluso | Incluso |

Implementation requirements:

- use high contrast;
- mark the Presentão column with gold;
- mark the Lembrancinha column with red or yellow;
- do not put decorative photography behind the table;
- do not hide exclusions;
- do not make the table illegible at 1366x768;
- use `caption` with accessible text;
- use semantic table elements.

---

### SLIDE 6 — Momento especial

Kicker:

```text
24 E 25 DE DEZEMBRO
```

Title:

```text
Dois dias para ocupar o Natal
```

Body:

```text
Nos dois dias de maior intensidade da temporada, cada parceiro da ação ocupa um slot de pop-up.
```

Footer:

```text
Os dois slots ficam exclusivos para os parceiros da ação.
```

Mandatory visible labels:

```text
2 slots de pop-up
1 slot por parceiro contratado
Sem parceiros externos no pop-up
Exclusividade por categoria preservada
```

Visual:

- two pop-up slots side by side;
- one slot per contracted partner;
- no hierarchy between categories;
- no hierarchy implying a package-category assignment;
- gold marks the special period;
- chocolate background with yellow and red accents.

Operational rule to communicate accurately:

- on 24/12 and 25/12, each partner who contracted the action gets one pop-up slot;
- both pop-up slots are reserved exclusively for the two action partners;
- partners outside the action do not appear in the pop-up on those two days.

---

### SLIDE 7 — Investimento

Kicker:

```text
INVESTIMENTO
```

Title:

```text
Escolha o seu nível de presença
```

Body:

```text
A categoria e o pacote são definidos na contratação, conforme disponibilidade.
```

Footer:

```text
Exclusividade de um parceiro por categoria.
```

Render two independent cards.

#### Card 1

Name:

```text
PRESENTÃO
```

Value:

```text
R$ 70.000
```

Inventory:

```text
1 inventário disponível
```

Description:

```text
Maior impacto, maior frequência e presença ampliada nos principais pontos da jornada.
```

Visual treatment:

- gold border or top accent;
- stronger visual weight;
- do not associate with any category.

#### Card 2

Name:

```text
LEMBRANCINHA
```

Value:

```text
R$ 50.000
```

Inventory:

```text
1 inventário disponível
```

Description:

```text
Presença qualificada nos principais ambientes digitais, físicos e editoriais.
```

Visual treatment:

- red border or top accent;
- clear value;
- do not associate with any category.

Mandatory note:

```text
Os dois pacotes estão disponíveis para escolha. Não há pré-atribuição entre categoria, parceiro e pacote.
```

---

### SLIDE 8 — Fechamento

Kicker:

```text
FECHAMENTO
```

Title:

```text
Faça o Natal morar perto
```

Body:

```text
Duas categorias exclusivas. Dois níveis de presença. Uma oportunidade de estar no caminho da celebração.
```

Footer:

```text
Market4U | Natal 2026
```

Visual:

- close sharing moment;
- table and warm light;
- yellow seasonal element as focal point;
- red closing accent;
- commercial but human;
- no generic Christmas catalogue aesthetic.

Do not use this unvalidated campaign signature:

```text
A Magia do Natal começa com Bauducco®
```

---

## COMPONENT AND IMPLEMENTATION RULES

### Slide chrome

Adapt the existing components instead of creating a parallel system:

- `SlideBg`;
- `Title`;
- `Body`;
- `Kicker`;
- `Footer`;
- `Reveal`.

Required changes:

- use chocolate overlays instead of Black Friday black overlays;
- use yellow, red and gold semantic accents;
- keep reduced-motion support;
- preserve responsive sizing;
- keep title sentence case;
- preserve high contrast.

### Deck shell

Update:

- accessible `h1`;
- progress bar color;
- control hover colors;
- slide dot active color;
- fullscreen controls;
- PDF export label and filename;
- any visible Black Friday text.

Keep:

- keyboard navigation;
- touch swipe;
- dots;
- fullscreen;
- PDF export;
- progress;
- previous/next controls.

### Motion

Use:

- short crossfade between slides;
- subtle title reveals;
- restrained card reveals;
- no confetti;
- no snow particles;
- no excessive parallax;
- no animation that harms table reading.

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

or the existing `useReducedMotion` behavior.

### Responsive behavior

The primary target is:

```text
1920x1080
```

Also validate:

```text
1366x768
```

For smaller widths:

- stack cards and category blocks;
- preserve readable table behavior;
- do not allow horizontal overflow;
- keep navigation controls usable;
- ensure the deck remains navigable on touch.

---

## CONTENT AND EPISTEMOLOGICAL SAFETY RULES

Do not invent:

- reach;
- impressions;
- GMV;
- CTR benchmarks;
- audience size;
- conversion uplift;
- sales claims;
- category performance;
- official Bauducco claims;
- official brand colors;
- official typography names;
- approved packaging;
- campaign rights not listed in this prompt.

Do not:

- assign packages to categories;
- assign Bauducco to Presentão;
- assign Espumantes to Lembrancinha;
- imply total exclusivity of the entire Market4U inventory;
- imply that external partners occupy the action pop-up on 24/12 or 25/12;
- describe the Language Canônica as an official Bauducco brand manual;
- use the phrase “A Magia do Natal começa com Bauducco®” as the deck signature;
- use the old Black Friday metaphor;
- use direct competitor comparisons.

The only approved exclusivity claims are:

- one partner per category during the action;
- one inventory per package;
- two pop-up slots reserved for the two action partners on 24/12 and 25/12.

---

## EXECUTION RULES

Vibe Coding:

- Use the existing React components and motion system.
- Prefer small, auditable changes over a full rewrite.
- Preserve current deck behavior unless explicitly changed above.
- Keep visible copy in pt-BR.
- Keep code identifiers in the existing project convention.
- Do not introduce a new design system or navigation architecture.

Content:

- Use the exact Portuguese text in this prompt.
- Do not paraphrase approved slide copy.
- Do not add explanatory paragraphs to technical slides.
- Keep the table values exact.
- Keep package-category independence visible.

Images:

- Prefer local assets.
- If using stock placeholders, use stable static URLs and CORS-compatible assets.
- Do not use fake logos or fake packaging.
- Provide CSS fallback colors for every image background.
- Make decorative images `alt=""` and `aria-hidden="true"`.

Responsiveness:

- Optimize for 1920x1080 presentation mode.
- Validate 1366x768.
- Ensure no horizontal scroll.
- Ensure technical slides remain readable.
- Ensure all controls have accessible labels and visible focus.

PDF:

- Preserve export behavior.
- Ensure all eight slides are captured.
- Disable in-progress reveals during export.
- Use `natal-2026-market4u.pdf` as the filename.
- Test the exported PDF manually or through the existing export flow.

Scope:

- Do not modify unrelated application modules.
- Do not add unrelated features.
- Do not add analytics or tracking.
- Do not create a second deck implementation.
- Do not delete reusable infrastructure unless replacement is necessary and validated.

---

## VALIDATION PLAN

Run these commands non-interactively:

```bash
GIT_TERMINAL_PROMPT=0 npm run lint
GIT_TERMINAL_PROMPT=0 npm run build
git --no-pager diff --check
git --no-pager diff --stat
```

If a command fails:

1. report the exact command;
2. report the exit code;
3. report the relevant error;
4. fix only within this scope;
5. rerun the failed validation.

Before declaring completion, manually inspect:

- slide 1 at 1920x1080;
- slide 4 category/package independence;
- slide 5 table readability;
- slide 6 pop-up rule;
- slide 7 package values and no category assignment;
- slide 8 closing;
- keyboard navigation;
- touch navigation;
- fullscreen mode;
- reduced-motion behavior;
- PDF export.

Run a repository search over the rendered deck implementation and confirm that no visible Black Friday language remains:

```bash
git --no-pager grep -n -E "Black Friday|Comando Black|Tático Black|Presença Black|tabuleiro|jogada|peça|partida" -- src/components/deck src/styles.css
```

Any remaining match must be classified as:

- unused historical code;
- comment;
- filename not rendered;
- or a real visible-content defect.

Visible-content defects must be removed.

---

## ACCEPTANCE CRITERIA

The implementation is accepted only if all conditions below are true:

- [ ] Exactly 8 slides are rendered.
- [ ] Slide order matches this prompt.
- [ ] All approved visible text is in Portuguese.
- [ ] The central concept is “O Natal mora perto”.
- [ ] Period is shown as 01/12/2026 to 27/12/2026 where applicable.
- [ ] Presentão is R$ 70.000.
- [ ] Lembrancinha is R$ 50.000.
- [ ] Each package has one available inventory.
- [ ] One partner per category is clearly communicated.
- [ ] Package and category are not pre-assigned.
- [ ] Bauducco is not visually assigned to Presentão.
- [ ] Espumantes is not visually assigned to Lembrancinha.
- [ ] The two pop-up slots are exclusive to the two action partners on 24/12 and 25/12.
- [ ] External partners do not appear in the pop-up on 24/12 and 25/12.
- [ ] Slide 5 contains the exact approved media table.
- [ ] No unapproved performance claim is added.
- [ ] No visible Black Friday metaphor remains.
- [ ] No fake Bauducco logo or packaging is used.
- [ ] The palette follows chocolate, yellow, red, gold and warm white.
- [ ] The deck is readable at 1920x1080 and 1366x768.
- [ ] Keyboard, touch, dots and fullscreen work.
- [ ] Reduced motion is respected.
- [ ] PDF export works and uses `natal-2026-market4u.pdf`.
- [ ] `npm run lint` succeeds.
- [ ] `npm run build` succeeds.
- [ ] `git diff --check` succeeds.

---

## ATTACHMENTS

Attach these documents to the Lovable task:

```text
Esqueleto da Apresentação - Natal 2026 Market4U.md
Linguagem Canônica de Mídia — Bauducco Natal.md
Direção de Arte - Natal 2026 Market4U.md
```

Reference files in the repository:

```text
src/components/deck/slides.tsx
src/components/deck/SlideChrome.tsx
src/components/deck/Deck.tsx
src/components/deck/exportPdf.ts
src/styles.css
```

The current prompt remains authoritative for the literal slide content and execution constraints if an attachment is unavailable.

---

## PRE-SEND CHECKLIST

- [ ] Esqueleto aprovado está referenciado.
- [ ] Direção de Arte aprovada está referenciada.
- [ ] Linguagem Canônica está tratada como referência estimada, não como manual oficial.
- [ ] O texto dos oito slides foi copiado literalmente.
- [ ] Os valores dos pacotes estão corretos.
- [ ] Não existe pré-atribuição entre pacote e categoria.
- [ ] A regra de 24/12 e 25/12 está correta.
- [ ] A stack técnica corresponde ao repositório.
- [ ] O prompt contém setup de workspace.
- [ ] O prompt contém regras de ownership e segurança.
- [ ] O prompt contém critérios de aceitação.
- [ ] O prompt contém comandos de validação.
- [ ] Não há escopo inventado.

---

## TRIGGER COMMAND

Start by inspecting the existing deck implementation and then build the first slide of the Natal 2026 Market4U presentation strictly according to this prompt and the attached canonical artifacts.

<!-- 6-checks: C1=aprovado; C2=aprovado; C3=aprovado; C4=aprovado; C5=aprovado; C6=aprovado -->