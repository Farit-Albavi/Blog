import React from 'react'
import HeaderBeforeLogin from './Headers/HeaderBeforeLogin'
import HeaderAfterLogin from './Headers/HeaderAfterLogin'

function HeaderMovile() {
    let logIn = true
    return (
        logIn ? <HeaderAfterLogin /> : <HeaderBeforeLogin />
    )
}

export default HeaderMovile