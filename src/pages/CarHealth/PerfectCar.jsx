import React from 'react'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import './perfect-car.css'

const PerfectCar = () => {
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
                <div className="diagnostic-box-top">
                    <div className="box-frame box-frame-top"></div>
                    <div className="arrow-icon arrow-icon-top"></div>
                    {/* <!-- 완벽한 차량 관리! --> */}
                    <span className="label-nocount">없음</span>
                    <span className="label-title">고장코드</span>
                </div>
                <div className="diagnostic-box-bottom">
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

export default PerfectCar