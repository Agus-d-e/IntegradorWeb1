const slidesData = [
  { img: 'Imagenes/guitarraElectrica.jpg' },
  { img: 'Imagenes/guitarraAcustica.jpg' },
  { img: 'Imagenes/guitarraBlues.jpg' }
];

const track = document.querySelector('.carrusel-track');
const nextButton = document.querySelector('.btn-siguiente');
const prevButton = document.querySelector('.btn-anterior');

let currentSlide = 0;

slidesData.forEach((slide, index) => {
  const slideElement = document.createElement('div');
  slideElement.classList.add('carrusel-item');
  if (index === 0) slideElement.classList.add('actual');
  slideElement.innerHTML = `
    <img src="${slide.img}" alt="Slide ${index + 1}">
  `;
  track.appendChild(slideElement);
});

const slides = Array.from(document.querySelectorAll('.carrusel-item'));

function actualizarCarrusel(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
  slides[currentSlide].classList.remove('actual');
  slides[index].classList.add('actual');
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