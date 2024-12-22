import { auth, googleProvider } from "../config/firebase-config"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import React, { useState} from "react"

function Auth() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    console.log(auth?.currentUser?.email)

    const signIn = async() => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.log(err)
        }
    }

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch (err) {
            console.log(err)
        }
    }

    const logout = async () => {
        try {
            await signOut(auth)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
           <input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
           <input 
           placeholder="Password"
           type="password" 
           onChange={(e) => setPassword(e.target.value)}
           />
            <button onClick={signIn}>sign in</button>

            <button onClick={signInWithGoogle}>sign in with google</button>
            <button onClick={logout}>logout</button>

        </div> 
    )
}
export default Auth