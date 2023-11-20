// ----------------
//     CSV Writer
// ----------------

import { appendFileSync } from 'fs';

export class CSVWriter<T> {
    constructor(private columns: (keyof T)[]) {
        this.csv += columns.join(',') + '\n';
    }

    private csv: string = ''

    public save(filename: string): void {
        appendFileSync(filename, this.csv);
        this.resetCSV();
    }

    public addRows(rows: T[]): void {
        this.csv += rows.map(row => this.formatRow(row)).join('\n');
    }

    private formatRow(row: T): string {
        return this.columns.map(col => row[col]).join(',');
    }

    private resetCSV(): void {
        this.csv = '';
    }
}

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
