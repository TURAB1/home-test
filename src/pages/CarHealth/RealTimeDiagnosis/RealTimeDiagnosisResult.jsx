import React from 'react'
import Header from "../../../components/Header/Header"
import NavBar from "../../../components/NavBar/NavBar"
import './real-time-diagnosis.css'
const RealTimeDiagnosisResult = () => {
    return (
        <div className="container">
            <Header />
            <NavBar healthClass="nav-item-health-on" batteryClass="nav-item-battery" noticeClass="nav-item-notice" settingClass="nav-item-setting" />


            <div class="diagnosis">
                <h1>고장 내역이 없습니다.</h1>
                <p>[2025-10-02 17:09]</p>
                <figure>
                    <figcaption></figcaption>
                    <label></label>
                </figure>
            </div>
        </div>
    )
}

export default RealTimeDiagnosisResult