import { useState } from 'react'
import HeaderBeforeLogin from './Headers/HeaderBeforeLogin'
import HeaderAfterLogin from './Headers/HeaderAfterLogin'
function Header({ isLoggingIn }) {

    return (
        isLoggingIn ? <HeaderAfterLogin /> : <HeaderBeforeLogin />
    )
}

export default Header