import {
    auth
} from '../firebase/credenciales'
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect
} from 'firebase/auth'

export default async function loginWithGoogle() {
    try {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
        console.log(result);
    } catch (error) {

    }
}