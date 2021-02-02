// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
   //return a new driver  that has updated key and values passed in
   const newDriver = {...driver};
    newDriver[key] = value;
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key]= value;
    return driver
}

// function deleteFromDriverByKey(driver, key) {
//     const newDriver = {...driver};
//     delete newDriver[key];
//     return newDriver
// }

unction deleteFromDriverByKey(driver, key) {
    const newDriver = Object.assign({}, obj);
    delete newDriver[key];
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver
}