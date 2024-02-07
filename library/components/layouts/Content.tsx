'use client'

// import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { BookList } from "../elements/BookList";
// import { available_books, account_books } from "../tempdata/books";


export async function Content() {
    return (
        <div className="h-96 overflow-y-scroll mx-16 p-2 border rounded-lg border-slate-300 dark:border-slate-800">
            <BookList />
            <span className="h-2 p-2 m-2"/>
        </div>
    )
}