import { useState } from "react"

export default function Navbar() {
  return (
    <nav className="bg-white border-b w-full md:static md:text-sm md:border-none">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <h1 className="text-[24px] font-bold">Let's KEISAN</h1>
        </div>
        <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 hidden`}>
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
              <li>
                <a
                  href="javascript:void(0)"
                  className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none"
                >
                  Log in
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
                >
                  Sign in
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}
