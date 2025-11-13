const findTheOldest = function (people) {
  let oldestPerson = people.filter((people) => people.yearOfDeath != null).reduce((oldest, current) => {
    if (oldest.yearOfDeath == undefined && oldest.yearOfBirth > current.yearOfBirth) {
      return current
    }

    const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    const currentAge = current.yearOfDeath - current.yearOfBirth;
    return (currentAge > oldestAge ? current : oldest);
  }, people[0]);

  return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
