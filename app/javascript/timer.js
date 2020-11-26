var initialTime;
var minutes1;
var seconds1;
var startTime;
var button1;
var button2;

function calcInitialTime () {   //現在のタイマー表示を秒に変換
  initialTime = (parseInt(minutes1) * 60 + parseInt(seconds1)) * 1000;
}
function countDown () {   //カウントダウン
  const d = (initialTime - (Date.now() - startTime)) / 1000;
  minutes1 = String(Math.floor(d / 60)).padStart(2, '0');
  seconds1 = String(Math.floor(d - minutes1 * 60)).padStart(2, '0');
  if (d <= 0) { //表示がゼロになったらカウントダウンを止める
    clearTimeout(timeoutId);
    initialTime = 0;
    return;
  }
  setTimer();
  timeoutId = setTimeout(() => {
    countDown();
  }, 100);
}
///タイマーを動かすイベント///
button1.addEventListener('click', () => {   ////カウントダウンを止める
  clearTimeout(timeoutId);
  btnStatusStopped();
})
button2.addEventListener('click', () => {   ////カウントダウンを始める
  calcInitialTime();  
  if (initialTime <= 0) {
    return;
  }
  startTime = Date.now();
  countDown();
  btnStatusRunning();
})
document.getElementById('reset').addEventListener('click', () => {
  clearTimeout(timeoutId);
  minutes1 = 0;
  seconds1 = 0;
  btnStatusReset();
  setTimer();
})
