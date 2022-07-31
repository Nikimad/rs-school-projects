const canvas = document.querySelector('.game');
const ctx = canvas.getContext("2d");

const canvasWidth = (canvas.width = 912);
const canvasHeight = (canvas.height = 912);

const tableResults = document.querySelectorAll('.result');

const box = 48;
const cellCount = canvasWidth / box;
let scoreTable = [0, 0, 0, 0, 0, 0, 0, 0, 0 , 0];
let moveDir = 'stop';
let score = 0;
let maXscore = scoreTable[0];
let snake;
let foodX;
let foodY;


const bg = new Image();
bg.src = './assets/img/bg.png';

function setLocalStorage() {
    localStorage.setItem('score-table', scoreTable);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    const lastScoreTable = localStorage.getItem('score-table').split(',');
    lastScoreTable.forEach((item) => scoreTable.push(item));
    scoreTableUpdate();
}

window.addEventListener('load', getLocalStorage);

function scoreTableUpdate() {
    scoreTable.sort((a, b) => b - a).splice(10);
    document.querySelectorAll('.result').forEach((el, index) => {
        el.textContent = scoreTable[index];
        index += 1
    });
    maXscore = scoreTable[0];
}

function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setFoodPlace() {
    foodX = getRandomNum(1 ,cellCount - 1) * box;
    foodY = getRandomNum(1 ,cellCount - 1) * box;
}

function setSnakeDefault() {
    snake = [{x: Math.floor((cellCount / 2)) * box,
        y: Math.floor((cellCount / 2)) * box }];
}

function direction(event) {
	if(event.keyCode === 37 && moveDir !== "right")
		moveDir = "left";
	if(event.keyCode === 38 && moveDir !== "down")
		moveDir = "up";
	if(event.keyCode === 39 && moveDir !== "left")
		moveDir = "right";
	if(event.keyCode === 40 && moveDir !== "up")
		moveDir = "down";
}

document.addEventListener('keydown', direction);


function setDefault() {
    setSnakeDefault();
    setFoodPlace();
    moveDir = 'stop';
    score = 0;
}

function eatTail(snakeHead, snake, interval) {
    for (let i = 1; i < snake.length; i += 1) {
      if (snakeHead.x === snake[i].x && snakeHead.y === snake[i].y) {
        ctx.fillStyle = 'red';
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.fillStyle = 'blue';
        ctx.fillRect(5 * box, 5 * box, 9 * box, 9 * box);
        ctx.fillStyle = 'white';
        ctx.font = 'bold 48px serif';
        ctx.fillText(`Your score: ${score}`, 6 * box, Math.floor((cellCount / 2) - 1) * box);
        ctx.fillText(`Max-score: ${maXscore}`, 6 * box, Math.floor((cellCount / 2) + 1) * box);
        if (score === maXscore) {
          ctx.fillText('It\'s new record!', 6 * box, Math.floor((cellCount / 2) + 2) * box);
        }
        clearInterval(interval);
        scoreTable.push(score);
        scoreTableUpdate();
        state[0] = true;
    }
  }
}

function isCollision(foodX, foodY, snake) {
    for (let i = 0; i < snake.length; i += 1) {
        if (foodX === snake[i].x && foodY === snake[i].y) {
            return true;
        }
    }
    return false;
}

function draw(interval) {
    let scoreTextContent = (document.querySelector('.score').textContent = score);
    let maxScoreTextContent = (document.querySelector('.max-score').textContent = maXscore);
    let snakeX = snake[0].x;
	let snakeY = snake[0].y;
    
    ctx.drawImage(bg, 0, 0);

    for(let i = 0; i < snake.length; i += 1) {
		ctx.fillStyle =  'green';
		ctx.fillRect(snake[i].x, snake[i].y, box, box);
	}

    ctx.fillStyle = 'yellow';
    ctx.fillRect(foodX, foodY, box, box)

    if(snakeX === foodX && snakeY === foodY) {
        score += 1;
        scoreTextContent = score;
		setFoodPlace();
        if (isCollision(foodX, foodY, snake)) {
            setFoodPlace();
        }
	} else
		snake.pop();

        if(moveDir === "left") snakeX -= box;
	    if(moveDir === "right") snakeX += box;
	    if(moveDir === "up") snakeY -= box;
	    if(moveDir === "down") snakeY += box;


    let newHead = {
		x: snakeX,
		y: snakeY
	};

    if (newHead.x > (cellCount - 1) * box) {
        newHead.x = 0;
    }
    if (newHead.y > (cellCount - 1) * box) {
        newHead.y = 0;
    }

    if (newHead.x < 0) {
        newHead.x = cellCount * box;
    }
    if (newHead.y < 0) {
        newHead.y = cellCount * box;
    }

    if (score > maXscore) {
        maXscore = score;
    }

    eatTail(newHead, snake, interval);
    snake.unshift(newHead);
}

function reset(interval) {
    clearInterval(interval)
    setDefault();
    game = setInterval(() => draw(game), 100);
}

const resetBtn = document.querySelector('.reset');



resetBtn.addEventListener('click', () => reset(game));
setDefault();

let game = setInterval(() => draw(game), 100);
