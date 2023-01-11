var color = ["#d224ff", "#FFFFFF"];
var i = 0;
document.querySelector(".btn-color").addEventListener("click", function () {
  i = i < color.length ? +i : 0;
  document.querySelector(".container").style.background = color[i];
});
