const number_1_16 = Array.from({ length: 16 }, (_, index) => index + 1);
for (let i = number_1_16.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [number_1_16[i], number_1_16[j]] = [number_1_16[j], number_1_16[i]];
}
const number_17_32 = Array.from({ length: 16 }, (_, index) => index + 1);
for (let i = number_17_32.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [number_17_32[i], number_17_32[j]] = [number_17_32[j], number_17_32[i]];
}
let i = 1;
document.getElementById("number_1").textContent = number_1_16[0];
document.getElementById("number_2").textContent = number_1_16[1];
document.getElementById("number_3").textContent = number_1_16[2];
document.getElementById("number_4").textContent = number_1_16[3];
document.getElementById("number_5").textContent = number_1_16[4];
document.getElementById("number_6").textContent = number_1_16[5];
document.getElementById("number_7").textContent = number_1_16[6];
document.getElementById("number_8").textContent = number_1_16[7];
document.getElementById("number_9").textContent = number_1_16[8];
document.getElementById("number_10").textContent = number_1_16[9];
document.getElementById("number_11").textContent = number_1_16[10];
document.getElementById("number_12").textContent = number_1_16[11];
document.getElementById("number_13").textContent = number_1_16[12];
document.getElementById("number_14").textContent = number_1_16[13];
document.getElementById("number_15").textContent = number_1_16[14];
document.getElementById("number_16").textContent = number_1_16[15];
document.getElementById("number_17").textContent = number_17_32[0]+16;
document.getElementById("number_18").textContent = number_17_32[1]+16;
document.getElementById("number_19").textContent = number_17_32[2]+16;
document.getElementById("number_20").textContent = number_17_32[3]+16;
document.getElementById("number_21").textContent = number_17_32[4]+16;
document.getElementById("number_22").textContent = number_17_32[5]+16;
document.getElementById("number_23").textContent = number_17_32[6]+16;
document.getElementById("number_24").textContent = number_17_32[7]+16;
document.getElementById("number_25").textContent = number_17_32[8]+16;
document.getElementById("number_26").textContent = number_17_32[9]+16;
document.getElementById("number_27").textContent = number_17_32[10]+16;
document.getElementById("number_28").textContent = number_17_32[11]+16;
document.getElementById("number_29").textContent = number_17_32[12]+16;
document.getElementById("number_30").textContent = number_17_32[13]+16;
document.getElementById("number_31").textContent = number_17_32[14]+16;
document.getElementById("number_32").textContent = number_17_32[15]+16;

function mousedown(number, image){
    if(i == document.getElementById(number).textContent){
      right = new Audio('right.mp3');
      right.play();
      document.getElementById(number).style.display = "none";
      document.getElementById(image).style.display = "none";
      i++;
      if(document.getElementById(number).textContent == 1){
        startTimer();
      }
      else if(document.getElementById(number).textContent == 32){
        stopTimer();
      }
    }
    else{
      wrong = new Audio('wrong.mp3');
      wrong.play();
    }
}

let startTime;
let elapsedTime = 0;
let timerInterval;

const timerElement = document.getElementById("timer");

function startTimer() {
  if (!startTime) {
    startTime = Date.now() - elapsedTime;
  }
  timerInterval = setInterval(updateTimer, 10); // 每10毫秒更新一次
}

function stopTimer() {
  clearInterval(timerInterval);
  document.getElementById("pass").style.display = 'block';
}

function updateTimer() {
  elapsedTime = Date.now() - startTime;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const milliseconds = Math.floor(elapsedTime % 1000 / 10);
  const seconds = Math.floor(elapsedTime / 1000) % 60;
  const minutes = Math.floor(elapsedTime / 60000);
  timerElement.textContent = `${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}`;
  document.getElementById("finish_time").textContent = `通關時間:${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}`;
  if(minutes==59 && seconds==59){
    stopTimer();
  }
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}


