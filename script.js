console.log('Hello!');

document.querySelectorAll('path').forEach((path) => {
   path.style.setProperty('--length', path.getTotalLength().toString());
});

document.onscroll = (event) => {
    /*document.querySelectorAll('.parallax').forEach((parallax) => {
        parallax.animate([
            { transform: `translateY(${window.scrollY * parallax.dataset.factor}px)` }
        ], {
            duration: parseInt(parallax.dataset.duration),
            fill: 'both',
            easing: 'ease-in'
        });
    });*/

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

/*document.querySelectorAll('.parallax').forEach((parallax) => {
    setInterval(() => {
        /!*parallax.animate([
            { transform: `translateY(${Math.round(window.scrollY * parallax.dataset.factor*100)/100}px)` }
        ], {
            duration: parseInt(parallax.dataset.duration),
            fill: 'both',
            easing: 'ease-in'
        });*!/
    }, 10);
});*/


const parallaxElements = document.querySelectorAll('.parallax');

/*
const parallax = () => {
    parallaxElements.forEach((parallax) => {
        parallax.animate([
            { transform: `translateY(${window.scrollY * parallax.dataset.factor}px)` }
        ], {
            duration: 10,
            fill: 'both',
            easing: 'cubic-bezier(0.45, 0, 0.55, 1)'
        });

        // parallax.style.setProperty('--transform', `translateY(${window.scrollY * parallax.dataset.factor}px)`);
    });
    requestAnimationFrame(parallax)
}

requestAnimationFrame(parallax)
*/

for (let element of parallaxElements) {
    // if data-factor is negative, the parallax effect will be inverted
    if (element.dataset.factor < 0) {
        element.dataset.factor = Math.abs(element.dataset.factor);
        element.dataset.orientation = 'up';
    }
    new simpleParallax(element, {
        orientation: element.dataset.orientation ? element.dataset.orientation : 'down',
        scale: (element.dataset.factor+1)*1.5,
        overflow: true,
        delay: element.dataset.duration/100,
    });
}