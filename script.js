const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#resetButton');
const winningScoreSelect = document.querySelector('#playto');


let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let gameOver = false;

p1Button.addEventListener('click', function(){
    if(!gameOver){
        p1Score ++;
        if((p1Score >= winningScore) && (p1Score - p2Score > 1)){
            gameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Button.disabled=true;
            p2Button.disabled=true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener('click', function(){
    if(!gameOver){
        p2Score ++;
        if((p2Score >= winningScore) && (p2Score - p1Score > 1)){
            gameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1Button.disabled=true;
            p2Button.disabled=true;
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener('click', function(){
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1Display.classList.remove('has-text-danger', 'has-text-success');
    p1Button.disabled=false;
    p2Button.disabled=false;
});

winningScoreSelect.addEventListener('change', function(){
    winningScore = Number(this.value);
});