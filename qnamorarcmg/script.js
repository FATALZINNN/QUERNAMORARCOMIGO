document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');
    const container = document.querySelector('.container');
    const photoContainer = document.getElementById('photo-container');
    const loveMessage = document.getElementById('love-message');

    noButton.addEventListener('mouseover', function() {
        const maxX = window.innerWidth - container.clientWidth;
        const maxY = window.innerHeight - container.clientHeight;

        const newLeft = Math.random() * maxX;
        const newTop = Math.random() * maxY;

        container.style.left = `${newLeft}px`;
        container.style.top = `${newTop}px`;
    });

    yesButton.addEventListener('click', function() {
        photoContainer.classList.remove('hidden');
        loveMessage.classList.remove('hidden');
    });
});


