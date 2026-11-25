const findTheOldest = function(people) {
  // let currentOldest = people[0];
  // let currentOldestAge = people[0].yearOfDeath - people[0].yearOfBirth;
  // for (let i = 1; i < people.length; i++) {
  //   let person = people[i];
  //   let personAge = person.yearOfDeath - person.yearOfBirth;
  //   if (personAge > currentOldestAge) {
  //     currentOldest = person;
  //     currentOldestAge = personAge
  //   }
  // }
  // return currentOldest;

  //OR

  return (
    people.reduce((oldest, person) => {
    const oldestAge = getAge(oldest);
    const personAge = getAge(person);
    return personAge > oldestAge ? person : oldest;
  }, people[0])
  )
};

const getAge = function(person) {
  if(!Object.hasOwn(person, "yearOfDeath")) {
    let currentYear = new Date().getFullYear();
    return currentYear - person.yearOfBirth;
  }
  return person.yearOfDeath - person.yearOfBirth
}

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

console.log(findTheOldest(people))
// Do not edit below this line
module.exports = findTheOldest;
