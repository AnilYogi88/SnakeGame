// display highScore
document.getElementById("highScore").innerHTML = 'HIGH-SCORE:<span id ="box-high">'+localStorage.getItem("highScore")+'</span>';
// generate food at random place as soon as the game starts
game.generateFood();
// move sanke at different direction
var moveTimer;
game.move = function (dir){
    if (dir=="down"){
      moveTimer = setInterval(function(){
            var oldX = [];
            var oldY = [];
            //for moving each part of snake and adding tail in body
            for(var i=0; i < game.snake.length; i++){
                oldX.push(game.snakeX[i]);
                oldY.push(game.snakeY[i]);

                if(i == 0){
                    game.snakeY[0] = game.snakeY[0] + game.snakeSize;
                    game.snake[0].style.top = game.snakeY[0] +'px';
                }
                else{
                    
                    game.snakeX[i] = oldX[i-1];
                    game.snakeY[i] = oldY[i-1];
                    game.snake[i].style.left = game.snakeX[i] + 'px';
                    game.snake[i].style.top = game.snakeY[i] + 'px';
                }

            }
            //snakeY[0] = snakeY[0] + snakeSize;
            //snake[0].style.top = snakeY[0] +'px';
            game.wallCollision();
            game.foodCollision();
            game.bodyCollision();
        }, game.moveTime);
  }
  else if(dir=="up"){
     moveTimer = setInterval(function(){
         var oldX = [];
         var oldY = [];

         for(var i=0; i<game.snake.length;i++){
             oldX.push(game.snakeX[i]);
             oldY.push(game.snakeY[i]);

             if (i == 0){
                game.snakeY[0] = game.snakeY[0] - game.snakeSize;
                game.snake[0].style.top = game.snakeY[0] +'px';
             }
             else{
                 game.snakeX[i] = oldX[i-1];
                 game.snakeY[i] = oldY[i-1];
                 game.snake[i].style.left = game.snakeX[i] + "px";
                 game.snake[i].style.top = game.snakeY[i] + "px";
             }
         }
        
        game.wallCollision();
        game.foodCollision();    
        game.bodyCollision();       
    }, game.moveTime); 
  } 
  else if(dir=="left"){
     moveTimer = setInterval(function(){
        var oldX = [];
        var oldY = [];

        for (var i = 0; i < game.snake.length; i++){
            oldX.push(game.snakeX[i]);
            oldY.push(game.snakeY[i]);
           
            if (i == 0 ){
            game.snakeX[0] = game.snakeX[0] + game.snakeSize;
            game.snake[0].style.left = game.snakeX[0] +'px';
        }
        else{
            game.snakeX[i]= oldX[i-1];
            game.snakeY[i] = oldY[i-1];
            game.snake[i].style.left = game.snakeX[i] + "px";
            game.snake[i].style.top = game.snakeY[i] + "px";
        }
    }  
        game.wallCollision();
        game.foodCollision();
        game.bodyCollision();
     }, game.moveTime);
  }
   else if (dir=="right"){
      moveTimer = setInterval(function(){ 
          oldX=[];
          oldY=[];
          for (var i=0; i< game.snake.length; i++){
              oldX.push(game.snakeX[i]);
              oldY.push(game.snakeY[i]);

              if (i==0){
                game.snakeX[0] = game.snakeX[0] - game.snakeSize;
                game.snake[0].style.left = game.snakeX[0] +'px';
              }
              else{
                game.snakeX[i]= oldX[i-1];
                game.snakeY[i] = oldY[i-1];
                game.snake[i].style.left =game.snakeX[i] + "px";
                game.snake[i].style.top = game.snakeY[i] + "px";
              }
          } 
       
        game.wallCollision();
        game.foodCollision();
        game.bodyCollision();
    }, game.moveTime);
  }
}

//assigning key value for direction
var currDir;
document.addEventListener("keydown",function(event){
    //console.log(event.key);
    //console.log(event.code);
    if(event.key=="ArrowDown" && currDir != "up"){
        clearInterval(moveTimer);
        game.move("down");
        currDir = "down";
    }
    else if(event.key=="ArrowUp" && currDir != "down"){
        clearInterval(moveTimer);
        game.move("up");
        currDir = "up";
    }
    else if (event.key=="ArrowLeft" && currDir != "left"){
        clearInterval(moveTimer);
        game.move("right");
        currDir = "right";
    }
    else if (event.key=="ArrowRight" && currDir != "right"){
        clearInterval(moveTimer);
        game.move("left");
        currDir = "left";
    }
});