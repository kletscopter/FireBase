import {auth, provider} from '../config/firebase'
import {signInWithPopup} from 'firebase/auth' //sign-in methode definiëren
import { useNavigate } from 'react-router-dom' //hook

export const Login = () => {
    const navigate = useNavigate()

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider)
        navigate("/")
    }

    return (
     <div>
        <p>Sign in with Google to continue</p>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
    )
    
}