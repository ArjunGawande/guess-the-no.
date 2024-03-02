
const number = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore =0;

document.querySelector('.check').addEventListener
('click', function() {
    const guess = Number (document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent = 'ENTER THE NUM MOTHERFUCKER';
    }
    else if(guess === number){
       document.querySelector('.message').textContent = '  U GOT IT RIGHT MOTHERFUCKER';
       document.querySelector('body').style.backgroundColor = '#3cab17'
       document.querySelector('.number').textContent = number;

       if(score> highscore){
        highscore=score;
        document.querySelector('.highscore').textContent = highscore;
       }
    }
    else if (guess > number){
        document.querySelector('.message').textContent = '  TOO HIGHT U IDIOT';
        document.querySelector('body').style.backgroundColor = '#ff0000'
        score--;
        document.querySelector('.score').textContent = score;
    }
    else if (guess < number){
        document.querySelector('.message').textContent = '  TOO LOW U IDIOT';
        document.querySelector('body').style.backgroundColor = '#ff0000'
        score--;
        document.querySelector('.score').textContent = score;
    }
});
document.querySelector('.again').addEventListener
('click', function(){
    window.location.reload("Refresh")

})
