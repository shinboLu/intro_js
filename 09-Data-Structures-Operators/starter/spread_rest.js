'USE STRICT';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  },
  openingHours: {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({
    starterIdx = 1,
    mainIdx = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIdx]} and ${this.mainMenu[mainIdx]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

const arr = [7, 8, 9];
const newarr = [1, 2, 3, ...arr];
console.log(newarr);

console.log(...newarr);

const newMenu = [...restaurant.mainMenu, 'fried eggs'];
console.log(newMenu);

// copy arr
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// spread works for iterables: arrays, strings, maps, sets. NOT Objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

console.log(...str);
console.log('j', 'o');

// use case
// const ingredients = [
//   prompt("let's make pasta! Ing1?"),
//   prompt('Ing2?'),
//   prompt('ing3?'),
// ];

// restaurant.orderPasta(...ingredients);

// spread & objects
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: 'John',
};

console.log(newRestaurant);

/*
rest operation on left, spread on right
*/
const restArr = [1, 2, 3, ...[4, 5]];
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, ...otherFood);

// functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
};

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
