import React from 'react'
import '../../style.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='black-theme p-6 w-full xl:block fixed top-0 z-10 border-nav'>
            <nav className='grid grid-cols-2 mx-auto container'>
                <h1 className='font-bold text-white'>PoliBlog</h1>
                <ul className='flex list-none gap-5 justify-end text-white'>
                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header