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

// second way using Object.assign({initialObject, addObject, addObject})

function deleteFromDriverByKey(driver, key) {
    const newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver
}