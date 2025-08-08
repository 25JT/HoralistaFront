import { gsap } from "gsap/dist/gsap";

export function animar() {
    
    // Animación GSAP para las filas
gsap.from(".tarjeta", {
    opacity: 0,
    scale: 0.9,
    y: 30,
    duration: 0.5,
    stagger: 0.15,
    ease: "back.out(1.4)"
});

// Animación de entrada para filas en escritorio
gsap.from(".fila", {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.15,
    ease: "power2.out"
});
}
