let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let hour = 00;
let minute = 00;
let second = 00;
let millisecond = 00;
let timer = false;

startBtn.addEventListener('click', function () {
  timer = true;
  stopwatch();
});

stopBtn.addEventListener('click', function () {
  timer = false;
});

resetBtn.addEventListener('click', function () {
  timer = false;
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById('hr').innerHTML = "00";
  document.getElementById('min').innerHTML = "00";
  document.getElementById('sec').innerHTML = "00";
  document.getElementById('ms').innerHTML = "00";
});

function stopwatch() {
  if (timer) {
    millisecond++;
    if (millisecond == 100) {
      second++;
      millisecond = 0;
    }
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
      second = 0;
    }
    let hrString = hour;
    let minString = minute;
    let secString = second;
    let msString = millisecond;
    if (hour < 10) {
      hrString = "0" + hrString;
    }
    if (minute < 10) {
      minString = "0" + minString;
    }
    if (second < 10) {
      secString = "0" + secString;
    }
    if (millisecond < 10) {
      msString = "0" + msString;
    }
    document.getElementById('hr').innerHTML = hrString;
    document.getElementById('min').innerHTML = minString;
    document.getElementById('sec').innerHTML = secString;
    document.getElementById('ms').innerHTML = msString;
    setTimeout(stopwatch, 10);
  }
}