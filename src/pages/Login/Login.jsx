import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Navigate } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import person from '../../assets/images/person.svg'
import lock from '../../assets/images/lock.svg'
import './login.css'
import Header from '../../components/Header/Header'
import { AuthContext } from '../../AuthContext'
import FaultCar from '../CarHealth/FaultCar'
const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isChecked, setIsChecked] = useState(false)
    const [resultData, setResultData] = useState("")

    const { user, login, vehicleData } = useContext(AuthContext)

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value)
    }
    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value)
    }
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        login(email, password)
        // navigate('/faultCar');
        // alert(JSON.stringify(a_data));
        //navigate('/perfectCar');

        // get_token(email, password)
        // console.log("obj:" + JSON.stringify())
        // if (resultData) {

        // }
        //     const token='eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyS2V5IjoiNzA0ZjE4YTctZjJjOS00NjgyLWJmZmQtZGJlYzAyODRlMWMxIiwiZXhwaXJlZCI6MTc1MjExNDk1OSwiY29ycEtleSI6IjJlYzM3NzdlLTdlZTctMTFlZi04MDg0LTAyNDJhYzE0MDAwMiIsImNvcnBUeXBlIjoiMiIsInNlcnZpY2VHcmFkZSI6IjMifQ.cbFbRlAyZV1I_rQFEdYGtUn1-z0mwUsOHV65ZN6AMHs'

        // get_me(token)

    }
    const handleAutologinChange = () => {
        setIsChecked(!isChecked);

    }

    if (vehicleData) {
        let dtcCount
        if (vehicleData.vehicleHealthStatusEv) {
            dtcCount = vehicleData.vehicleHealthStatusEv.dtcCnt

        } else {
            dtcCount = vehicleData.vehicleHealthStatus.dtcCnt
        }
        if (dtcCount === 0) {
            return (
                <Navigate to="/faultCar" replace />)
        }

    }

    return (

        <div className="container">
            <Header />

            <img src={logo} className="logo" alt="LOGO" />
            <form className="form-area" id="form" method="POST" onSubmit={handleLogin}>
                <div className="input-box">
                    <img className="input-icon" src={person} alt="메일 아이콘" />
                    <input type="email" placeholder="E-mail" required name="id" value={email} onChange={handleEmailChange} />
                </div>
                <div className="input-box">
                    <img className="input-icon" src={lock} alt="비밀번호 아이콘" />
                    <input type="password" placeholder="Password" required name="pw" value={password} onChange={handlePasswordChange} />
                </div>

                <label className="checkbox-row">
                    <input type="checkbox" name="remember" checked={isChecked} onChange={handleAutologinChange} />
                    자동 로그인
                </label>
            </form>

            <button type="submit" form="form" className="login-button">로그인 </button>
        </div>

    )

}

export default Login