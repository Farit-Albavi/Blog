import React from 'react'
import HeaderBeforeLogin from './Headers/HeaderBeforeLogin'
import HeaderAfterLogin from './Headers/HeaderAfterLogin'
function Header() {
    let logIn = false
    return (
        logIn ? <HeaderAfterLogin /> : <HeaderBeforeLogin />
    )
}

export default Header