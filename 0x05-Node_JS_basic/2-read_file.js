#!/usr/bin/env node
const fs = require('fs');

function countStudents (path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);
    const fields = students.map(student => student.split(',')[3]);
    const uniqueFields = [...new Set(fields)];

    uniqueFields.forEach(element => {
      const fieldList = students.map(data => {
        const studentData = data.split(',');
        if (studentData[3] === element) {
          return studentData[0];
        } else {
          return null; // Use null instead of undefined
        }
      }).filter(item => item !== null); // Filter out null values
      console.log(`Number of students in ${element}: ${fieldList.length}. List: ${fieldList.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database'); // Throw a new Error object
  }
}

module.exports = countStudents;
