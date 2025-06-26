import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="h-20 bg-gray-800 text-white flex justify-between items-center px-4">
      <div className='Logo font-bold text-lg'>Bitlinks</div>
      <ul className="flex space-x-10">
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact Us</li></Link>
        <li className='flex space-x-4'>
        <Link href="/shorten"><button className='bg-gray-700 hover:bg-gray-600 text-white py-1 px-4 rounded font-bold'>Try now</button></Link>
        <Link href="/github"><button className='bg-gray-700 hover:bg-gray-600 text-white py-1 px-4 rounded font-bold'>Github</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
