/*
 * File: 100-weak.js
 * Author: Franklin Ikeogu
 */

/**
 * A weak map of endpoints and the number of calls made.
 */
export const weakMap = new WeakMap();

/**
  * The maximum number of calls for an endpoint.
  */
const MAX_ENDPOINTS = 5;

/**
 * queryApi - tracks endpoint call count
 * @param {Object} endpoint- the api endpoint object
 * @returns {undefined} - undefined
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINTS) {
    throw new Error('Endpoint load is high');
  }
}
