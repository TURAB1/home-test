import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
   const navigate=useNavigate();


    // const [currentTime, setCurrentTime] = useState('')
    // const [amPm, setAmPm] = useState('')
  
    // const updateTime = () => {
    //     const now = new Date()
    //     const hours = now.getHours() % 12 ? now.getHours() % 12 : 12
    //     const minutes = now.getMinutes()
    //     const ampm = now.getHours() >= 12 ? "PM" : "AM"
    //     setCurrentTime(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`)
    //     setAmPm(ampm)
    // }

    // useEffect(() => {
    //     updateTime();
    //     const intervalId = setInterval(updateTime, 6000);
    //     return () => clearInterval(intervalId)
    // }, [])

    return (
       
            <div className="header-wrapper">
                <div className="header-background"></div>
                {/* <div className="clock-box">

                    <span className="clock-hour">{currentTime}</span>
                    <span className="clock-ampm">{amPm}</span>
                </div> */}
                <div className="signal-icon" onClick={() => navigate(-1)}></div>
                {/* <div className="wifi-icon"></div>
                <div className="battery-icon"></div> */}
            </div>
      
    )
}

export default Header