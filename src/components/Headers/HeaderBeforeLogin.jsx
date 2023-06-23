import React from 'react'
import '../../style.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='black-theme p-6 w-full xl:block fixed top-0 z-10 border-nav'>
            <nav className='grid grid-cols-2 mx-auto container'>
                <h1 className='font-bold text-white hover:text-slate-200'>
                    <Link to={'/'}>Blog</Link>
                </h1>
                <ul className='flex list-none gap-7 justify-end text-white'>
                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>
                    <li>
                        <Link to={'/register'}>Registrarse</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header