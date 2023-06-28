import React, { useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import loginWithGoogle from '../functions/loginWithGoogle'
import loginEmailPassword from '../functions/loginEmailPassword'
import loginWithEmailAndPassword from '../functions/loginEmailPassword'

function Login() {

    const navigate = useNavigate();
    const [isLoggingIn, setIsLoggingIn] = useState(false)

    async function sumbitHandler(e) {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value
        console.log(username, password);
        try {
            await loginWithEmailAndPassword(username, password)
            setIsLoggingIn(true);
            console.log('res 1: ' + isLoggingIn);
            navigate('/')
        } catch (error) {
            alert('Usuario/Contraseña invalidos.')
            console.log('res 2: ' + isLoggingIn);
        }
        console.log('res 3: ' + isLoggingIn);
    }

    return (
        <>
            <Header isLoggingIn={isLoggingIn}></Header>
            <main className='w-full h-screen flex items-center justify-center '>
                <div className="w-full xl:max-w-lg max-w-2xl flex justify-center items-center overflow-y-hidden">
                    <form className="black-theme shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full" onSubmit={sumbitHandler}>


                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" for="username">
                                Usuario
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username" type="text" placeholder="Ingrese su usuario..." />
                        </div>
                        <div className="mb-6">
                            <label className="block text-white text-sm font-bold mb-2" for="password">
                                Contraseña
                            </label>
                            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none
                                    focus:shadow-outline"
                                id="password" type="password" placeholder="***********" />
                            <p className="text-red-500 text-xs italic">Please choose a password.</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Entrar
                            </button>

                            <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to={'/register'}>
                                Aun no tienes cuenta?
                            </Link>
                        </div>
                    </form>
                </div >
            </main >
        </>
    )
}

export default Login