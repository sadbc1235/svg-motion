const btnUp = document.querySelector(".btnUp");
const btnDown = document.querySelector(".btnDown");
const panel = document.querySelector(".panel");
const panel_li = panel.querySelectorAll("li");
const li_len = panel_li.length - 1;
let enableClick = true;

const moveUp = () => {
  let current_item = panel.querySelector(".on");
  let current_index = parseInt(current_item.getAttribute("data-index"));
  let next_index = null;

  current_index !== li_len
    ? (next_index = current_index + 1)
    : (next_index = 0);
  current_item.classList.remove("on");
  current_item.classList.add("up");

  panel_li[next_index].classList.add("down");
  setTimeout(() => {
    panel_li[next_index].classList.remove("down");
    panel_li[next_index].classList.add("on");
    panel.querySelector(".up").classList.remove("up");
    enableClick = true;
  }, 500);
};

const moveDown = () => {
  let current_item = panel.querySelector(".on");
  let current_index = parseInt(current_item.getAttribute("data-index"));
  let prev_index = null;

  current_index !== 0
    ? (prev_index = current_index - 1)
    : (prev_index = li_len);
  current_item.classList.remove("on");
  current_item.classList.add("down");

  panel_li[prev_index].classList.add("up");
  setTimeout(() => {
    panel_li[prev_index].classList.remove("up");
    panel_li[prev_index].classList.add("on");
    panel.querySelector(".down").classList.remove("down");
    enableClick = true;
  }, 500);
};

btnUp.addEventListener("click", (e) => {
  e.preventDefault();

  if (enableClick) {
    enableClick = false;
    moveUp();
  }
});

btnDown.addEventListener("click", (e) => {
  e.preventDefault();

  if (enableClick) {
    enableClick = false;
    moveDown();
  }
});
