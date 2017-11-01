var mainGame = function () {
    var snake = document.getElementsByClassName("box-snake"),
     snakeSize = snake[0].offsetHeight,
     snakeSizeWidth = snake[0].offsetWidth,
     snakeSizeHeight = snake[0].offsetHeight,
     snakeX = [];
     var snakeY = [];
     for (var i = 0; i < snake.length; i++){
        snakeX.push(snake[i].offsetLeft);
        snakeY.push(snake[i].offsetTop);
    }
    var score = 0,
     moveTime = 200,
     gameBoard=document.getElementById("box-black"),
     gameBoardWidth = gameBoard.offsetWidth;
    var gameBoardHeight = gameBoard.offsetHeight,
     food = document.getElementById("box-food"),
     foodX = food.offsetLeft,
     foodY = food.offsetTop,
     foodSize = food.offsetHeight;

        return {
            snake : snake,
            snakeSize : snakeSize,
            snakeSizeWidth : snakeSizeWidth,
            snakeSizeHeight : snakeSizeHeight,
            snakeX : snakeX,
            snakeY : snakeY,
            score : score,
            moveTime : moveTime,
            gameBoard : gameBoard,
            gameBoardHeight : gameBoardHeight,
            gameBoardWidth : gameBoardWidth,
            food : food,
            foodSize : foodSize,
            foodX : foodX,
            foodY : foodY
        }
    
};
 var game = new mainGame();