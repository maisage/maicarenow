document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".story-card").forEach((card) => {
    card.addEventListener("touchstart", () => { card.style.transform = "scale(0.99)"; }, { passive: true });
    card.addEventListener("touchend", () => { card.style.transform = ""; }, { passive: true });
  });
});
