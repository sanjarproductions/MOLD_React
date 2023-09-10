import React from 'react'
import "./Login.scss"
import { Container } from '../../utils/Utils'
const Login = () => {
    return (
        <div className='login'>
            <Container>
                <div className="flex_login">

                    <div className="text-wrapper">
                        <h1>Кириш</h1>
                        <form className='login-form'>
                            <input type="text" placeholder='Name'/>
                            <input type="text" placeholder='Password'/>
                            <button type='send'>Кириш</button>
                        </form>
                    </div>
                    <img src="https://www.go.ooo/img/bg-img/Login.jpg" alt="" />
                </div>
            </Container>
        </div>
    )
}

export default Login
