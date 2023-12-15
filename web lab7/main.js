const panel = document.querySelectorAll(".panel");
console.log(panel);
panel.forEach((i) => {
  i.addEventListener("click", () => {
    Remove(i.id);
    i.classList.add("active");
  });
});

function Remove(num) {
  panel.forEach((i) => {
    if (num == i.id) {
      i.classList.remove("active");
    }
  });
}
