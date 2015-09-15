(function() {

  'use strict';

  var boroughs,
      sumOfPopulation = 0,
      sumOfLandAreaInSm = 0,
      i;

  // represents a structure in a way...
  function Borough(name, county, population, landAreaSm) {
    this.name = name;
    this.county = county;
    this.population = population,
    this.landAreaSm = landAreaSm
  };

  var manhattan = new Borough("Manhattan", "New York", 1619090, 23),
      theBronx = new Borough("The Bronx", "Bronx", 1408473, 42),
      brooklyn = new Borough("Brooklyn", "Kings", 2565635, 71),
      queens = new Borough("Queens", "Queens", 2272771, 109),
      statenIsland = new Borough("Staten Island", "Richmond", 470728, 58)

  boroughs = [
    manhattan,
    theBronx,
    brooklyn,
    queens,
    statenIsland
  ];

  for (i = 0; i < 5; i++) {
    console.log("The borough of " + boroughs[i].name +
                " is in the county of " + boroughs[i].county +
                " and has a population of " + boroughs[i].population +
                " people " + "and a land area of " + boroughs[i].landAreaSm + " square miles.");
    sumOfPopulation += boroughs[i].population;
    sumOfLandAreaInSm += boroughs[i].landAreaSm;
  }

  console.log("The City of New York consists of these five boroughs and has a total population of " + sumOfPopulation +
              " people and a total square area of " + sumOfLandAreaInSm + " square miles.");

}());
