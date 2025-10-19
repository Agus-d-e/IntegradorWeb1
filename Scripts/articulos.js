const track = document.querySelector('.carrusel-track');
const slides = Array.from(document.querySelectorAll('.carrusel-item'));
const nextButton = document.querySelector('.btn-siguiente');
const prevButton = document.querySelector('.btn-anterior');
const indicadores = Array.from(document.querySelectorAll('.indicador'));

let currentSlide = 0;

function actualizarCarrusel(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
  
  slides[currentSlide].classList.remove('actual');
  slides[index].classList.add('actual');
  
  indicadores[currentSlide].classList.remove('actual');
  indicadores[index].classList.add('actual');
  
  currentSlide = index;
}

nextButton.addEventListener('click', () => {
  let nextIndex = (currentSlide + 1) % slides.length;
  actualizarCarrusel(nextIndex);
});

prevButton.addEventListener('click', () => {
  let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
  actualizarCarrusel(prevIndex);
});

indicadores.forEach((indicador, index) => {
  indicador.addEventListener('click', () => actualizarCarrusel(index));
});