// Função para o contador de tempo
function updateCounter() {
    const startDate = new Date("2022-11-15T08:00:00"); // Data de início do relacionamento
    const now = new Date();
    const diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("anos").innerText = `${years} anos`;
    document.getElementById("dias").innerText = `${days} dias`;
    document.getElementById("horas").innerText = `${hours} horas`;
    document.getElementById("minutos").innerText = `${minutes} minutos`;
    document.getElementById("segundos").innerText = `${seconds} segundos`;
}

// Slideshow de fotos
let currentSlide = 0;
const slides = document.querySelectorAll(".slideshow .foto");
const dots = document.querySelectorAll(".slideshow .dot");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Atualiza o contador a cada segundo
setInterval(updateCounter, 1000);

// Altera o slide a cada 5 segundos
setInterval(nextSlide, 5000);

// Função para criar corações caindo
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    heart.innerText = "❤️";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Cria corações caindo a cada meio segundo
setInterval(createHeart, 500);
