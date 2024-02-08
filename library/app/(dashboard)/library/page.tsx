'use server'

import Book from "@/components/props/Book";
import { PrismaClient } from "@prisma/client";

export default async function Page() {

    const prisma = new PrismaClient()

    const books = await prisma.book.findMany()

    return (
        <div className="mx-auto w-2/3 h-[48rem] border border-slate-300 dark:border-slate-900 p-4 rounded-lg grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 overflow-x-hidden">
            {books.map(book => (
                <Book book={ book } />
            ))}
        </div>
    );
  }