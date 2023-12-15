var c = document.getElementById("circle");

var ct = c.getContext("2d");
ct.font = "30px Arial";
ct.textAlign = "center";

var minutLength = 150;
var hourLength = 75;
var secLength = 200;

var s = 0;
var m = 0;
var h = 0;

ReDraw();

StartTimer();

function DrawSec(angle) {
  angle -= 90;
  ct.beginPath();
  ct.moveTo(c.width / 2, c.height / 2);
  ct.lineCap = "round";
  ct.lineTo(
    c.width / 2 + Math.cos((angle * Math.PI) / 180) * secLength,
    c.height / 2 + Math.sin((angle * Math.PI) / 180) * secLength
  );
  ct.lineWidth = 5;
  ct.stroke();
}

function DrawMinut(angle) {
  angle -= 90;
  ct.beginPath();
  ct.moveTo(c.width / 2, c.height / 2);
  ct.lineCap = "round";
  ct.lineTo(
    c.width / 2 + Math.cos((angle * Math.PI) / 180) * minutLength,
    c.height / 2 + Math.sin((angle * Math.PI) / 180) * minutLength
  );
  ct.lineWidth = 10;
  ct.stroke();
}

function DrawHour(angle) {
  angle -= 90;
  ct.beginPath();
  ct.moveTo(c.width / 2, c.height / 2);
  ct.lineCap = "round";
  ct.lineTo(
    c.width / 2 + Math.cos((angle * Math.PI) / 180) * hourLength,
    c.height / 2 + Math.sin((angle * Math.PI) / 180) * hourLength
  );
  ct.lineWidth = 20;
  ct.stroke();
}

function DrawClock() {
  ct.beginPath();
  ct.arc(c.width / 2, c.height / 2, 250, 0, 2 * Math.PI);
  ct.lineWidth = 5;
  ct.stroke();

  ct.beginPath();
  ct.arc(c.width / 2, c.height / 2, 30, 0, 2 * Math.PI);
  ct.lineWidth = 1;
  ct.fill();
  ct.stroke();

  var dis = 200;
  for (var i = 0; i < 12; i++) {
    ct.fillText(
      i + 1,
      c.width / 2 + Math.cos(((30 * i - 90 + 30) * Math.PI) / 180) * dis,
      c.height / 2 + Math.sin(((30 * i - 90 + 30) * Math.PI) / 180) * dis + 10
    );
  }
}

function Clear() {
  ct.clearRect(0, 0, c.width, c.height);
}

function StartTimer() {
  const innnnn = setInterval(function () {
    s++;
    Calculate();
    ReDraw();
  }, 1000);
}

function ReDraw() {
  Clear();
  DrawClock();
  DrawSec(s * 6);
  DrawMinut(m * 6 + (6 * s) / 60);
  DrawHour(h * 30 + (30 * m) / 60);
}

function Calculate() {
  if (s >= 60) {
    s -= 60;
    m++;
  }
  if (m >= 60) {
    m -= 60;
    h++;
  }
  if (h >= 24) {
    h -= 24;
  }
}

function ChangeClock() {
  h = document.getElementById("h").value;
  m = document.getElementById("m").value;
  s = document.getElementById("s").value;
  Calculate();
  ReDraw();
}

function onInputChange(input) {
  if (parseInt(input.value) > parseInt(input.max)) {
    input.value = parseInt(input.max);
  }
}
