import React from 'react'

const Header = () => {
    return (
        <header className="text-gray-600 body-font w-full lg:px-64 px-24 border-b">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between ">
                <a className="flex title-font font-medium items-center text-gray-900">
                    <span className="ml-3 text-xl">plazza</span>
                </a>
                <button className="md:inline-flex hidden items-center bg-black rounded-xl border-0 py-1 px-2 focus:outline-none text-sm mt-4 md:mt-0 text-slate-100">Try it free*
                </button>
            </div>
        </header>
    )
}

export default Header