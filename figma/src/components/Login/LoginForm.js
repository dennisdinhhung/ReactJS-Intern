import React, { useState } from 'react'
import './Login.css'
import Logo from '../../assets/image/Group.png'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'


const LoginForm = ({ email,
    setEmail,
    emailError,
    password,
    setPassword,
    passwordError,
    hasAccount,
    setHasAccount,
    handleSignUp,
    handleLogin }) => {

    const [showPassword, setShowPassWord] = useState(true)

    const changeEye = () => {
        setShowPassWord(!showPassword)
    }


    return (
        <div className='container'>
            <div className='formLogin'>
                <h3 className='loginText'>Login with your Acount</h3>
                <div className='inputLogin'>
                    <input
                        type='text'
                        placeholder='Name...'
                        autoFocus
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className='emailError'>{emailError}</p>
                </div>
                <div className='inputLogin'>
                    <input
                        type={showPassword ? "password" : "text"}
                        placeholder='Password...'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className='passwordError'>{passwordError}</p>
                    <>
                        {
                            showPassword ? <AiOutlineEyeInvisible className='iconLoginEye' onClick={changeEye} /> :
                                <AiOutlineEye className='iconLoginEye' onClick={changeEye} />
                        }
                    </>
                </div>
                {/* <div className='buttonLogin'>
                    {
                        hasAccount ? (
                            <>
                                <button onClick={handleLogin}>Sign Up</button>
                                <p>Don't have an account
                                    <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                                </p>
                            </>
                        ) : (
                            <>
                                <button onClick={handleSignUp}>Sign In</button>
                                <p>Have an account?
                                    <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                                </p>
                            </>
                        )
                    }
                </div> */}
                <div className='buttonLogin'>

                    <>
                        <button onClick={handleLogin}>Sign Up</button>
                        {/* <p>Don't have an account
                            <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                        </p> */}
                    </>

                </div>
            </div>
            <div className='formLogo'>
                <div className='imgLogo'>
                    <img className='img' src={Logo} />
                </div>
            </div>
        </div>
    )
}

export default LoginForm