/*
 * File: 2-get_students_by_loc.js
 * Author: Franklin Ikeogu
 */

/**
 * getStudentsByLocation - Retrieves Array of objects who are located in a specific city
 * @param {Array} studentList - Array of student objects
 * @param {String} city - The city to filter for
 * Return: Array of objects who are located in a specific city.
 */
export default function getStudentsByLocation(studentList, city) {
    if(!Array.isArray(studentList)) return [];
    return studentList.filter(item => item.location === city);
}