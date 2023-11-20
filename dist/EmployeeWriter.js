"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const employeeWriter = new index_1.CSVWriter(['id', 'name', 'role', 'salary']);
employeeWriter.addRows([
    { id: 1, name: 'Wednesday', role: 'Designer', salary: 333000 },
    { id: 2, name: 'Gomez', role: 'CEO', salary: 1000000 },
    { id: 3, name: 'Morticia', role: 'Creative Director', salary: 666999 },
]);
employeeWriter.save('./data/employee.csv');
