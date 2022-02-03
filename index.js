// Code your solution in this file!

const returnFirstTwoDrivers = function (array) {
    return array.slice(0, 2)
}

const returnLastTwoDrivers = function (array) {
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (int) {
    return function (fare) {
        return fare * int
    }
}

const fareDoubler = createFareMultiplier(2);

function fareTripler(num) {
    return num * 3
}

const selectDifferentDrivers = function (arrayOfDrivers, func) {
    return func(arrayOfDrivers)
}