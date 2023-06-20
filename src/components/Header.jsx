import React from 'react'
import '../style.css'
function Header() {
    return (
        <header className='black-theme p-6 w-full hidden xl:block'>
            <nav className='grid grid-cols-2 mx-auto container'>
                <h1 className='font-bold text-white'>PoliBlog</h1>
                <ul className='flex list-none gap-5 justify-end text-white'>
                    <li><a href="">Login</a></li>
                    <li><a href="">Registrarse</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header