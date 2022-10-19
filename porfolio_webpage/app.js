const ball = document.getElementById('ball')
const game = document.getElementById('game')
game.onmousedown = function(){
    ball.style.left = '1024px';
    ball.style.transitionDuration = '5s';
}
game.onmouseup = function(){
    ball.style.left = '0px';
    ball.style.transitionDuration = '5s';
}