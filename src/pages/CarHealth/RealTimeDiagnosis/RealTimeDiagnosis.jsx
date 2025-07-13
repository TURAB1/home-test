import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from "../../../components/Header/Header"
import NavBar from "../../../components/NavBar/NavBar"
import './real-time-diagnosis.css'
const RealTimeDiagnosis = () => {
   const navigate = useNavigate()
  const handleDiagnosis=()=>{
     navigate("health/realTimeDiagnosing")
  }
  return (
    <div className="container">
      <Header />
      <NavBar healthClass="nav-item-health-on" batteryClass="nav-item-battery" noticeClass="nav-item-notice" settingClass="nav-item-setting" />

      <div class="diagnosis">
        <h1>실시간 고장진단</h1>
        <p>안전한 곳에 정차 후 ACC ON 상태에서 실행해주세요</p>
        <figure>
          <figcaption></figcaption>
          <label></label>
        </figure>
      </div>

      <button type="button" class="button" onClick={handleDiagnosis}>진단 실행</button>
    </div>
  )
}

export default RealTimeDiagnosis