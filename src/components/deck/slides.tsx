import bg01 from "@/assets/bg-slide-01.jpg";
import bg02 from "@/assets/bg-slide-02.jpg";
import bg03 from "@/assets/bg-slide-03.jpg";
import bg04 from "@/assets/bg-slide-04.jpg";
import bg05 from "@/assets/bg-slide-05.jpg";
import bg06 from "@/assets/bg-slide-06.jpg";
import bg07 from "@/assets/bg-slide-07.jpg";
import bg08 from "@/assets/bg-slide-08.jpg";
import { ShoppingCart, Smartphone, Zap } from "lucide-react";
import { Body, Footer, Kicker, Reveal, SlideBg, Title } from "./SlideChrome";

const FOOTER = "Market4u • Black Friday 2026 • Uso comercial";

function Cover() {
  return (
    <>
      <SlideBg src={bg01} overlay="radial" />
      <div className="relative flex h-full flex-col items-center justify-center px-[7%] text-center">
        <Reveal>
          <Kicker>Capa</Kicker>
          <Title>Black Friday Market4u</Title>
        </Reveal>
        <Reveal delay={0.15} className="mt-6">
          <Body>O tabuleiro está montado.</Body>
        </Reveal>
      </div>
      <Footer center>{FOOTER}</Footer>
    </>
  );
}

function Narrative({
  src,
  kicker,
  title,
  body,
}: {
  src: string;
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <>
      <SlideBg src={src} />
      <div className="relative flex h-full max-w-[60%] flex-col justify-center px-[7%] max-md:max-w-full">
        <Reveal>
          <Kicker>{kicker}</Kicker>
          <Title>{title}</Title>
        </Reveal>
        <Reveal delay={0.15} className="mt-6">
          <Body>{body}</Body>
        </Reveal>
      </div>
      <Footer>{FOOTER}</Footer>
    </>
  );
}

const COLS = [
  { name: "Comando Black", color: "var(--deck-gold)" },
  { name: "Tático Black", color: "var(--deck-green)" },
  { name: "Presença Black", color: "var(--deck-silver)" },
];

const ROWS: { media: string; values: [string, string, string] }[] = [
  { media: "Pop-up de abertura", values: ["Exclusivo no dia da Black", "Revezamento diário", "—"] },
  { media: "Banner home", values: ["2 inserções/dia", "1 inserção/dia", "1 inserção/dia"] },
  { media: "Cross-selling", values: ["10 produtos + Top 20", "10 produtos", "—"] },
  { media: "Checkout", values: ["Presença exclusiva", "—", "—"] },
  { media: "Telas in store", values: ["2 inserções/slot", "1 inserção/slot", "1 inserção/slot"] },
  { media: "Push notification", values: ["3 disparos/semana", "1 disparo/semana", "1 disparo/semana"] },
  { media: "Comunicações Market4u", values: ["Incluso", "Incluso", "—"] },
];

const PIECES = [
  { name: "Comando Black", period: "Mês", accent: "var(--deck-gold)", left: "13.7%" },
  { name: "Tático Black", period: "Quinzena", accent: "var(--deck-green)", left: "40.3%" },
  { name: "Presença Black", period: "Semana", accent: "var(--deck-silver)", left: "66.6%" },
];

function Mechanics() {
  return (
    <>
      <SlideBg src={bg04} />
      <div className="relative flex h-full max-w-[62%] flex-col justify-start px-[7%] pt-[6vh] max-md:max-w-full">
        <Reveal>
          <Kicker>Mecânica</Kicker>
          <Title className="!text-[clamp(26px,4vw,58px)]">Três peças, um tabuleiro</Title>
        </Reveal>
        <Reveal delay={0.15} className="mt-3">
          <Body className="!text-[clamp(14px,1.6vw,22px)]">
            Comando, Tático e Presença: níveis claros de visibilidade.
          </Body>
        </Reveal>
      </div>
      <ul className="absolute inset-0 max-md:static max-md:mt-6 max-md:grid max-md:gap-4 max-md:px-[7%]">
        {PIECES.map((p, i) => (
          <li
            key={p.name}
            className="absolute flex flex-col items-center gap-[0.8vh] text-center max-md:static max-md:w-full"
            style={{ left: p.left, top: "43%", width: "20%" }}
          >
            <Reveal delay={0.3 + i * 0.1} className="flex flex-col items-center gap-[0.8vh]">
              <span
                className="font-display text-[clamp(14px,1.6vw,28px)] font-semibold uppercase tracking-wide"
                style={{ color: p.accent }}
              >
                {p.name}
              </span>
              <span
                className="rounded-full border px-[0.9em] py-[0.35em] font-sans text-[clamp(11px,1.05vw,18px)] font-semibold uppercase tracking-[0.16em] text-deck-title"
                style={{ borderColor: p.accent }}
              >
                {p.period}
              </span>
            </Reveal>
          </li>
        ))}
      </ul>
      <Footer>{FOOTER}</Footer>
    </>
  );
}

