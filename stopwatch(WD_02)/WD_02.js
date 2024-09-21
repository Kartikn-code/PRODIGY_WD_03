let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let timer = false;

startBtn.addEventListener('click', function () {
  timer = true;
  stopwatch();
});

stopBtn.addEventListener('click', function () {
  timer = false;
  alert("the value is: " ,hrString,":", minString,":",secString,":",msString)

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
  confirm("Your Data will be Lost , Do u wish to Continue")
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