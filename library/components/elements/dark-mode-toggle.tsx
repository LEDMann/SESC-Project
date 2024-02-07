'use client'

// import React from "react";

export function Dark_Mode_Toggle() {
    let switchToggle = document.querySelector('#switch-toggle');
    let isDarkmode = false

    const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>`

    const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>`

    function toggleTheme (){
        isDarkmode = !isDarkmode
        // localStorage.setItem('isDarkmode', isDarkmode)
        switchTheme()
    }

    console.log(switchToggle)

    function switchTheme (){
        if (switchToggle == null) {
            switchToggle = document.querySelector('#switch-toggle');
        }
        if (isDarkmode && switchToggle != null) {
            document.documentElement.classList.add('dark')
            switchToggle.classList.remove('bg-yellow-400')
            switchToggle.classList.add('bg-gray-700','translate-x-full')
            setTimeout(() => { switchToggle!.innerHTML = darkIcon }, 250);
        } else if (switchToggle != null) {
            document.documentElement.classList.remove('dark')
            switchToggle.classList.add('bg-yellow-400')
            switchToggle.classList.remove('bg-gray-700','translate-x-full')
            setTimeout(() => { switchToggle!.innerHTML = lightIcon }, 250);
        }
    }

    switchTheme()

    return (
        <button className="w-14 h-8 rounded-full bg-slate-200 items-center transition duration-300 focus:outline-none border pr-1 px-0.5 border-slate-300 dark:bg-slate-800 dark:border-slate-700" onClick={(toggleTheme)}>
            <div id="switch-toggle" className="w-6 h-6 relative rounded-full transition duration-500 transform bg-yellow-400 p-0.5 text-white dark:text-slate-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            </div>
        </button>
    )
}