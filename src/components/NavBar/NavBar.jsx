import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const NavBar = ({healthClass,batteryClass,noticeClass,settingClass}) => {


  const navigate=useNavigate()

  return (
        <nav className="sidebar-nav">
  
        <article className={healthClass} onClick={()=>navigate('/faultCar')}></article>

        <article className={batteryClass} onClick={()=>navigate('/battery')}></article>
       
        <article className={noticeClass} onClick={()=>navigate('/notice')}></article>
        <article className={settingClass} onClick={()=>navigate('/settings')}></article>
      
      </nav>

  )
}

export default NavBar