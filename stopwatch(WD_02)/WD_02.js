let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let lapbtn=document.getElementById('lap');
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
  document.getElementById('laphr').innerHTML=null;
  document.getElementById('lapmin').innerHTML=null;
  document.getElementById('lapsec').innerHTML=null;
  document.getElementById('lapms').innerHTML=null;
  confirm("Your Data will be Lost , Do u wish to Continue");
})

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

lapbtn.addEventListener('click', function(){
  timer=true;
  document.getElementById('laphr').innerHTML="0"+hour+" : ";
  document.getElementById('lapmin').innerHTML="0"+minute+" :";
  document.getElementById('lapsec').innerHTML="0"+second+" :";
  document.getElementById('lapms').innerHTML=millisecond;
})
function laptime(){
  for (var i=1; i<10;i++){
    document.getElementById('laphr').innerHTML="0"+hour+" : ";
  document.getElementById('lapmin').innerHTML="0"+minute+" :";
  document.getElementById('lapsec').innerHTML="0"+second+" :";
  document.getElementById('lapms').innerHTML=millisecond;
  }
}