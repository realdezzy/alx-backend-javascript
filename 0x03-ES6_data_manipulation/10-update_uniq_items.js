/*
 * File: 10-update_uniq_items.js
 * Author: Franklin Ikeogu
 */

/**
 * updateUniqueItems - Returns an updated map
 * for all items with initial quantity at 1.
 * @param {Map} map - The map to update
 * @returns {Map} - Map with values.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) { throw new Error('Cannot process'); }

  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
