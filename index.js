var color = ["#d224ff", "#FFFFFF"];
var i = 0;
document.querySelector("button").addEventListener("click", function () {
  i = i < color.length ? ++i : 0;
  document.querySelector(".container").style.background = color[i];
});
