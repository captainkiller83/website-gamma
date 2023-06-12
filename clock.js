function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    // Führende Nullen hinzufügen, wenn nötig
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    // Uhrzeit aktualisieren
    var time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").textContent = time;
  }
  function Clock(){
    var hour = document.querySelector(".hour");
    var minute = document.querySelector(".minute");
    var second = document.querySelector(".second");
  
    var c = new Date();
    var h = c.getHours();
    var m = c.getMinutes();
    var s = c.getSeconds();
  
    var hr = (h*(360/12)-180);
    var mr = (m*(360/60)-180);
    var sr = (s*(360/60)-180);
  
    hour.style.rotate = hr+"deg";
    minute.style.rotate = mr+"deg";
    second.style.rotate = sr+"deg";
  }
  
  // Uhrzeit aktualisieren alle 1 Sekunde
  setInterval(updateClock, 1000);
  setInterval(Clock, 1000);
  function number(){
    document.addEventListener('DOMContentLoaded', function() {
      const clock = document.querySelector('.clocks');
      const hours = 12;
      const radius = 80; // Abstand der Linien zur Mitte des Ziffernblatts
  
      for (let i = 1; i <= hours; i++) {
        const hourMarker = document.createElement('div');
        hourMarker.className = 'hour-marker';
        const angle = (360 / hours) * (i - 3); // Versatzwinkel, um die Linien richtig zu positionieren
        const x = Math.cos(angle * Math.PI / 180) * radius;
        const y = Math.sin(angle * Math.PI / 180) * radius;
        hourMarker.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
        clock.appendChild(hourMarker);
      }
    });
  }
  number();