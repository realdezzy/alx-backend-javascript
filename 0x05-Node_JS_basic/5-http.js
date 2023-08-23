#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
// const countStudents = require('./3-read_file_async');

const host = 'localhost';
const port = 1245;
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

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  switch (req.url) {
    case '/students':
      res.writeHead(200);
      res.write('This is the list of our students\n');
      await countStudents(databaseName, res);
      break;
    default:
      res.writeHead(200);
      res.end('Hello Holberton School!\n');
  }
});
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

module.exports = app;
