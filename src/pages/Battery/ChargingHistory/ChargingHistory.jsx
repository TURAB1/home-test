import React from 'react'
import Header from '../../../components/Header/Header'
import NavBar from '../../../components/NavBar/NavBar'
import './charging-history.css'
const ChargingHistory = () => {
    return (
        <div className="container">
            <Header />
            <NavBar healthClass="nav-item-health" batteryClass="nav-item-battery-on" noticeClass="nav-item-notice" settingClass="nav-item-setting" />
            <div className="calendar">
            </div>

            <section className="charge-summary">

                <article className="charge-box total-energy">
                    <div className="charge-bg"></div>
                    <div className="charge-amount">
                        <span className="amount">491.1 kwh</span>
                        {/* <span className="unit">kwh</span> */}
                    </div>
                   <div className="charge-label">총 충전량</div>
                </article>
                <article className="charge-box estimated-cost">
                    <div className="charge-bg"></div>
                    <div className="charge-amount">
                        <span className="amount">567,533 원</span>
                        {/* <span className="unit">원</span> */}
                    </div>
                   <div className="charge-label">예상비용</div>
                </article>

                <article className="charge-box slow-charge">
                    <div className="charge-bg"></div>
                    <div className="charge-count">
                        <span className="count">6 회</span>
                        {/* <span className="unit">회</span> */}
                    </div>
                   <div className="charge-label">완속충전</div>
                </article>
                <article className="charge-box fast-charge">
                    <div className="charge-bg"></div>
                    <div className="charge-count">
                        <span className="count">4 회</span>
                        {/* <span className="unit">회</span> */}
                    </div>
                   <div className="charge-label">급속충전</div>
                </article>

            </section>

        </div>
    )
}

export default ChargingHistory