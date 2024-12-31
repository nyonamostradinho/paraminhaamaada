document.addEventListener('DOMContentLoaded', function() {
    const mensagem = document.getElementById("texto-mensagem");
    setTimeout(() => {
        mensagem.textContent = "Estou tão feliz por compartilhar minha vida com você! ❤️";
    }, 5000);
});
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${3 + Math.random() * 2}s`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
} const button = document.querySelector('.button-glow');

button.addEventListener('click', () => {
    // Substitua o link abaixo pelo URL para o qual deseja redirecionar
    window.location.href = 'https://www.youtube.com/'; // Exemplo de link
});
