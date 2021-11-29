let clock = document.querySelector('.clock');
let digitalClock = document.querySelector('#time');
let audio = document.createElement('audio');
audio.setAttribute('src' , './audio/Увидомление.mp3');
function digitalClockNow() {
  let time = new Date();
  let h = time.getHours().toString();
  let m = time.getMinutes().toString();
  let s = time.getSeconds().toString();
  if (m == 50 && s == 0) {
    audio.play();
  }
  if (h.length < 2) {
    h = "0" + h;
  };
  if (m.length < 2) {
    m = "0" + m;
  };
  if (s.length < 2) {
    s = "0" + s;
  };
  digitalClock.innerHTML = h + ':' + m + ':' + s;
}
function start() {
  let time = new Date();
  let s = time.getSeconds().toString();
  let m = time.getMinutes().toString();
  let h = time.getHours().toString();
  let secondPositionStart = s * 6;
  let secondPositionEnd = secondPositionStart + 360;
  let minutePositionStart = m * 6 + (s * 0.1);
  let minutePositionEnd = minutePositionStart + 360;
  let hourPositionStart = h * 30 + (m * 0.5) + (s * 0.1);
  let hourPositionEnd = hourPositionStart + 360;
  clock.style.setProperty('--secondPositionStart', secondPositionStart + 'deg');
  clock.style.setProperty('--secondPositionEnd', secondPositionEnd + 'deg');
  clock.style.setProperty('--minutePositionStart', minutePositionStart + 'deg');
  clock.style.setProperty('--minutePositionEnd', minutePositionEnd + 'deg');
  clock.style.setProperty('--hourPositionStart', hourPositionStart + 'deg');
  clock.style.setProperty('--hourPositionEnd', hourPositionEnd + 'deg');
  setInterval(digitalClockNow, 1000);
}
start();