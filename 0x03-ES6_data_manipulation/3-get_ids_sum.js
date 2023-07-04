/*
 * File: 3-get_ids_sum.js
 * Author: Franklin Ikeogu
 */

/**
 * getStudentIdsSum - Retrieves the sum of student ids.
 * @param {Array} studentList - The list of students
 * @returns {Number} - the sum of 3 ids.
 */
export default function getStudentIdsSum(studentList) {
    if (!Array.isArray(studentList)) return 0;
    return studentList.reduce( (sum, student) => sum + student.id, 0 );
}
