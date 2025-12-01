let c = 0,
  ci = 0,
  cd = 0;

const count = document.getElementById("count");
const incCount = document.getElementById("incCount");
const decCount = document.getElementById("decCount");
const incButton = document.getElementById("incBtn");
const decButton = document.getElementById("decBtn");
const resetButton = document.getElementById("resetBtn");
const themeBtn = document.getElementById("themeBtn");

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  themeBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeBtn.textContent = "Light Mode";
}

function inc() {
  c++;
  ci = ci >= 999 ? 0 : ci + 1;
  update();
}
function dec() {
  c = c > 0 ? c - 1 : 0;
  cd = cd >= 999 ? 0 : cd + 1;
  update();
}
function reset() {
  c = 0;
  ci = 0;
  cd = 0;
  update();
}

function update() {
  count.textContent = c;
  incCount.textContent = ci;
  decCount.textContent = cd;

  count.classList.remove("animate");
  void count.offsetWidth;
  count.classList.add("animate");
}

incButton.addEventListener("click", inc);
decButton.addEventListener("click", dec);
resetButton.addEventListener("click", reset);
themeBtn.addEventListener("click", toggleTheme);

document.addEventListener("keydown", (e) => {
  if (e.key === " " || e.key === "Enter") {
    e.preventDefault();
    inc();
  } else if (e.key === "-" || e.key === "ArrowDown") {
    dec();
  } else if (e.key === "r" || e.key === "R") {
    reset();
  }
});
