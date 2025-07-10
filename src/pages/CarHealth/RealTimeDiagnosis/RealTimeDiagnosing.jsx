import React from 'react'
import Header from "../../../components/Header/Header"
import NavBar from "../../../components/NavBar/NavBar"
import './real-time-diagnosis.css'
const RealTimeDiagnosing = () => {
  return (
    <div className="container">
      <Header />
      <NavBar healthClass="nav-item-health-on" batteryClass="nav-item-battery" noticeClass="nav-item-notice" settingClass="nav-item-setting" />

      <div className="diagnosis">
        <h1>차량을 진단하고 있습니다</h1>
        <p>잠시만 기다려주세요</p>
        <figure>
          <figcaption></figcaption>
          <label></label>
        </figure>
      </div>
    </div>
  )
}

export default RealTimeDiagnosing