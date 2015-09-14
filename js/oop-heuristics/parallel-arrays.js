(function() {

  var borough,
      county,
      population,
      landAreaSm,
      sumOfPopulation,
      sumOfLandAreaInSm,
      i;

  borough = ["Manhattan", "The Bronx", "Brooklyn", "Queens", "Staten Island"];
  county = ["New York", "Bronx", "Kings", "Queens", "Richmond"];
  population = [1619090, 1408473, 2565635, 2272771, 470728];
  landAreaSm = [23, 42, 71, 109, 58];

  sumOfPopulation = 0;
  sumOfLandAreaInSm = 0;

  for (i = 0; i < 5; i++) {
    console.log("The borough of " + borough[i] +
                " is in the county of " + county[i] +
                " and has a population of " + population[i] +
                " people " + "and a land area of " + landAreaSm[i] + " square miles.");
    sumOfPopulation += population[i];
    sumOfLandAreaInSm += landAreaSm[i];
  }

  console.log("The City of New York consists of these five boroughs and has a total population of " + sumOfPopulation +
              " people and a total square area of " + sumOfLandAreaInSm + " square miles.");

}());
