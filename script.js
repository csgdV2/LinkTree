document.querySelectorAll('.link-card').forEach(card => {
    card.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

let currentCard = 0;
const cards = document.querySelectorAll('.link-card');

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        currentCard = (currentCard + 1) % cards.length;
        cards[currentCard].focus();
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        currentCard = (currentCard - 1 + cards.length) % cards.length;
        cards[currentCard].focus();
    }
});
