var buttons = document.getElementsByClassName("drum");
var sound = new Audio();

document.addEventListener("keypress", function (event) {
    setSound(sound, event.key);
})

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        setSound(sound, this.textContent);
    });
};

function addAnim(key) {
    // add class to appropriate drum
    var activeDrum = document.querySelector("." + key);
    activeDrum.classList.add("pressed");

    // timeout to remove class
    setTimeout(() => activeDrum.classList.remove("pressed"), 100);
}

function setSound(audio, text) {
    if (text == 'w') {
        audio.src = "./sounds/crash.mp3";
    }
    else if (text == 'a') {
        audio.src = "./sounds/kick-bass.mp3";
    }
    else if (text == 's') {
        audio.src = "./sounds/snare.mp3";
    }
    else if (text == 'd') {
        audio.src = "./sounds/tom-1.mp3";
    }
    else if (text == 'j') {
        audio.src = "./sounds/tom-2.mp3";
    }
    else if (text == 'k') {
        audio.src = "./sounds/tom-3.mp3";
    }
    else if (text == 'l') {
        audio.src = "./sounds/tom-4.mp3";
    }
    else {
        return;
    }
    audio.play();
    // add function call to trigger animation on appropriate drum
    addAnim(text);
}
