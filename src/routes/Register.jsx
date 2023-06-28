import React from 'react'
import Header from '../components/Header'
import registerUser from '../functions/registerUser'
import { useNavigate  } from 'react-router-dom';


function Register() {

    async function sumbitHandler(e) {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value

        await registerUser(username, password)
        alert('Cuenta creada con exito!');
    }

    return (
        <>
            <Header></Header>
            <main className='w-full h-screen flex items-center justify-center'>
                <form class="w-full max-w-lg black-theme px-8 pt-6 pb-8 mb-4" onSubmit={sumbitHandler}>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
                                Nombre
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 
                                                leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
                                Apellido
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                                            leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                                Ingrese su correo electronico
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
                                             focus:bg-white focus:border-gray-500" id="username" type="email" placeholder='example@email.com' />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                                Contraseña
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
                                            focus:bg-white focus:border-gray-500" id="password" type="password" placeholder="******************" />
                            <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                                Vuelva a repetir su contraseña
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
                                             focus:bg-white focus:border-gray-500" id="samePassword" type="password" placeholder="******************" />
                        </div>
                    </div>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Registrarme
                    </button>
                </form>
            </main>

        </>
    )
}

export default Register
