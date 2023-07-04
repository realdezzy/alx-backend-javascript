/*
 * File: 7-has_array_values.js
 * Author: Franklin Ikeogu
 */

/**
 * hasValuesFromArray - checks for array match in set
 * @param {Set} baseSet- A set to check for values
 * @param {Array} arrayToCheck - check if set contains array
 * @returns {Array} - An array of 3 objects.
 */
export default function hasValuesFromArray(baseSet, arrayToCheck) {
    const checkedArray = arrayToCheck.filter(item => baseSet.has(item));
    return checkedArray.length === arrayToCheck.length;
}