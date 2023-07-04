/*
 * File: 4-update_grade_by_city.js
 * Author: Franklin Ikeogu
 */

/**
 * updateStudentGradeByCity - Retrieves a list of students.
 * @param {Array} studentsList - List of students
 * @param {String} city - City to use as filter
 * @param {Array} newGrade - array of objects containing updates
 * Returns: Array of students for a specific city with their new grade
 */
export default function updateStudentGradeByCity(studentsList, city, newGrade) {
    if (!Array.isArray(studentsList)) return [];
    
    return studentsList
        .filter(item => item.location === city)
        .map(student => {
            const hasGrade = newGrade.filter(item => item.studentId === student.id);
            student['grade'] = hasGrade.length ? hasGrade[0].grade : 'N/A';
            return student;
        });
}
