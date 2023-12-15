var left = 0;
var right = 0;
var rightDiv = document.getElementById("right");
var leftDiv = document.getElementById("left");

var vs = document.getElementById("vs");

document.addEventListener("keydown", (event) => {
    switch(event.key){
        case "d":
            LeftClick();
            break;
        case "a":
            RigthClick();
            break;
    }
})

function Refresh() {
  vs.style.left = (50 + left - right).toString() + "%";
  leftDiv.style.width = (50 + left - right).toString() + "%";
  rightDiv.style.width = (50 - left + right).toString() + "%";
  leftDiv.firstChild.innerHTML = left;
  rightDiv.firstChild.innerHTML = right;
}

function LeftClick(){
    left++;
    Refresh();
}
function RigthClick(){
    right++;
    Refresh();
}

Refresh();
