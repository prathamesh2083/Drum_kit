// for mouse click
var w = document.querySelectorAll(".drum");
for (var i = 0; i < w.length; i++) {
    w[i].addEventListener("click", playsound);
}
function playsound() {
    var clicked_btn = this.innerHTML;
    this.style.color = "white";
    switch (clicked_btn) {
        case 'w':
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;

    }
    addAnimations(clicked_btn);

}
//  for keyboard press

document.addEventListener("keydown", function (event) {
    var clicked_btn = event.key;
    switch (clicked_btn) {
        case 'w':
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;

    }
    addAnimations(clicked_btn);

})

// adding animations
function addAnimations(pressedkey) {
    var active_button = document.querySelector("." + pressedkey);
    active_button.classList.add("pressed");
    setTimeout(function () {
        active_button.classList.remove("pressed");
    }, 100);

}


