/*
 * File: 0-get_list_students.js
 * Author: Franklin Ikeogu
 */

/**
 * cleanSet - Returns a formated string of members of the
 * set that starts with a specific string.
 * @param {Set} set - A set of strings
 * @param {String} startString - The start string
 * Returns: String of all the set values that start with a specific string.
 */
export default function cleanSet(set, startString) {

    if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
        return '';
    }
    let returnString = '';
    let len = startString.length;
    set.forEach( (value, key, set) => {
        if (value.startsWith(startString)) {
            if (returnString.length === 0)
                returnString += value.substring(len);
            else {
                returnString += `-${value.substring(len)}`
            }
        }
    })

    return returnString
}