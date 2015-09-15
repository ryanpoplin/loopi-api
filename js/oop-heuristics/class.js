(function() {

  'use strict';

  // no magic strings...
  var landAreaSkArguments = {
    one: 58998811,
    two: 0.5
  };

  // class like feature in JS...
  var Borough = function(name, county, population, landAreaSm) {
    this.name = name;
    this.county = county;
    this.population = population,
    this.landAreaSm = landAreaSm
    this.calculateLandAreaSk = function() {
      return landAreaSkArguments.one * landAreaSm + landAreaSkArguments.two;
    }
  };

  var boroughs = [
    new Borough("Manhattan", "New York", 1619090, 23),
    new Borough("The Bronx", "Bronx", 1408473, 42),
    new Borough("Brooklyn", "Kings", 2565635, 71),
    new Borough("Queens", "Queens", 2272771, 109),
    new Borough("Staten Island", "Richmond", 470728, 58)
  ];

  // this is a very ugly part about JS, templates to the rescue?
  for (i = 0; i < 5; i++) {
    console.log("The borough of " + boroughs[i].name +
                " is in the county of " + boroughs[i].county +
                " and has a population of " + boroughs[i].population +
                " people " + "and a land area of " + boroughs[i].landAreaSm + " square miles." +
                " Also, this borough has a land area of " + calculateLandAreaSk(boroughs[i]) + " square kilometers." );
    sumOfPopulation += boroughs[i].population;
    sumOfLandAreaInSm += boroughs[i].landAreaSm;
  }

  console.log("The City of New York consists of these five boroughs and has a total population of " + sumOfPopulation +
              " people and a total square area of " + sumOfLandAreaInSm + " square miles.");

}());
