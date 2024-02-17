const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Pizza',
  owner: 'Giovanni Rossi',
};

//rest2.numGuests = rest1.numGuests || 10;

// OR assignment
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// logical AND assignment
rest1.owner = rest1.owner && '<Anonymous>';
rest2.owner = rest2.owner && '<Anonymous>';

rest1.owner &&= '<Anonymous>';
rest2.owner &&= '<Anonymous>';

console.log(rest1);
console.log(rest2);
