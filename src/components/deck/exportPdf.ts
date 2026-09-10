const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Captures each slide from the live stage element and builds a landscape PDF.
 * `showSlide` must switch the deck to the given index; we wait for the
 * entrance animations to settle before snapshotting.
 */
export async function exportDeckToPdf({
  stage,
  total,
  showSlide,
  fileName = "black-friday-market4u.pdf",
}: {
  stage: HTMLElement;
  total: number;
  showSlide: (index: number) => void;
  fileName?: string;
}) {
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import("html2canvas-pro"),
    import("jspdf"),
  ]);

  let pdf: import("jspdf").jsPDF | null = null;

  for (let i = 0; i < total; i++) {
    showSlide(i);
    await sleep(i === 0 ? 900 : 1100);

    const canvas = await html2canvas(stage, {
      scale: Math.min(2, window.devicePixelRatio * 1.5),
      backgroundColor: "#0b0b0b",
      useCORS: true,
      logging: false,
    });

    const img = canvas.toDataURL("image/jpeg", 0.92);

    if (!pdf) {
      pdf = new jsPDF({
        orientation: canvas.width >= canvas.height ? "landscape" : "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
        compress: true,
      });
    } else {
      pdf.addPage([canvas.width, canvas.height], canvas.width >= canvas.height ? "landscape" : "portrait");
    }

    pdf.addImage(img, "JPEG", 0, 0, canvas.width, canvas.height);
  }

  pdf?.save(fileName);
}
