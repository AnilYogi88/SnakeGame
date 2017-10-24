var snake = document.getElementsByClassName("box-snake");
var snakeSize = snake[0].offsetHeight; 
var snakeSizeWidth = snake[0].offsetWidth;
var snakeSizeHeight = snake[0].offsetHeight;
var snakeX = [];
var snakeY = [];
//determing snake
for (var i = 0; i < snake.length; i++){
    snakeX.push(snake[i].offsetLeft);
    snakeY.push(snake[i].offsetTop);
}

var score = 0;
var moveTime = 200;

// snakeX.push(snake[0].offsetLeft);
// snakeY.push(snake[0].offsetTop);
//console.log(snake);
//console.log(snake[0]);
//console.log(snakeX);


//game board
var gameBoard=document.getElementById("box-black");
var gameBoardWidth = gameBoard.offsetWidth;
var gameBoardHeight = gameBoard.offsetHeight;

 //food
var food = document.getElementById("box-food");
var foodX = food.offsetLeft;
var foodY = food.offsetTop;
var foodSize = food.offsetHeight;

// display highScore
document.getElementById("highScore").innerHTML = 'HIGH-SCORE:<span id ="box-high">'+localStorage.getItem("highScore")+'</span>'

generateFood();
//Moving snake and increasing body
var moveTimer;
function move(dir){
    if (dir=="down"){
      moveTimer = setInterval(function(){
            var oldX = [];
            var oldY = [];
            //for moving each part of snake and adding tail in body
            for(var i=0; i<snake.length; i++){
                oldX.push(snakeX[i]);
                oldY.push(snakeY[i]);

                if(i == 0){
                    snakeY[0] = snakeY[0] + snakeSize;
                    snake[0].style.top = snakeY[0] +'px';
                }
                else{
                    
                    snakeX[i] = oldX[i-1];
                    snakeY[i] = oldY[i-1];
                    snake[i].style.left = snakeX[i] + 'px';
                    snake[i].style.top = snakeY[i] + 'px';
                }

            }
            //snakeY[0] = snakeY[0] + snakeSize;
            //snake[0].style.top = snakeY[0] +'px';
            wallCollision();
            foodCollision();
            bodyCollision();
        }, moveTime);
  }
  else if(dir=="up"){
     moveTimer = setInterval(function(){
         var oldX = [];
         var oldY = [];

         for(var i=0; i<snake.length;i++){
             oldX.push(snakeX[i]);
             oldY.push(snakeY[i]);

             if (i == 0){
                snakeY[0] = snakeY[0] - snakeSize;
                snake[0].style.top = snakeY[0] +'px';
             }
             else{
                 snakeX[i] = oldX[i-1];
                 snakeY[i] = oldY[i-1];
                 snake[i].style.left = snakeX[i] + "px";
                 snake[i].style.top = snakeY[i] + "px";
             }
         }
        
        wallCollision();
        foodCollision();    
        bodyCollision();       
    }, moveTime); 
  } 
  else if(dir=="left"){
     moveTimer = setInterval(function(){
        var oldX = [];
        var oldY = [];

        for (var i = 0; i < snake.length; i++){
            oldX.push(snakeX[i]);
            oldY.push(snakeY[i]);
           
            if (i == 0 ){
            snakeX[0] = snakeX[0] + snakeSize;
            snake[0].style.left = snakeX[0] +'px';
        }
        else{
            snakeX[i]= oldX[i-1];
            snakeY[i] = oldY[i-1];
            snake[i].style.left = snakeX[i] + "px";
            snake[i].style.top = snakeY[i] + "px";
        }
    }  
        wallCollision();
        foodCollision();
        bodyCollision();
     }, moveTime);
  }
   else if (dir=="right"){
      moveTimer = setInterval(function(){ 
          oldX=[];
          oldY=[];
          for (var i=0; i< snake.length; i++){
              oldX.push(snakeX[i]);
              oldY.push(snakeY[i]);

              if (i==0){
                snakeX[0] = snakeX[0] - snakeSize;
                snake[0].style.left = snakeX[0] +'px';
              }
              else{
                snakeX[i]= oldX[i-1];
                snakeY[i] = oldY[i-1];
                snake[i].style.left =snakeX[i] + "px";
                snake[i].style.top = snakeY[i] + "px";
              }
          } 
       
        wallCollision();
        foodCollision();
        bodyCollision();
    }, moveTime);
  }
}

//assigning key value
var currDir;
document.addEventListener("keydown",function(event){
    //console.log(event.key);
    //console.log(event.code);
    if(event.key=="ArrowDown" && currDir != "up"){
        clearInterval(moveTimer);
        move("down");
        currDir = "down";
    }
    else if(event.key=="ArrowUp" && currDir != "down"){
        clearInterval(moveTimer);
        move("up");
        currDir = "up";
    }
    else if (event.key=="ArrowLeft" && currDir != "left"){
        clearInterval(moveTimer);
        move("right");
        currDir = "right";
    }
    else if (event.key=="ArrowRight" && currDir != "right"){
        clearInterval(moveTimer);
        move("left");
        currDir = "left";
    }
});
// Wall Collision
function wallCollision(){
    if( snakeX[0] < 0 || snakeX[0] + snakeSize > gameBoardWidth || snakeY[0] < 0 || snakeY[0] + snakeSize > gameBoardHeight){
        var gameOver = document.getElementById("box-end");
        gameOver.style.display="block";

        for(var i=0; i < snake.length; i++){
            snake[i].style.display = "none";
        }
        if(score > localStorage.getItem("highScore")){
            localStorage.setItem("highScore", score);
        }
        gameOver.addEventListener('click', function(){
           
            console.log("click");
            location.reload();
           
        });
       //console.log("wall collsion");
    }
} 
//Food Collision
function foodCollision(){
    if (snakeX[0] < foodX + foodSize && foodX < snakeX[0] + snakeSize && snakeY[0] < foodY + foodSize && foodY < snakeY[0] + snakeSize){
        generateFood();
        updateScore();
        snakeBody();
    }
}
 // Food Generation
 function generateFood(){
     foodX = Math.random() * (gameBoardWidth - foodSize * 1.5);
     foodY = Math.random() * (gameBoardHeight - foodSize * 1.5);

     food.style.top = foodY + 'px';
     food.style.left = foodX + 'px';
     
}
//Score Upate
function updateScore(){
    score = score + 1;
    document.getElementById("box-score").innerHTML = score;
    if(score % 3 == 0 && moveTime > 50){
        moveTime = moveTime - 4;
    }
    //console.log(moveTime)
}
// sanke body
function snakeBody(){
    var snakeT = document.createElement("div");
    document.getElementById("box-black").appendChild(snakeT);
    snakeT.className = "box-snake";
    snakeT.style.top = -200 +'px';
    snakeT.style.left = -200 +'px';    
}
// snake body collision
function bodyCollision(){
    for (var i = 1; i < snake.length; i++ ){
        if(snakeX[0] < snakeX[i] + snakeSizeWidth && snakeX[0] + snakeSizeHeight > snakeX[i] &&
        snakeY[0] < snakeY[i] + snakeSizeHeight && snakeY[0] + snakeSizeHeight > snakeY[i]){
            var gameOver = document.getElementById("box-end");
            gameOver.style.display="block";
        
            for(var i=0; i < snake.length; i++){
                snake[i].style.display = "none";
            }

            if(score > localStorage.getItem("highScore")){
                localStorage.setItem("highScore", score);
            }
             gameOver.addEventListener('click', function(){
                    
            //console.log("click");
             location.reload();
            });
        }
    }
}