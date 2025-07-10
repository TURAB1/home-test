import React, { useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar.jsx'
import Header from '../../components/Header/Header'
import './fault-car.css'
import { AuthContext } from '../../AuthContext.js'

const FaultCar = ({ dtcCount }) => {
  const { vehicleData,vehicleKey ,set_dtcHstr_data} = useContext(AuthContext)
  const navigate = useNavigate()

  async function get_dtcHstr( limit = 0) {
    const api_base_url = "http://localhost/api/1"
    const key = localStorage.getItem('token');

    try {
      const url = `${api_base_url}/vehicle/${vehicleKey}/dtcHstr${limit ? `?limit=${limit}` : ''}`;

      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          "key": key
        },

      });

      if (response.data.result) {
        console.log("dtcHstr=>"+JSON.stringify(response.data.result))
        set_dtcHstr_data(response.data.result)

      }
      navigate("/health/diagnosis")

    } catch (error) {
      navigate("/health/diagnosis")
      console.error(error);
    }
  }

  const handleDtc = () => {
    get_dtcHstr()
   //navigate("/health/diagnosis")
  }
  const handleSensor = () => {

  }
  return (
    <div className="container">
      <Header />
      <NavBar healthClass="nav-item-health-on" batteryClass="nav-item-battery" noticeClass="nav-item-notice" settingClass="nav-item-setting" />
      {/* <!-- 차량 이상이 감지됐어요! --> */}
      <section className="alert-banner">
        <article className="alert-text">
          <h1 className="alert-title">차량 이상이 감지됐어요!</h1>
          <p className="alert-message">이상이 감지된 항목이 있어요.<br />안전한 운행을 위해 확인이 필요해요</p>
        </article>
        <div className="exclamation"></div>
      </section>

      <div className="diagnostic-container">
        <div className="diagnostic-box-top" onClick={handleDtc}>
          <div className="box-frame box-frame-top"></div>
          <div className="arrow-icon arrow-icon-top"></div>
          <span className="label-count" >4건</span>
          <span className="label-title">고장코드</span>
        </div>
        <div className="diagnostic-box-bottom" onClick={handleSensor}>
          <div className="box-frame box-frame-bottom"></div>
          <div className="arrow-icon arrow-icon-bottom"></div>
          <span className="label-status">이상 없음</span>
          <span className="label-title">센서진단결과</span>
        </div>
      </div>

      <button type="button" className="button">실시간 고장진단</button>

    </div>
  )
}

export default FaultCar