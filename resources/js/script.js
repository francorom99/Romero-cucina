let img = document.querySelector("#imgHeatic2")
let maxFrame = 157 // cantidad total de frames
const maxScrollFraction = 0.5 // Valor máximo de scrollFraction

function actualizarFrames() {
    // altura máxima scroll
    let maxScroll = document.documentElement.scrollHeight - window.innerHeight
    // posición actual scroll
    let scrollPosition = window.scrollY
    // calcular porcentaje scroll limitado al máximo deseado
    let scrollFraction = Math.min(Math.max(scrollPosition / maxScroll, 0), maxScrollFraction)
    
    // Normalizamos el scrollFraction para que vaya de 0 a 1 dentro del rango permitido
    let normalizedFraction = scrollFraction / maxScrollFraction
    
    // Calculamos el frame (invertido como en tu código original)
    let frame = maxFrame - Math.floor(normalizedFraction * maxFrame) || 1
    
    // Aseguramos que el frame no sea menor que 1
    frame = Math.max(frame, 1)
    
    // creamos el id del nombre del archivo
    let id = frame.toString().padStart(3, '0') 
    img.src = `resources/frames/frame-${id}.jpg`
    
    // scrollear para mostrar el texto de presentación del producto
    let scrollText = document.querySelector("#scrollTexto")
    // frame 0 (porque como hice que vaya del 79 al 0) al 42.
    if (frame >= 0 && frame <= 100) {
        // classList para agregar que sea visible 
        scrollText.classList.add('visible')
    } else {
        scrollText.classList.remove('visible')
    }
    console.log(scrollFraction)
}

// actualizamos imagen al hacer scroll
window.addEventListener('scroll', actualizarFrames)

// actualizamos imagen al cargar la página
window.addEventListener('load', actualizarFrames)

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
