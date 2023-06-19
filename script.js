console.log('Hello!');

document.querySelectorAll('path').forEach((path) => {
   path.style.setProperty('--length', path.getTotalLength().toString());
});

document.onscroll = () => {
    document.querySelectorAll('.parallax').forEach((parallax) => {
        parallax.animate([
            { transform: `translateY(${window.scrollY * parallax.dataset.factor}px)` }
        ], {
            duration: parseInt(parallax.dataset.duration),
            fill: 'forwards',
            easing: 'ease-in'
        });
    });

    document.querySelectorAll('.fade-in').forEach((fade) => {
        if (window.scrollY > fade.offsetTop - window.innerHeight) {
            fade.style.setProperty('--opacity', (window.scrollY - fade.offsetTop + window.innerHeight) / window.innerHeight);
        }
    });

    document.querySelectorAll('.fade-out').forEach((fade) => {
    if (window.scrollY > fade.offsetTop - window.innerHeight) {
                fade.style.setProperty('--opacity', 1 - (window.scrollY - fade.offsetTop + window.innerHeight) / window.innerHeight);
            }
    });
}
