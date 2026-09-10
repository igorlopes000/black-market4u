import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, FileDown, Loader2, Maximize, Minimize } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { SLIDES } from "./slides";
import { exportDeckToPdf } from "./exportPdf";

export function Deck() {
  const [index, setIndex] = useState(0);
  const [isFs, setIsFs] = useState(false);
  const [hint, setHint] = useState(true);
  const [exporting, setExporting] = useState(false);
  const reduce = useReducedMotion();
  const touchX = useRef<number | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const go = useCallback((dir: number) => {
    setIndex((i) => Math.min(SLIDES.length - 1, Math.max(0, i + dir)));
  }, []);

  const goTo = useCallback((i: number) => {
    setIndex(Math.min(SLIDES.length - 1, Math.max(0, i)));
  }, []);

  const navigate = useCallback((dir: number) => {
    setHint(false);
    go(dir);
  }, [go]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") navigate(1);
      if (e.key === "ArrowLeft" || e.key === "PageUp") navigate(-1);
      if (e.key === "Home") {
        setHint(false);
        goTo(0);
      }
      if (e.key === "End") {
        setHint(false);
        goTo(SLIDES.length - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, goTo]);

  // Auto-hide the keyboard hint after a few seconds.
  useEffect(() => {
    const t = setTimeout(() => setHint(false), 5000);
    return () => clearTimeout(t);
  }, []);

  // Fullscreen presenter mode.
  const toggleFs = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.();
    }
  }, []);

  useEffect(() => {
    const onFs = () => setIsFs(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const slide = SLIDES[index] ?? SLIDES[0]!;
  const progress = ((index + 1) / SLIDES.length) * 100;

  return (
    <main
      className="relative h-screen w-screen overflow-hidden bg-deck-black"
      onTouchStart={(e) => (touchX.current = e.touches[0]?.clientX ?? null)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = (e.changedTouches[0]?.clientX ?? touchX.current) - touchX.current;
        if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <h1 className="sr-only">Black Friday Market4u — pacotes de mídia 2026</h1>

      {/* Progress bar */}
      <div className="absolute left-0 top-0 z-20 h-[3px] w-full bg-deck-hairline/25">
        <motion.div
          className="h-full bg-deck-green"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: reduce ? 0 : 0.45, ease: "easeOut" }}
        />
      </div>

      {/* Fullscreen toggle */}
      <button
        type="button"
        aria-label={isFs ? "Sair da tela cheia" : "Tela cheia"}
        onClick={toggleFs}
        className="absolute right-[5%] top-[4%] z-20 flex h-10 w-10 items-center justify-center rounded-full border border-deck-hairline bg-deck-glass text-deck-title transition-colors hover:border-deck-green"
      >
        {isFs ? <Minimize size={18} /> : <Maximize size={18} />}
      </button>

      <AnimatePresence mode="wait">
        <motion.section
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.35, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {slide.render()}
        </motion.section>
      </AnimatePresence>

      {/* Slide dots */}
      <div className="absolute bottom-[5%] left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Ir para o slide ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => {
              setHint(false);
              goTo(i);
            }}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: i === index ? 22 : 8,
              backgroundColor: i === index ? "var(--deck-green)" : "rgba(255,255,255,0.35)",
            }}
          />
        ))}
      </div>

      {/* Keyboard hint */}
      <AnimatePresence>
        {hint && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-[5%] left-[7%] z-10 font-sans text-deck-footer"
            style={{ fontSize: "clamp(11px, 1vw, 15px)" }}
          >
            Use ← → para navegar
          </motion.p>
        )}
      </AnimatePresence>

      <nav className="absolute bottom-[5%] right-[5%] z-10 flex items-center gap-3">
        <span className="mr-2 font-sans text-sm tabular-nums text-deck-footer">
          {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          aria-label="Slide anterior"
          onClick={() => navigate(-1)}
          disabled={index === 0}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-deck-hairline bg-deck-glass text-deck-title transition-colors hover:border-deck-green disabled:opacity-30"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Próximo slide"
          onClick={() => navigate(1)}
          disabled={index === SLIDES.length - 1}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-deck-hairline bg-deck-glass text-deck-title transition-colors hover:border-deck-green disabled:opacity-30"
        >
          <ChevronRight size={18} />
        </button>
      </nav>
    </main>
  );
}
