let clock = document.querySelector('.clock');
let startTime = new Date();
let startSecond = startTime.getSeconds().toString();
let settings = document.querySelector('#settings');
let alarm = document.querySelector('#alarm');
let reminder = document.querySelector('#reminder');
let formAlarm = document.querySelector('.form__alarm');
let formReminder = document.querySelector('.form__reminder');
let formAlarmClouse = document.querySelector('#formAlarmClouse');
let formReminderClouse = document.querySelector('#formReminderClouse');
let alarmHourInput = document.querySelector('#alarmHourInput');
let alarmMinuteInput = document.querySelector('#alarmMinuteInput');
let alarmInstall = document.querySelector('#alarmInstall');
let alarmHour = "";
let alarmMinute = "";
let alarmArrow = document.querySelector('.alarm-arrow');
let alarmArrowPosition;
let reminderMinuteInput = document.querySelector('#reminderMinuteInput');
let reminderInstall = document.querySelector('#reminderInstall');
let reminderMinute = "";
let digitalClock = document.querySelector('#time');
let audio = document.createElement('audio');
audio.setAttribute('src' , './audio/Увидомление.mp3');
function digitalClockNow() {
  let time = new Date();
  let h = time.getHours().toString();
  let m = time.getMinutes().toString();
  let s = time.getSeconds().toString();
  if (h == alarmHour && m == alarmMinute && s == 0) {
    audio.play();
  }
  if ( m == reminderMinute && s == 0) {
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
function secondControl() {
  let time = new Date();
  let s = time.getSeconds().toString();
  console.log(time)
  if (startSecond == s -2) {
    clearInterval(startInterval)
    let s = time.getSeconds().toString();
    let m = time.getMinutes().toString();
    let h = time.getHours().toString();
    let secondPositionStart = s * 6;
    let secondPositionEnd = secondPositionStart + 360;
    let minutePositionStart = m * 6 + (s * 0.1);
    let minutePositionEnd = minutePositionStart + 360;
    let hourPositionStart = h * 30 + (m * 0.5) + (s * 0.00833333);
    let hourPositionEnd = hourPositionStart + 360;
    clock.style.setProperty('--secondPositionStart', secondPositionStart + 'deg');
    clock.style.setProperty('--secondPositionEnd', secondPositionEnd + 'deg');
    clock.style.setProperty('--minutePositionStart', minutePositionStart + 'deg');
    clock.style.setProperty('--minutePositionEnd', minutePositionEnd + 'deg');
    clock.style.setProperty('--hourPositionStart', hourPositionStart + 'deg');
    clock.style.setProperty('--hourPositionEnd', hourPositionEnd + 'deg');
    clock.classList.add('clock_active');
    digitalClock.innerHTML = h + ':' + m + ':' + s;
    setInterval(digitalClockNow, 1);
  };
};
function start() {
  startInterval = setInterval(secondControl, 1);
};
setTimeout(start, 1000);
settings.onclick = function() {
  settings.classList.toggle('settings_active');
};
alarm.onclick = function() {
  formAlarm.classList.add('form_active');
  settings.classList.add('inactive');
};
reminder.onclick = function() {
  formReminder.classList.add('form_active');
  settings.classList.add('inactive');
};
formAlarmClouse.onclick = function() {
  formAlarm.classList.remove('form_active');
  settings.classList.remove('inactive');
};
formReminderClouse.onclick = function() {
  formReminder.classList.remove('form_active');
  settings.classList.remove('inactive');
};
alarmInstall.onclick = function() {
  if (parseInt(alarmHourInput.value) > 23 || parseInt(alarmHourInput.value) < 0 || parseInt(alarmMinuteInput.value) > 59 || parseInt(alarmMinuteInput.value) < 0) {
    alert('Вы ввели некорректные значения');
  }else{
    formAlarm.classList.remove('form_active');
    settings.classList.remove('inactive');
    alarmHour = alarmHourInput.value;
    alarmMinute = alarmMinuteInput.value;
    alarmArrowPosition = alarmHour * 30 + (alarmMinute * 0.5);
    clock.style.setProperty('--alarmArrowPosition', alarmArrowPosition + 'deg');
    alarmArrow.classList.add('alarm-arrow_active');
  };
};
reminderInstall.onclick = function() {
  if (parseInt(reminderMinuteInput.value) > 59 || (parseInt(reminderMinuteInput.value)) < 0) {
    alert('Вы ввели некорректные значения');
  }else{
    formReminder.classList.remove('form_active');
    settings.classList.remove('inactive');
    reminderMinute = reminderMinuteInput.value;
  };
};
