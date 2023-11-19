// ----------------
//     CSV Writer
// ----------------

import { appendFileSync } from 'fs';

interface Payment {
    id: number
    amount: number
    to: string
    notes: string
}

type CsvColumns = ('id' | 'amount' | 'to' | 'notes')[]

class CSVWriter {
    constructor(private columns: CsvColumns) {
        this.csv += columns.join(',') + '\n';
    }

    private csv: string = ''

    public save(filename: string): void {
        console.log(this.csv)
        appendFileSync(filename, this.csv);
        this.resetCSV();
    }

    public addRows(rows: Payment[]): void {
        this.csv += rows.map(row => this.formatRow(row)).join('\n');
    }

    private formatRow(row: Payment): string {
        return this.columns.map(col => row[col]).join(',');
    }

    private resetCSV(): void {
        this.csv = '';
    }
}

const writer = new CSVWriter(['id', 'amount', 'to', 'notes'])

writer.addRows([
    { id: 1, amount: 50, to: 'alex', notes: 'for design work' },
    { id: 2, amount: 75, to: 'yuri', notes: 'for web dev work' },
    { id: 3, amount: 100, to: 'alina', notes: 'for smm work' },
])

writer.save('../data/payments.csv')

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
