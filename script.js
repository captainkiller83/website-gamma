console.log('Hello!');

document.querySelectorAll('path').forEach((path) => {
   path.style.setProperty('--length', path.getTotalLength().toString());
});