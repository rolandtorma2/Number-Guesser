const check = document.getElementById('check');
const guess = new URLSearchParams(window.location.search);
const num = guess.get('guess');
const r =  Math.round(Math.random()*10);



if(num == r){
  check.innerHTML = 'You guessed correctly!';
} else {
  check.innerHTML = `Try again...`;
}
