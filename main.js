const burger = document.querySelector(".header__burger");
const navigation = document.querySelector(".header__nav");

if (burger && navigation) {
  burger.addEventListener("click", () => {
    navigation.classList.toggle("header__nav--open");
  });
}
const themeSwitcher = document.querySelector(".theme-switcher");
const body = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark-theme");
}

themeSwitcher.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  const isDarkTheme = body.classList.contains("dark-theme");

  localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
});


const coffees = [
  {
    name: "S'mores Frappuccino",
    description:
      "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.",
    price: "$5.50",
    image: "assets/coffee-slider-1.png",
    alt: "S'mores Frappuccino",
  },
  {
    name: "Caramel Macchiato",
    description:
      "Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.",
    price: "$5.00",
    image: "assets/coffee-slider-2.png",
    alt: "Caramel Macchiato",
  },
  {
    name: "Ice coffee",
    description:
      "A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.",
    price: "$4.50",
    image: "assets/coffee-slider-3.png",
    alt: "Ice coffee",
  },
];

const previousButton = document.querySelector(".favorite-coffee__arrow--prev");
const nextButton = document.querySelector(".favorite-coffee__arrow--next");
const paginationButtons = document.querySelectorAll(
  ".favorite-coffee__pagination-item"
);

const coffeeImage = document.querySelector(".favorite-coffee__image");
const coffeeName = document.querySelector(".favorite-coffee__name");
const coffeeDescription = document.querySelector(
  ".favorite-coffee__description"
);
const coffeePrice = document.querySelector(".favorite-coffee__price");

let currentCoffeeIndex = 0;

function showCoffee(index) {
  const coffee = coffees[index];

  coffeeImage.src = coffee.image;
  coffeeImage.alt = coffee.alt;
  coffeeName.textContent = coffee.name;
  coffeeDescription.textContent = coffee.description;
  coffeePrice.textContent = coffee.price;

  paginationButtons.forEach((button, buttonIndex) => {
    button.classList.toggle(
      "favorite-coffee__pagination-item--active",
      buttonIndex === index
    );
  });
}

function showNextCoffee() {
  currentCoffeeIndex = (currentCoffeeIndex + 1) % coffees.length;
  showCoffee(currentCoffeeIndex);
}

function showPreviousCoffee() {
  currentCoffeeIndex =
    (currentCoffeeIndex - 1 + coffees.length) % coffees.length;
  showCoffee(currentCoffeeIndex);
}

nextButton.addEventListener("click", showNextCoffee);
previousButton.addEventListener("click", showPreviousCoffee);

paginationButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    currentCoffeeIndex = index;
    showCoffee(currentCoffeeIndex);
  });
});