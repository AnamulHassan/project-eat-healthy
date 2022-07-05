// Reveal Section
const allSections = document.querySelectorAll('.section-main');
const revealSection = function (entires, observer) {
  const [entry] = entires;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section-hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.35,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section-hidden');
});
