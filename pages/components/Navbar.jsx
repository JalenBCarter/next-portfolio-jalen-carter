import React from 'react'

export const Navbar = () => {
  return (
    <div className="fixed flex justify-center w-[100%] z-20">
      <ul className="flex items-center justify-around w-[100%] navbarWhite shadow-xl">
        <li>
          <a href="#" className="hover:text-gray-400">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-400">About</a>
        </li>
        <li>
          <a href="#portfolio" className="hover:text-gray-400">Portfolio</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;