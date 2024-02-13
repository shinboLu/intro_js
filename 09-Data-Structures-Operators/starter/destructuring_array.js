const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  },
};

const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [a, b, c] = arr;
//console.log(a, b, c);

const [main, , secondary] = restaurant.categories;
//console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
//console.log(starter, mainCourse);

// nested array
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
//console.log(i, j, k);
