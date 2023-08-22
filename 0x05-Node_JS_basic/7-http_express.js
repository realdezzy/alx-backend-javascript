#!/usr/bin/env node
const express = require('express');
const fs = require('fs');

const app = express();
const databaseName = process.argv[2] || './database.csv';

function countStudents (path, res) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);

      res.write(`Number of students: ${students.length}\n`);
      const fields = students.map((student) => student.split(',')[3]);
      const uniqueFields = [...new Set(fields)];
      const fieldObj = {};

      uniqueFields.forEach((element) => {
        const fieldList = students.map((data) => {
          const studentData = data.split(',');
          if (studentData[3] === element) {
            return studentData[0];
          }
          return null;
        }).filter((item) => item !== null);
        fieldObj[element] = fieldList;
        res.write(`Number of students in ${element}: ${fieldList.length}. List: ${fieldList.join(', ')}\n`);
      });
      res.end();
    });
    resolve();
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.get('/students', async (req, res) => {
  try {
    res.write('This is the list of our students\n');
    await countStudents(databaseName, res);
  } catch (error) {
    console.error(error);
  }
});

app.listen(1245);

module.exports = app;
