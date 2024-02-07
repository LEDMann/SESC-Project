'use server'

import { Book } from "@prisma/client"

export type BookProps = Book & {
    ISBN: string
    Title: string
    Author: string
    Year: number
    Copies: number
}

export default async function Book({ book }: { book: BookProps }) {
    return (
        <div className="flex flex-col border border-slate-300 dark:border-slate-800 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-xl p-2">
            <div>{book.ISBN}</div>
            <div>{book.Title}</div>
            <div>{book.Author}</div>
            <div>{book.Year}</div>
            <div>{book.Copies}</div>
        </div>
    )
}