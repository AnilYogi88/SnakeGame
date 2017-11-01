//Score Upate
game.updateScore = function(){
    game.score = game.score + 1;
    document.getElementById("box-score").innerHTML = game.score;
    if(game.score % 3 === 0 && game.moveTime > 50){
        game.moveTime = game.moveTime - 4;
        // console.log(game.moveTime)
    }
}
