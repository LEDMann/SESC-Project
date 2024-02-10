'use server'

import { prisma } from "@/app/lib/prisma";
import Book from "@/components/props/Book";

export default async function Page() {
    const books = await prisma.book.findMany()
    return (
        <div className="mx-auto w-2/3 h-[48rem] border border-slate-300 dark:border-slate-900 p-4 rounded-lg grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 overflow-x-hidden">
            {books.map(book => (
                <Book book={ book } />
            ))}
        </div>
    );
  }