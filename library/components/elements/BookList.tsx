'use server'

import { PrismaClient } from "@prisma/client"
import Book from "../props/Book"

export async function BookList() {
    const prisma = new PrismaClient()
    const available_books_prisma = await prisma.book.findMany()
    await prisma.$disconnect
    return (
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-stretch p-1 h-100">
            {available_books_prisma.map((book) => (
                <Book book={ book } />
            ))}
        </div>
    )
}