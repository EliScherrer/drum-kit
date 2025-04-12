function CustomAudio(fileLocation) {
    this.fileLocation = fileLocation;
    this.audio = new Audio(fileLocation)
    this.play = () => { this.audio.play(); }
}

function getAudioFileLocation(soundType) {
    fileLocation = ""
    switch(soundType) {
        case "w":
            fileLocation = "./sounds/crash.mp3"
            break;
        case "a":
            fileLocation = "./sounds/kick-bass.mp3"
            break;
        case "s":
            fileLocation = "./sounds/snare.mp3"
            break;
        case "d":
            fileLocation = "./sounds/tom-1.mp3"
            break;
        case "j":
            fileLocation = "./sounds/tom-2.mp3"
            break;
        case "k":
            fileLocation = "./sounds/tom-3.mp3"
            break;
        case "l":
            fileLocation = "./sounds/tom-4.mp3"
            break;
        default:
            console.log("invalid click???");
    }

    return fileLocation
}

let buttons = document.querySelectorAll("button")
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    let soundType = button.innerHTML;
    let fileLocation = getAudioFileLocation(soundType);

    button.addEventListener("click", () => {
        playButtonSound(fileLocation);
        buttonAnimation(soundType);
    });
}

document.addEventListener("keydown", (event) => {
    let soundType = event.key;
    let fileLocation = getAudioFileLocation(soundType);
    playButtonSound(fileLocation);
    buttonAnimation(soundType);
})

function playButtonSound(fileLocation) {
    let audio = new CustomAudio(fileLocation)
    audio.play();
}

function buttonAnimation(soundType) {
    let button = document.querySelector("." + soundType);

    let timeout = 100
    button.classList.add("pressed");
    setTimeout(() => {
        button.classList.remove("pressed");
    }, timeout);
}