import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Detectar preferencia de movimiento reducido
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initScrollAnimations() {
  if (prefersReducedMotion) {
    // Si el usuario prefiere movimiento reducido, solo aplicar fade simple
    gsap.set('.reveal, .stagger-item', { opacity: 1 });
    return;
  }

  // Animación de reveal para secciones
  const revealElements = gsap.utils.toArray<HTMLElement>('.reveal');
  
  revealElements.forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        end: 'top 60%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 24,
      duration: 0.8,
      ease: 'power2.out',
    });
  });

  // Animación stagger para cards y listas
  const staggerContainers = gsap.utils.toArray<HTMLElement>('.stagger-container');
  
  staggerContainers.forEach((container) => {
    const items = container.querySelectorAll('.stagger-item');
    
    gsap.from(items, {
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        end: 'top 50%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 24,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
    });
  });

  // Parallax suave en el Hero
  const heroParallax = document.querySelector('.hero-parallax');
  
  if (heroParallax) {
    gsap.to(heroParallax, {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: 150,
      ease: 'none',
    });
  }

  // Barra de progreso de scroll
  const progressBar = document.querySelector('.scroll-progress');
  
  if (progressBar) {
    gsap.to(progressBar, {
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
        onUpdate: (self) => {
          gsap.to(progressBar, {
            scaleX: self.progress,
            duration: 0.1,
            ease: 'none',
          });
        },
      },
    });
  }

  // Animación del header al hacer scroll
  const header = document.querySelector('header');
  
  if (header) {
    ScrollTrigger.create({
      start: 'top -80',
      end: 99999,
      toggleClass: { 
        targets: header, 
        className: 'scrolled' 
      },
    });
  }

  // Animación de fade-in para elementos con delay
  const fadeElements = gsap.utils.toArray<HTMLElement>('.fade-in-delay');
  
  fadeElements.forEach((element, index) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: index * 0.1,
      ease: 'power2.out',
    });
  });

  // Actualizar ScrollTrigger cuando cambie el tamaño de la ventana
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });
}

// Inicializar animaciones cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
  initScrollAnimations();
}
