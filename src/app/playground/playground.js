//Food Collision
game.foodCollision = function (){
    if (game.snakeX[0] < game.foodX + game.foodSize && game.foodX < game.snakeX[0] + game.snakeSize && game.snakeY[0] < game.foodY + game.foodSize && game.foodY < game.snakeY[0] + game.snakeSize){
        game.generateFood();
        game.updateScore();
        game.snakeBody();
    }
}
 // Food Generation 
 game.generateFood = function(){
     game.foodX = Math.floor(Math.random() * (game.gameBoardWidth/game.foodSize))*game.foodSize;
     game.foodY = Math.floor(Math.random() * (game.gameBoardHeight/game.foodSize))*game.foodSize;

     game.food.style.top = game.foodY + 'px';
     game.food.style.left = game.foodX + 'px';
   
}

// sanke body
game.snakeBody = function (){
    
    var snakeT = document.createElement("div");
    document.getElementById("box-black").appendChild(snakeT);
    snakeT.className = "box-snake";
    snakeT.style.top = -200 +'px';
    snakeT.style.left = -200 +'px';    
}
// snake body collision
game.bodyCollision= function(){
    for (var i = 1; i < game.snake.length; i++ ){
        if(game.snakeX[0] < game.snakeX[i] + game.snakeSizeWidth && game.snakeX[0] + game.snakeSizeHeight > game.snakeX[i] && 
            game.snakeY[0] < game.snakeY[i] + game.snakeSizeHeight && game.snakeY[0] + game.snakeSizeHeight > game.snakeY[i]){
            game.gameOver();
        }
    }
}
//Wall Collision
game.wallCollision = function (){
    if( game.snakeX[0] < 0 || game.snakeX[0] + game.snakeSize > game.gameBoardWidth || game.snakeY[0] < 0 || game.snakeY[0] + game.snakeSize > game.gameBoardHeight){
        game.gameOver();
       
    }
} 
game.gameOver = function(){
    var gameOver = document.getElementById("box-end");
    gameOver.style.display="block";

    for(var i=0; i < game.snake.length; i++){
        game.snake[i].style.display = "none";
    }
    
     if(game.score > localStorage.getItem("highScore")){
         localStorage.setItem("highScore", game.score);
     }
    gameOver.addEventListener('click', function(){
       
        console.log("click");
        location.reload();
       
    });
}