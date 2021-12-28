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
// const arrowsLeft = document.querySelectorAll(".arrow-l");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, index) => {
  const itemNumber = movieList[index].querySelectorAll("img").length;
  let clickCounter = 0;

  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;

    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

//Arrows Left
