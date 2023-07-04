function animation(){
    var x = 0
    var back = document.querySelector(".background");
    for (let i=0; i>25; i++){
        back.style.rotate = i
    }
}
setInterval(1000,animation);