function Architecture() {
  return (
    <>
      <SlideBg src={bg05} />
      <div className="relative flex h-full flex-col items-center justify-center px-[5%] text-center">
        <Reveal>
          <Kicker>Arquitetura Operacional</Kicker>
          <Title className="!text-[clamp(30px,4.4vw,60px)]">Arquitetura Operacional</Title>
        </Reveal>
        <Reveal delay={0.12} className="mt-4">
          <Body className="!text-[clamp(15px,1.8vw,24px)]">
            Do pop-up ao checkout, sua marca acompanha o shopper.
          </Body>
        </Reveal>

        <Reveal delay={0.25} className="mt-[4vh] w-full max-w-[1500px]">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">
              Diferenças de mídia entre os pacotes Comando Black, Tático Black e Presença Black
            </caption>
            <thead>
              <tr>
                <th className="w-[26%] pb-3 font-sans text-[clamp(10px,1vw,15px)] font-semibold uppercase tracking-[0.18em] text-deck-footer">
                  Mídia
                </th>
                {COLS.map((c) => (
                  <th
                    key={c.name}
                    className="pb-3 font-display text-[clamp(11px,1.15vw,18px)] font-semibold uppercase tracking-wide"
                    style={{ color: c.color }}
                  >
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.media} className="border-t border-deck-hairline/50">
                  <th
                    scope="row"
                    className="py-[1.05vh] pr-4 font-sans text-[clamp(11px,1.1vw,18px)] font-medium text-deck-title"
                  >
                    {r.media}
                  </th>
                  {r.values.map((v, i) => (
                    <td
                      key={i}
                      className="py-[1.05vh] pr-4 font-sans text-[clamp(11px,1.05vw,17px)] text-deck-body"
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
      <Footer center>{FOOTER}</Footer>
    </>
  );
}

const CARDS = [
  {
    name: "Comando Black",
    value: "R$ 50.000",
    slots: "2 vagas",
    accent: "var(--deck-gold)",
    left: "9.9%",
  },
  {
    name: "Tático Black",
    value: "R$ 35.000",
    slots: "4 vagas",
    accent: "var(--deck-green)",
    left: "39.6%",
  },
  {
    name: "Presença Black",
    value: "R$ 20.000",
    slots: "Vagas abertas",
    accent: "var(--deck-silver)",
    left: "69.3%",
  },
];

const EXCLUSIVES = [
  {
    icon: Zap,
    title: "Pop-up de abertura",
    description: "Slot exclusivo no dia da Black Friday: impacto máximo logo na entrada do app.",
  },
  {
    icon: ShoppingCart,
    title: "Banner checkout",
    description: "Presença exclusiva no fechamento da compra, a última impressão antes da conversão.",
  },
  {
    icon: Smartphone,
    title: "Push notification",
    description: "3 disparos/semana com alcance direto na palma do shopper, exclusivo no dia da Black.",
  },
];

function BlackFridayExclusives() {
  return (
    <>
      <SlideBg src={bg08} overlay="radial" />
      <div className="relative flex h-full flex-col items-center justify-center px-[7%] text-center">
        <Reveal>
          <Kicker>Dia da Black Friday</Kicker>
          <Title className="!text-[clamp(34px,5.6vw,80px)]">A jogada que vale mais</Title>
        </Reveal>
        <Reveal delay={0.15} className="mt-4 max-w-[1100px]">
          <Body className="!text-[clamp(16px,1.9vw,28px)]">
            No dia da partida, quem tem Comando Black leva vantagem em três lances exclusivos.
          </Body>
        </Reveal>

        <Reveal delay={0.3} className="mt-[5vh] w-full max-w-[1400px]">
          <ul className="grid grid-cols-3 gap-[2.5vw] max-md:grid-cols-1">
            {EXCLUSIVES.map((item, i) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className="flex flex-col items-center gap-[2vh] rounded-2xl border border-deck-gold/30 bg-deck-glass/60 px-[2vw] py-[3.5vh] text-center backdrop-blur-sm"
                >
                  <Reveal delay={0.45 + i * 0.12} className="flex flex-col items-center gap-[2vh]">
                    <span className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-deck-gold/40 bg-deck-gold/10 text-deck-gold max-md:h-14 max-md:w-14">
                      <Icon size={32} strokeWidth={1.5} className="max-md:h-6 max-md:w-6" />
                    </span>
                    <h3 className="font-display text-[clamp(18px,1.8vw,32px)] font-semibold uppercase tracking-wide text-deck-title">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[clamp(13px,1.15vw,20px)] leading-relaxed text-deck-body">
                      {item.description}
                    </p>
                    <span className="mt-2 rounded-full border border-deck-gold px-[1em] py-[0.35em] font-sans text-[clamp(10px,0.85vw,14px)] font-semibold uppercase tracking-[0.16em] text-deck-gold">
                      Exclusivo Comando Black
                    </span>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
      <Footer center>{FOOTER}</Footer>
    </>
  );
}

function Investment() {
  return (
    <>
      <SlideBg src={bg06} />
      <div className="relative h-full px-[6%] text-center">
        <Reveal className="pt-[2.5vh]">
          <Kicker>Investimento</Kicker>
          <Title className="!text-[clamp(28px,4.4vw,64px)]">Investimento</Title>
        </Reveal>
        <Reveal delay={0.15} className="mt-2">
          <Body className="!text-[clamp(14px,1.7vw,22px)]">Peças limitadas para jogar com prioridade.</Body>
        </Reveal>
      </div>
      <ul className="absolute inset-0 max-md:static max-md:mt-6 max-md:grid max-md:grid-cols-1 max-md:gap-4 max-md:px-[6%]">
        {CARDS.map((c, i) => (
          <li
            key={c.name}
            className="absolute flex flex-col items-center justify-center gap-[1.5vh] px-[1.5%] text-center max-md:static max-md:w-full max-md:rounded-2xl max-md:border max-md:bg-deck-glass max-md:py-5"
            style={{
              left: c.left,
              top: "21%",
              width: "20.8%",
              height: "50%",
              borderColor: c.accent,
            }}
          >
            <Reveal delay={0.3 + i * 0.1} className="flex flex-col items-center gap-[1.5vh]">
              <span
                className="font-display text-[clamp(14px,1.5vw,26px)] font-semibold uppercase tracking-wide"
                style={{ color: c.accent }}
              >
                {c.name}
              </span>
              <span className="font-display text-[clamp(26px,3.2vw,52px)] font-semibold leading-none text-deck-title">
                {c.value}
              </span>
              <span className="font-sans text-[clamp(12px,1.15vw,20px)] font-medium text-deck-body">
                {c.slots}
              </span>
            </Reveal>
          </li>
        ))}
      </ul>
      <Footer center>{FOOTER}</Footer>
    </>
  );
}

function Closing() {
  return (
    <>
      <SlideBg src={bg07} overlay="radial" />
      <div className="relative flex h-full flex-col items-center justify-center px-[7%] text-center">
        <Reveal>
          <Kicker>Fechamento</Kicker>
          <Title>Escolha sua peça</Title>
        </Reveal>
        <Reveal delay={0.15} className="mt-6">
          <Body>O tabuleiro está montado e as peças são limitadas.</Body>
        </Reveal>
      </div>
      <Footer center>Venha jogar com a gente.</Footer>
    </>
  );
}

export const SLIDES = [
  { id: "capa", render: () => <Cover /> },
  {
    id: "contexto",
    render: () => (
      <Narrative
        src={bg02}
        kicker="Contexto"
        title="O maior jogo do varejo"
        body="Na Black Friday, a decisão acontece em segundos."
      />
    ),
  },
  {
    id: "tese",
    render: () => (
      <Narrative
        src={bg03}
        kicker="Tese Central"
        title="Posição é decisão"
        body="Market4u coloca sua marca na frente do shopper no instante certo."
      />
    ),
  },
  {
    id: "mecanica",
    render: () => <Mechanics />,
  },
  { id: "arquitetura", render: () => <Architecture /> },
  { id: "investimento", render: () => <Investment /> },
  { id: "fechamento", render: () => <Closing /> },
];
