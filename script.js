let character = document.getElementById('character');
let block = document.getElementById('block');

let counter = 0;
function jump(){
    if( character.classList == 'animate'){return}
    character.classList.add('animate');
    setTimeout(function(){
        character.classList.remove('animate');
    }, 300);
}

let checkDead = setInterval(function() {
    let characterTop = parseInt( window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeft = parseInt( window.getComputedStyle(block).getPropertyValue('left'));


    if( blockLeft < 20 && blockLeft > -20 && characterTop>=130){
        block.style.animation = 'none';
        alert("Game Over. Score: "+Math.floor(counter/100));
        counter = 0;
        block.style.animation = 'block 1s infinite linear';
    }
    else{
        counter++;
        document.getElementById('scoreSpan').innerHTML = Math.floor(counter/100);
    }
}, 10);

document.body.onkeyup = function(e){
    if(e.keyCode == 32|| e.keyCode ==38){
       jump()
    }
}
