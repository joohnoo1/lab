var hour = document.getElementById("clock");
var minut = document.getElementById("minut");

var m = 0;
var h = 0;

var numClock = document.getElementById("nC");

var number = document.getElementById("number");
for (var i = 0; i < 12; i++) {
  var item = document.createElement("div");
  var num = document.createElement("p");
  item.className = "number";
  num.className = "num";
  num.innerHTML = i + 1;
  //   num.style.rotate = -(i + 1) * 30 + "deg";
  item.appendChild(num);
  item.style.rotate = (i + 1) * 30 + "deg";
  number.appendChild(item);
}
var count = 1;
for (var i = 0; i < 60; i++) {
  if (count % 5 != 0) {
    var item = document.createElement("div");
    var num = document.createElement("p");
    item.className = "number";
    num.className = "line";
    num.innerHTML = "</br>`";
    // num.style.rotate = -(i + 1) * 6 + "deg";
    item.appendChild(num);
    item.style.rotate = (i + 1) * 6 + "deg";
    number.appendChild(item);
  }
  count++;
}

function StartTimer() {
  const innnnn = setInterval(function () {
    m++;
    if (m >= 60) {
      m -= 60;
      h++;
    }
    Rotate();
    Clock();
  }, 1000);
}
function Rotate() {
  console.log(m * 6);
  minut.style.rotate = m * 6 + "deg";
  let a = h * 30;
  a += (30 * m) / 60;
  hour.style.rotate = a + "deg";
}

function Clock() {
  if (h >= 24) {
    h -= 24;
  }
  numClock.innerHTML = (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m;
}

function Reset() {
  m = 0;
  h = 0;
  Rotate();
  Clock();
}

StartTimer();
