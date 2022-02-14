let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

const increment = () => {
  count += 1;
  countEl.textContent = count;
};

const save = () => {
  let countDash = count + " - ";
  saveEl.textContent += countDash;
  countEl.textContent = 0;
  count = 0;
};
