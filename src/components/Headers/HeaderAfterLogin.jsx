import React from 'react'
import { Link } from 'react-router-dom'

function HeaderAfterLogin() {
    return (
        <header className='black-theme p-6 w-full xl:block z-10'>
            <nav className='grid grid-cols-2 mx-auto container'>

                <h1 className='font-bold text-white hover:text-slate-200'>
                    <Link to={'/'}>Blog</Link>
                </h1>
                <ul className='flex list-none gap-5 justify-end text-white'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>)
}

export default HeaderAfterLogin