const burger = document.querySelector(".header__burger");
const navigation = document.querySelector(".header__nav");

if (burger && navigation) {
  burger.addEventListener("click", () => {
    navigation.classList.toggle("header__nav--open");
  });
}