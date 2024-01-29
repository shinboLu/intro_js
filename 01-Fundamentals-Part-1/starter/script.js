const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function (this) {
    return this.mass / (this.height * this.height);
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    return this.mass / (this.height * this.height);
  },
};

if (john.calcBMI > mark.calcBMI) {
  console.log(
    `${john.fullName}'s BMI (${john.calcBMI}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`
  );
} else {
  console.log(
    `${mark.fullName}'s BMI (${mark.calcBMI}) is higher than ${john.fullName}'s (${john.calcBMI()})!`
  );
}

console.log(john.calcBMI)