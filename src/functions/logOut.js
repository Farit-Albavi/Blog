import {auth} from '../firebase/credenciales'
import {signOut } from 'firebase/auth'


export default async function logOut(){
    try {
        signOut(auth)
    } catch (error) {
        console.log(error);
    }
}