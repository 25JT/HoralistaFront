import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animar() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  document.addEventListener("DOMContentLoaded", () => {
    const ptext = document.querySelector("#Ptext");
    if (ptext) {
      gsap.fromTo(ptext, { opacity: 0, y: 30 }, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ptext,
          start: "top 85%",
        },
        onComplete: () => {
          gsap.to(ptext, {
            x: -8,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      });
    }

    const imgP = document.querySelector("#imgP");
    if (imgP) {
      gsap.fromTo(imgP, { opacity: 0, x: 100 }, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: imgP,
          start: "top 80%",
        },
        onComplete: () => {
          gsap.to(imgP, {
            y: "+=10",
            duration: 3,
            repeat: -1,
            yoyo: true,
          });
        }
      });
    }

    const btnReg = document.querySelector("#btnReg");
    if (btnReg) {
      gsap.fromTo(btnReg, { opacity: 0, y: 30 }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: btnReg,
          start: "top 90%",
        },
        onComplete: () => {
          gsap.to(btnReg, {
            y: -5,
            duration: 1,
            repeat: -1,
            yoyo: true,
          });
        }
      });
    }

    const paraTi = document.querySelector("#ParaTi");
    if (paraTi) {
      gsap.fromTo(paraTi, { opacity: 0, y: 50 }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: paraTi,
          start: "top 85%",
        },
      });
    }

    const cliente = document.querySelector("#cliente");
    if (cliente) {
      gsap.fromTo(cliente, { opacity: 0, x: -80 }, {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: cliente,
          start: "top 80%",
        },
      });
    }

    const profesional = document.querySelector("#profesional");
    if (profesional) {
      gsap.fromTo(profesional, { opacity: 0, x: 80 }, {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: profesional,
          start: "top 80%",
        },
      });
    }

    const animarText = document.querySelector("#animarText");
    if (animarText) {
      gsap.fromTo(animarText, { opacity: 0, y: 30 }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: animarText,
          start: "top 85%",
        },
      });
    }

    const animarImg = document.querySelector("#animarImg");
    if (animarImg) {
      gsap.fromTo(animarImg, { opacity: 0, x: -80 }, {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: animarImg,
          start: "top 85%",
        },
      });
    }

    const servicios = document.querySelector("#servicios");
    if (servicios) {
      gsap.fromTo(servicios, { opacity: 0, y: 50 }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: servicios,
          start: "top 85%",
        },
      });
    }
  });
}
