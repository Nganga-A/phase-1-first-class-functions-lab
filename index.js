// Code your solution in this file
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers (drivers){
   const newArray = drivers.slice(0,2);
   return newArray;
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const fareMultiplier = createFareMultiplier(2);
function createFareMultiplier(multiplier){
    return function (x){
        return x * multiplier;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driverSelector) {
    return driverSelector(drivers);
  }
