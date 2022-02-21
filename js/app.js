//TOGGLE dark/light mode

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".movie,.movie-title,.navbar-container,.sidebar,.sidebar-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

//Arrows Right
const arrows = document.querySelectorAll(".arrow-r");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieList[i].querySelectorAll("img").length;
  let clickCounter = 0;

  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;

    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieList[i].style.transform = `translateX(${
        movieList[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieList[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

//Arrows Left
const arrowsLeft = document.querySelectorAll(".arrow-l");

arrowsLeft.forEach((arrow, i) => {
  const itemNumber = movieList[i].querySelectorAll("img").length;
  let clickCountLeft = 0;

  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCountLeft++;
    if (itemNumber - (4 + clickCountLeft) + (4 - ratio) <= 0) {
      movieList[i].style.transform = `translateX(${
        movieList[i].computedStyleMap().get("transform")[0].x.value + 300
      }px)`;
    } else {
      movieList[i].style.transform = "translateX(0)";
      clickCountLeft = 0;
    }
  });
});
