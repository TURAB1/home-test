import React , { useContext }from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import './perfect-car.css'
import { AuthContext } from '../../AuthContext.js'

const PerfectCar = () => {
    
      const { vehicleData, vehicleKey, set_dtcHstr_data,setSensorFault } = useContext(AuthContext)
  const navigate = useNavigate()
  let dtcCount
  if (vehicleData) {
    
    if (vehicleData.vehicleHealthStatusEv) {
      dtcCount = vehicleData.vehicleHealthStatusEv.dtcCnt

    } else {
      dtcCount = vehicleData.vehicleHealthStatus.dtcCnt
    }
  }

  async function get_dtcHstr(limit = 0) {
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
        console.log("dtcHstr=>" + JSON.stringify(response.data.result))
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
   navigate("/health/sensorDiagnosis")
  }
    const handleRealTimeDiagnosis=()=>{
    navigate("health/realTimeDiagnosis")
  }


    return (
        <div className="container">
            <Header />
            <NavBar healthClass="nav-item-health-on" batteryClass="nav-item-battery" noticeClass="nav-item-notice" settingClass="nav-item-setting" />

            {/* <!-- 완벽한 차량 관리! --> */}
            <section className="alert-banner">
                <article className="alert-text">
                    <h1 className="alert-title">완벽한 차량 관리!</h1>
                    <p className="alert-message">꾸준한 차량 관리 덕분에,<br />현재 상태는 아주 양호한 편이에요</p>
                </article>
                <div className="exclamation2"></div>
            </section>

            <div className="diagnostic-container">
                <div className="diagnostic-box-top" onClick={handleDtc}>
                    <div className="box-frame box-frame-top"></div>
                    <div className="arrow-icon arrow-icon-top"></div>
                    {/* <!-- 완벽한 차량 관리! --> */}
                    <span className="label-nocount">없음</span>
                    <span className="label-title">고장코드</span>
                </div>
                <div className="diagnostic-box-bottom" onClick={handleSensor}>
                    <div className="box-frame box-frame-bottom"></div>
                    <div className="arrow-icon arrow-icon-bottom"></div>
                    <span className="label-status">이상 없음</span>
                    <span className="label-title">센서진단결과</span>
                </div>
            </div>

            <button type="button" className="button" onClick={handleRealTimeDiagnosis}>실시간 고장진단</button>
        </div>
    )
}

export default PerfectCar