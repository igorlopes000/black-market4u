import { createFileRoute } from "@tanstack/react-router";
import { Deck } from "@/components/deck/Deck";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Black Friday Market4u 2026 — Pacotes de Mídia" },
      {
        name: "description",
        content:
          "Deck comercial Black Friday 2026 Market4u: Comando, Tático e Presença — pacotes de mídia para parceiros da indústria.",
      },
      { property: "og:title", content: "Black Friday Market4u 2026 — Pacotes de Mídia" },
      {
        property: "og:description",
        content:
          "O tabuleiro está montado. Pacotes de mídia Black Friday Market4u para a indústria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Deck,
});
