/*
 * File: 0-get_list_students.js
 * Author: Franklin Ikeogu
 */

/**
 * hasValuesFromArray - Retrieves a list of students.
 * @param {Set} baseSet- A set to check for values
 * @param {Array} arrayToCheck - check if set contains array
 * Return: An array of 3 objects.
 */
export default function hasValuesFromArray(baseSet, arrayToCheck) {
    const checkedArray = arrayToCheck.filter(item => baseSet.has(item));
    return checkedArray.length === arrayToCheck.length;
}