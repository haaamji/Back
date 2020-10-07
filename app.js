//현재 css 백그라운드 색 글자
var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');//컬러 1 인풋창
var color2 = document.querySelector('.color2');//컬러 2 인풋창
var body = document.getElementById('gradient');

function setGradient(){
    body.style.background = "linear-gradient(to right, "
                        +color1.value +","+color2.value+")";
    css.textContent = body.style.background + ";";
}


color1.addEventListener('input',setGradient);
color2.addEventListener('input',setGradient);