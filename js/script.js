document.addEventListener("DOMContentLoaded", function() {
    const typingSpan = document.querySelector('.typing');
    const professions = ['web developer', 'UI designer'];

    let index = 0;
    setInterval(() => {
        typingSpan.textContent = professions[index];
        index = (index + 1) % professions.length;
    }, 2000);
});