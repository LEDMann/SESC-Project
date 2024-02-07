'use client'

import { Combobox, Popover, Tab } from "@headlessui/react";
import { Button } from "./button";
import { Book } from "lucide-react";


export function BookmanagePopover() {
    return (
        <Popover className="relative">
            <Popover.Button>
                <Button data-popover-target="popover-take-return-book" data-popover-trigger="click" background="gradient" size="icon">
                    <Book className="text-slate-200 dark:text-slate-900 z-10"/>
                </Button>
            </Popover.Button>

            <Popover.Panel className="absolute z-10 -left-44 top-12">
                <div className="bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg w-96 h-48">
                    <Tab.Group defaultIndex={0}>
                        <div className="flex flex-col w-full h-full">
                            <Tab.List className="flex gap-2 m-2">
                                <Tab>
                                    <button className="flex-auto relative before:transition-opacity before:duration-300 before:absolute py-1 bg-gradient-to-br from-cyan-500 to-violet-600 before:rounded-xl before:inset-0 z-0 before:z-10 before:opacity-0 before:hover:opacity-100 before:bg-gradient-to-tl before:from-cyan-500 before:to-violet-600 text-slate-200 rounded-xl" >
                                            <span className="relative z-20">Borrow Book</span>
                                        </button>
                                </Tab>
                                <Tab>
                                    <button className="flex-auto relative before:transition-opacity before:duration-300 before:absolute py-1 bg-gradient-to-bl from-cyan-500 to-violet-600 before:rounded-xl before:inset-0 z-0 before:z-10 before:opacity-0 before:hover:opacity-100 before:bg-gradient-to-tr before:from-cyan-500 before:to-violet-600 text-slate-200 rounded-xl" >
                                            <span className="relative z-20">Return Book</span>
                                        </button>
                                </Tab>
                            </Tab.List>
                            <Tab.Panels className="h-full bg-slate-100 dark:bg-slate-700 rounded-b-lg border-t border-slate-300 dark:border-slate-700">
                                <Tab.Panel className="flex flex-col justify-evenly h-full px-16 p-1">
                                    <Combobox>
                                        <Combobox.Input placeholder="ISBN" className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-xl focus-visible:outline-none focus:border-slate-400 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:border-slate-500" />
                                    </Combobox>
                                    <button className="w-max mx-auto px-4 py-1 bg-slate-300 rounded-lg">Borrow Book</button>
                                </Tab.Panel>
                                <Tab.Panel className="flex flex-col justify-evenly h-full px-16 p-1">
                                    <Combobox>
                                        <Combobox.Input placeholder="ISBN" className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-xl focus-visible:outline-none focus:border-slate-400 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:border-slate-500" />
                                    </Combobox>
                                    <button className="w-max mx-auto px-4 py-1 bg-slate-300 rounded-lg">Return Book</button>
                                </Tab.Panel>
                            </Tab.Panels>
                        </div>
                    </Tab.Group>
                </div>
            </Popover.Panel>
        </Popover>
    )
}