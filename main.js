// 랜덤번호 지정
// 유저가 번호를 입력 그리고 go버튼누름
// 만약에 유저가 맞추면 맞추면 정답
// 랜덤번호가 < 유저번호 down
// 랜덤번호가 > 유저번호 up 
// reset버튼 누르면 게임 리셋 
// 5번 기회 ( 더이상불가 버튼 disable)
// 유저가 범위밖의 숫자를 입력하면 알려준다 기회안깎음
// 유저가 이미 입력한 숫자를 입려하면 알려주고 안깍음

let computerNum =0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history =[]

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus",function(){ 
  userInput.value="";
});
//이벤트이름 이벤트발생시 실행함수

function pickRandomNum(){
  computerNum = Math.floor(Math.random() *100)+1;
  //랜덤한 숫자를 뽑을수 있게 도와주는 함수(0-1사이숫자반환)
  // math.floor() 소수점없어짐
  console.log("정답",computerNum);
}

function play(){
  let userValue = userInput.value;
  if(userValue<1 || userValue>100){
    resultArea.textContent="1과 100사이 숫자를 입력해주세요"
    return;
  }
  if(history.includes(userValue)){
    resultArea.textContent="이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요!"
    return;
  }
  chances --;
  chanceArea.textContent= `남은 기회 :${chances}번`;
  if(userValue < computerNum){
    resultArea.textContent = "Up!"
    
  } else if(userValue > computerNum){
    resultArea.textContent = "Down!"
  }else {
    resultArea.textContent = "정답!"
    gameOver=true;
  }
  history.push(userValue)

  if(chances <1){
    gameOver=true;
  }
  if (gameOver == true){
    playButton.disabled = true;
  }
}
function reset(){
  // user input창이 정리되고 //새로운 번호가 생성 이미만들어둔 함수 사용
  userInput.value = "";
  playButton.disabled = false;
  chances = 5;
  chanceArea.innerHTML = `남은 기회:${chances}`;
  pickRandomNum();
  resultArea.textContent="결과값이 여기 나옴";
}

pickRandomNum();