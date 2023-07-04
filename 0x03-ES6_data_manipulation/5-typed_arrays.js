/*
 * File: 5-typed_arrays.js
 * Author: Franklin Ikeogu
 */

/**
 * createInt8TypedArray - Returns an arraybuffer.
 * length (Number), position (Number), and value (Number).
 * @param {Number} length - length of the array
 * @param {Number} position - position
 * @param {Number} value - value to be added
 * @returns {ArrayBuffer} - an ArrayBuffer with an Int8 value at a specific position
 */
export default function createInt8TypedArray(length, position, value) {
    // Uint8 wraps around when value is > 225, 127 for int8

    if (position > length) return "Position outside range";

    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer)
    view.setUint8(position, value);
    
    return view;
}
