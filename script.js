function ColorChange() {
  const Hex = "0123456789ABCDEF";
  let CH = "#";
  for (let i = 0; i < 6; i++) {
    CH += Hex[Rand()];
  }
  function Rand() {
    return Math.floor(Math.random() * 16);
  }
  return CH;
}
let set;
let body = document.querySelector("#body");
document.getElementById("Stop").addEventListener("click", () => {
  clearInterval(set);
  set = null;
});

document.getElementById("Start").addEventListener("click", () => {
  function START() {
    body.style.backgroundColor = ColorChange();
  }

  if (!set) {
    //to prevent multiple call which increaces the speed of the color change.
    set = setInterval(START, 1500);
  }
});
