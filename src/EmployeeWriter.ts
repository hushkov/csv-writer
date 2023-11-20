import { CSVWriter } from "./index";

interface Employee {
    id: number
    name: string
    role: string
    salary: number
}

const employeeWriter = new CSVWriter<Employee>(['id', 'name', 'role', 'salary'])

employeeWriter.addRows([
    { id: 1, name: 'Wednesday', role: 'Designer', salary: 333000 },
    { id: 2, name: 'Gomez', role: 'CEO', salary: 1000000 },
    { id: 3, name: 'Morticia', role: 'Creative Director', salary: 666999 },
])

employeeWriter.save('./data/employee.csv')
