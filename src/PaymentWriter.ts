import { CSVWriter } from "./index";

interface Payment {
    id: number
    amount: number
    to: string
    notes: string
}

const paymentWriter = new CSVWriter<Payment>(['id', 'amount', 'to', 'notes'])

paymentWriter.addRows([
    { id: 1, amount: 50, to: 'alex', notes: 'for design work' },
    { id: 2, amount: 75, to: 'yuri', notes: 'for web dev work' },
    { id: 3, amount: 100, to: 'alina', notes: 'for smm work' },
])

paymentWriter.save('./data/payments.csv')

paymentWriter.save('./data/payments.csv')
