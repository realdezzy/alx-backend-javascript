/*
 * File: 5-typed_arrays.js
 * Author: Franklin Ikeogu
 */

/**
 * createInt8TypedArray - Retrieves a list of students.
 * length (Number), position (Number), and value (Number).
 * @param {Number} length - length of the array
 * @param {Number} position - position
 * @param {Number} value - value to be added
 * Returns: an ArrayBuffer with an Int8 value at a specific position
 */
export default function createInt8TypedArray(length, position, value) {
    // it wraps around to 0 when value is > 225 

    if (position > length) return "Position outside range";

    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer)
    view.setUint8(position, value);
    
    return view;
}