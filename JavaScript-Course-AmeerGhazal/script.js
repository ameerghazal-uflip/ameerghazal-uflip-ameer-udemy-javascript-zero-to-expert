'use strict';

const country = {
  name: 'United States',
  borderCountries: 2,
  printDescription: function () {
    const isIsland = () => {
      if (this.borderCountries != 0) {
        //Why is this.borderCountries undefinded
        return false;
      } else {
        return true;
      }
    };

    console.log(`${this.name} is an island ${isIsland()}`);
  },
};

country.printDescription();
