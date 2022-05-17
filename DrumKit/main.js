let numberOfButtons = document.querySelectorAll('.button').length
for (let j = 0; j < numberOfButtons; j++){
    document.querySelectorAll('.button')[j].addEventListener('click', function (){
        let buttonStyle = this.innerHTML
        sound(buttonStyle)
        animation(buttonStyle)
    })
}

document.addEventListener('keypress', function(event){
    sound(event.key)
    animation(event.key)
})

function sound(key){
switch (key){
    case "w":
        var sound1 = new Audio('music/yeet.mp3')
        sound1.play()
        break
        
    case "a":
      var sound2 = new Audio("music/Glass-Ping.mp3");
      sound2.play();
      break;
  
    case "s":
      var sound3 = new Audio('music/Funny-Sound.mp3');
      sound3.play();
      break;
  
    case "d":
      var sound4 = new Audio('music/fart_echo.mp3');
      sound4.play();
      break;
  
    case "j":
      var sound5 = new Audio('music/Dramatic-Bass.mp3');
      sound5.play();
      break;
  
    case "k":
      var sound6 = new Audio('music/Cat-2.mp3');
      sound6.play();
      break;
  
    case "l":
      var sound7 = new Audio('music/Beep-Beep-Intro.mp3');
      sound7.play();
      break;
  
    default: console.log(key);
    }
}

function animation(currentKey) {
    let activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add('animation')

    setTimeout(function() {
        activeButton.classList.remove('animation')
    
    },100)
}