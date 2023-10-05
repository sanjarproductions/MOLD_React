import React, { useState } from 'react'
import "./Login.scss"
import { Container } from '../../utils/Utils'
import { FiEye } from "react-icons/fi";
import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import { instance } from '../../api/axios';
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)
    const [username, setUserName] = useState("")
    const [password, setUserPassword] = useState("")
    console.log(username, password);


    function onLogin(e) {
        e.preventDefault()
        setIsLoading(true)
        instance.post('/auth/login', {
            username,
            password
        }).then(response => {
            if (response.data.token) {
                setIsLoading(false)
                toast.success("Вы успешно вошли в систему!")
                setUserPassword("")
                setUserName("")
                dispatch({ payload: response.data, type: "LOGIN_USER" })
                navigate('/admin')
            }
        })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
                toast.error(err.response.data.message)
                setUserPassword("")
                setUserName("")
            })
    }
    return (
        <div className='login'>
            <Container>
                <div className="flex_login">
                    <div className="text-wrapper">
                        <h1>Кириш</h1>
                        <form className='login-form' onSubmit={onLogin}>
                            <input type="text" placeholder='Name' required value={username} onChange={(e) => setUserName(e.target.value)} />
                            <div className="papssword-wrapper">
                                <input type="password" placeholder='Password' value={password} required minLength={8} onChange={(e) => setUserPassword(e.target.value)} />
                                <FiEye />
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