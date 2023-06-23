import React from 'react'
import '../style.css'

function Aside1({info}) {
    return (
        <aside className='w-80 h-36 rounded black-theme'>
            <h1>{info}</h1>
        </aside>)
}

export default Aside1