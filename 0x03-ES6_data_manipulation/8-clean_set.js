/*
 * File: 8-clean_set.js
 * Author: Franklin Ikeogu
 */

/**
 * cleanSet - Returns a formatted string of members of the
 * set that start with a specific string.
 * @param {Set} set - A set of strings
 * @param {String} startString - The start string
 * @returns {String} - String of all the set values that start with a specific string.
 */
export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  let returnString = '';
  const len = startString.length;
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      if (returnString.length === 0) {
        returnString += value.substring(len);
      } else {
        returnString += `-${value.substring(len)}`;
      }
    }
  });

  return returnString;
}
