
document.addEventListener("keypress", function (event) {
    var keyPress = event.key;
    handleEvents(keyPress);
    animationHandler(keyPress);
});
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var mouseClick = this.innerHTML;
        // this.style.color="white";        
        handleEvents(mouseClick);
        animationHandler(mouseClick);
    });
}
function animationHandler(keyHandler){
    document.querySelector("."+keyHandler).classList.add('pressed');
    
    setTimeout(function(){
        document.querySelector("." + keyHandler).classList.remove('pressed');
    },200);
}
function handleEvents(mouseandkeyEvents) {
    var audio;
    switch (mouseandkeyEvents) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "i":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default: console.log("default");
            break;

    }
}
