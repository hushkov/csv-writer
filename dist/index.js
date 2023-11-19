"use strict";
// ----------------
//     CSV Writer
// ----------------
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = '';
        this.csv += columns.join(',') + '\n';
    }
    save(filename) {
        console.log(this.csv);
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.resetCSV();
    }
    addRows(rows) {
        this.csv += rows.map(row => this.formatRow(row)).join('\n');
    }
    formatRow(row) {
        return this.columns.map(col => row[col]).join(',');
    }
    resetCSV() {
        this.csv = '';
    }
}
const writer = new CSVWriter(['id', 'amount', 'to', 'notes']);
writer.addRows([
    { id: 1, amount: 50, to: 'alex', notes: 'for design work' },
    { id: 2, amount: 75, to: 'yuri', notes: 'for web dev work' },
    { id: 3, amount: 100, to: 'alina', notes: 'for smm work' },
]);
writer.save('../data/payments.csv');
// ----------------
// Generic Interfaces
// ----------------
//
// interface Collection<T> {
//     data: T[]
//     name: string
// }
//
// const collectionOne: Collection<string> = {
//     data: ['wednesday', 'fester', 'pugsley', 'gomez', 'morticia'],
//     name: 'addams family'
// }
//
// const collectionTwo: Collection<number> = {
//     data: [3, 6, 9, 12, 17, 33, 69, 96],
//     name: 'lucky numbers'
// }
//
// const getRandomCollectionItem = <T>(colleciton: Collection<T>): T => {
//     const index = Math.floor(Math.random() * colleciton.data.length)
//
//     return colleciton.data[index]
// }
//
// const itemOne = getRandomCollectionItem<string>(collectionOne);
// const itemTwo = getRandomCollectionItem(collectionTwo);
//
// console.log({ itemOne, itemTwo })
