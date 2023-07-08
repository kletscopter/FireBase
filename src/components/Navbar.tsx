import {Link} from 'react-router-dom'
import { auth } from '../config/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {signOut} from 'firebase/auth'

export const Navbar = () => {

    const [user, loading, error] = useAuthState(auth) //wordt gebruikt om userinfo te verkrijgen
    //the hook will automatically update the user when logged in with another account
    const signUserOut = async () => {
        await signOut(auth);

    }

    return (
    <div className='navbar'>
        <div className='links'>

        <Link to='/'>Home </Link>   
        {!user ? <Link to='/login'>Login </Link> :  
        <Link to='/createpost'>Create Post </Link> } {/* if you aren't logged in show login, else show createpost}
        </div>
        <div className='user'> {/* if user exists show the below */}
            {user && (
                <>
            <p> {auth.currentUser?.displayName}</p>
            <img src = {auth.currentUser?.photoURL || ""} width="40" height="30"/> {/* if 0 show ""*/}
            <button onClick={signUserOut}>Sign out</button>
            </>
            )}
        </div>
    </div>
    )
}