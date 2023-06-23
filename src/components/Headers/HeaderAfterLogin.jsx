import React from 'react'

function HeaderAfterLogin() {
    return (
        <header className='black-theme p-6 w-full xl:block z-10'>
            <nav className='grid grid-cols-2 mx-auto container'>
                <h1 className='font-bold text-white'>PoliBlog</h1>
                <ul className='flex list-none gap-5 justify-end text-white'>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </header>)
}

export default HeaderAfterLogin