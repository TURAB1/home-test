import React from 'react'
import Header from '../../../components/Header/Header'
import NavBar from '../../../components/NavBar/NavBar'
import './usage-history.css'
const UsageHistory = () => {
  return (
    <div className='container'>
     <Header/>   
     <NavBar healthClass="nav-item-health" batteryClass="nav-item-battery-on" noticeClass="nav-item-notice" settingClass="nav-item-setting" />
    <div className="calendar">
    </div>
    <div className="card-wrapper distance" >
      <div className="card-inner">
        <div className="card-content">
          <div className="card"></div>
          <div className="value-wrap">
            <span className="value">491.1</span>
            <span className="unit kmper">km/</span>
            <span className="unit kwh">kWh</span>
          </div>
          <span className="label">주행거리</span>
        </div>
      </div>
    </div>

    <div className="card-wrapper time" >
      <div className="card-inner">
        <div className="card-content">
          <div className="card"></div>
          <div className="value-wrap">
            <span className="value">5:32</span>
            <span className="unit kwh"></span>
          </div>
          <span className="label">주행시간</span>
        </div>
      </div>
    </div>

    <div className="card-wrapper fuel" >
      <div className="card-inner">
        <div className="card-content">
          <div className="card"></div>
          <div className="value-wrap">
            <span className="value">23.4</span>
            <span className="unit kwh">L</span>
          </div>
          <span className="label">연료 소모량</span>
        </div>
      </div>
    </div>

    <div className="card-wrapper average-power" >
      <div className="card-inner">
        <div className="card-content">
          <div className="card"></div>
          <div className="value-wrap">
            <span className="value">6.2</span>
            <span className="unit kmper">km/</span>
            <span className="unit kwh">kWh</span>
          </div>
          <span className="label">평균전비</span>
        </div>
      </div>
    </div>

    <div className="card-wrapper cert-power" >
      <div className="card-inner">
        <div className="card-content">
          <div className="card"></div>
          <div className="value-wrap">
            <span className="value">6.9</span>
            <span className="unit kmper">km/</span>
            <span className="unit kwh">kWh</span>
          </div>
          <span className="label">공인전비</span>
        </div>
      </div>
    </div>

  </div>   
  )
}

export default UsageHistory