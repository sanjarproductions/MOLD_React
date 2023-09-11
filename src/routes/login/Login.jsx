import React, { useState } from 'react'
import "./Login.scss"
import { Container } from '../../utils/Utils'
import { FiEye } from "react-icons/fi";

const Login = () => {
    const [userNameCheck, setUserName] = useState("")
    const [userPasswordCheck, setUserPassword] = useState("")

    console.log(userNameCheck,userPasswordCheck);
    return (
        <div className='login'>
            <Container>
                <div className="flex_login">

                    <div className="text-wrapper">
                        <h1>Кириш</h1>
                        <form className='login-form'>
                            <input type="text" placeholder='Name' required value={userNameCheck} onChange={(e) => setUserName(e.target.value)}/>
                            <div className="papssword-wrapper">
                                <input type="password" placeholder='Password' value={userPasswordCheck} required minLength={8} onChange={(e) => setUserPassword(e.target.value)}/>
                                <FiEye/>
                            </div>
                            <button type='send'>Кириш</button>
                        </form>
                    </div>
                    <img src="https://www.go.ooo/img/bg-img/Login.jpg" className='loginImage' alt="" />
                </div>
            </Container>
        </div>
    )
}

export default Login
