const img = document.querySelector("#imgHeatic2");
const MAX_FRAMES = 79; // cantidad total de frames

function updateFrame() {
    // altura maxima scroll
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    // posicion actual scroll
    const scrollPosition = window.scrollY;
    // calcular porcentaje scroll
    const scrollFraction = scrollPosition / maxScroll;
    // que frame le toca (se le agrega max_frames - math.floor ya que quiero que vaya del ultimo frame al primero.)
    const frame = MAX_FRAMES - Math.floor(scrollFraction * MAX_FRAMES) || 1;
    // creamos el id del nombre del archivo (.padStart quiere decir que todas las imagenes
    // que tengan ej bultr-video-frame-01.jpg les agrega un 001.jpg 
    const id = frame.toString().padStart(3, '0');
    img.src = `resources/frames/ezgif-frame-${id}.jpg`;
}

// actualizamos imagen al hacer scroll
window.addEventListener('scroll', updateFrame);

// actualizamos imagen al cargar la página
window.addEventListener('load', updateFrame);

// old

const img = document.querySelector("#imgHeatic2");
window.addEventListener("scroll", () => {
  const MAX_FRAMES = 79;
  // altura maxima scroll
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  // posicion actual scroll
  const scrollPosition = window.scrollY;
  // calcular porcentaje scroll
  const scrollFraction = scrollPosition / maxScroll;

  // que framel le toca
  const frame = Math.floor(scrollFraction * MAX_FRAMES) || 1;
  // creamos el id del nombre del archivo (.padStart quiere decir que todas las imagenes
  // que tengan ej bultr-video-frame-01.jpg les agrega un 001.jpg
  const id = frame.toString().padStart(3, "0");
  img.src = `resources/frames/ezgif-frame-${id}.jpg`;
});
