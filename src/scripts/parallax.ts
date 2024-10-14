const mapVisibleParallax = new Map();

const applyParallax = (element: HTMLElement) => {
  console.log(
    "applyParallax",
    element.dataset.parallaxIndex,
    element.dataset.parallax
  );
  const parallaxScale = Number(element.dataset.parallax);
  const { top } = element.getBoundingClientRect();
  const middleY = (window.innerHeight - 96) / 2;
  const halfHeight = element.offsetHeight / 2 + top;
  element.style.transform = `translateY(${
    ((middleY - halfHeight) * parallaxScale) / 10
  }px)`;
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const target = entry.target as HTMLElement;
    if (entry.isIntersecting) {
      mapVisibleParallax.set(target.dataset.parallaxIndex, target);
      applyParallax(target);
    } else {
      target.style.transform = "translateY(0px)";
      mapVisibleParallax.delete(target.dataset.parallaxIndex);
    }
  });
});

const onAnimationFrame = () => {
  mapVisibleParallax.forEach(applyParallax);
  requestAnimationFrame(onAnimationFrame);
};

const resetMap = () => {
  mapVisibleParallax.clear();
  document
    .querySelectorAll<HTMLElement>("[data-parallax]")
    .forEach((element, index) => {
      element.dataset.parallaxIndex = "" + index;
      observer.observe(element);
    });
};

if (typeof screen.orientation !== "undefined") {
  document.addEventListener("astro:page-load", () => {
    console.log("test");
    resetMap();
  });
  resetMap();
  onAnimationFrame();
}
