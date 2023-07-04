/*
 * File: 1-get_list_student_ids.js
 * Author: Franklin Ikeogu
 */

/**
 * getListStudentIds - Retrieves ids of students.
 * @param {array}  students - An array of objects 
 * @returns {Array} - Array of ids from a list of object
 */
export default function getListStudentIds(students) {
    if(!Array.isArray(students)) return [];
    return students.map( item => item.id );
}