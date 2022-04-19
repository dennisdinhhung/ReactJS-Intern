import React, { useEffect, useState } from 'react'
import fire from '../../fire'
import LoginForm from './LoginForm'
import Hero from '../Hero.js/Hero'
import { toast } from 'react-toastify';


function Login() {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [hasAccount, setHasAccount] = useState(false)

    const clearInputs = () => {
        setEmail("")
        setPassword("")
    }

    const clearErrors = () => {
        setEmailError("")
        setPasswordError("")
    }

    const handleLogin = () => {
        if (!email && !password) {
            toast.error("Empty Email Or Password")
            return
        }
        clearErrors()
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError("Wrong email")
                        break;
                    case "auth/wrong-password":
                        setPasswordError("wrong password")
                        break;
                }
            })
    }

    const handleSignUp = () => {
        clearErrors()
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError("Invalid email")
                        break;
                    case "auth/weak-password":
                        setPasswordError("Weak password")
                        break;
                }
            })
    }

    const handleLogout = () => {
        console.log("dang xuat");
        fire.auth().signOut()
    }
    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                console.log("user...", user);
                clearInputs()
                setUser(user)
            } else {
                setUser('')
            }
        })
    }
    useEffect(() => {
        authListener()
    }, [])
    return (

        <>
            {
                user ? (
                    <Hero
                        handleLogout={handleLogout}
                    />
                ) : (
                    <LoginForm
                        email={email}
                        setEmail={setEmail}
                        emailError={emailError}
                        password={password}
                        setPassword={setPassword}
                        setpasswordError={setPasswordError}
                        passwordError={passwordError}
                        hasAccount={hasAccount}
                        setHasAccount={setHasAccount}
                        handleSignUp={handleSignUp}
                        handleLogin={handleLogin}
                    />
                )
            }
        </>
    )
}

export default Login