var main = document.getElementById("cont");
var num = 30;
var distance = 20;
var w = 30;
for (var i = 0; i < num; i++) {
  var item = document.createElement("div");
  item.className = "circle";
  if (i == 0) {
    item.classList.add("active");
  }
  item.innerHTML = i + 1;
  item.style.width = w + "px";
  item.style.height = w + "px";
  item.style.fontSize = w / 2 + "px";
  // item.style.backgroundImage =
  // "linear-gradient(absolute, rgba(255, 0, 0, 1), rgb(0, 0, 255, 1) " +
  // ((num - i) / num) * 100 +
  // "%)";
  console.log(((num - i) / num) * 100);
  main.appendChild(item);
}

main.style.width = num * w + (num - 1) * distance + "px";

const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  if (circles[currentActive - 1].classList.contains("active")) {
    circles[currentActive].classList.remove("active");
  } else {
    circles[currentActive - 1].classList.add("active");
  }
  Check();
}

function Check() {
  var actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
