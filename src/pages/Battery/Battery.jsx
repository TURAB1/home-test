import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import './battery.css'
const Battery = () => {
    const navigate=useNavigate()
    return (
        <div className="container">
            <Header />
            <NavBar healthClass="nav-item-health" batteryClass="nav-item-battery-on" noticeClass="nav-item-notice" settingClass="nav-item-setting" />

            <sensor-alert-widget>
                <sensor-icon></sensor-icon>
                <sensor-message-box>
                    <sensor-message>배터리 정보</sensor-message>
                </sensor-message-box>
            </sensor-alert-widget>

            <data-widget>
                <data-row>
                    <data-box></data-box>
                    <data-label>배터리셀간 전압편차</data-label>
                    <data-unit>V</data-unit>
                    <data-value>0</data-value>
                </data-row>
                <data-row>
                    <data-box></data-box>
                    <data-label>최대열화 셀번호</data-label>
                    <data-value>58</data-value>
                </data-row>
            </data-widget>

            <sensor-alert-widget>
                <sensor-icon>
                </sensor-icon>
                <sensor-message-box>
                    <sensor-message>배터리 정보</sensor-message>
                </sensor-message-box>
                {/* <!-- <sensor-timestamp>[2025-10-02 17:09]</sensor-timestamp> 배터리 정보 미기입 --> */}
            </sensor-alert-widget>

            <data-widget>
                <data-row>
                    <data-box></data-box>
                    <data-label>배터리셀간 전압편차</data-label>
                    <data-unit>V</data-unit>
                    <data-value>0</data-value>
                </data-row>
                <data-row>
                    <data-box></data-box>
                    <data-label>최대열화 셀번호</data-label>
                    {/* <!-- <data-unit>V</data-unit> --> */}
                    <data-value>58</data-value>
                </data-row>
            </data-widget>

            <section className="battery-info-container">
                <div className="background-layer"></div>

                {/* <!-- 메인 정보 카드 그룹 --> */}
                <section className="card-group">
                    <article className="spec-info">
                        <header className="card-header">
                            <div className="card-title">제원정보</div>
                        </header>

                        <section className="info-item">
                            {/* <span className="label">배터리 형태</span> */}
                            <span className="label2">배터리 형태</span>
                            <strong className="value-none">원통형</strong>
                        </section>

                        <section className="info-item">
                            <span className="label2">최대 주행 거리</span>
                            <strong className="value-none">342 Km </strong>
                            {/* <div className="value-unit">
                            <strong className="value">342</strong>
                            <span className="unit">km</span>
                            </div> */}
                        </section>

                        <section className="info-item">
                            <span className="label2">최대 용량</span>
                            <strong className="value-none"> 77.4 kwh</strong>
                        </section>

                        <section className="info-item">
                            <span className="label2">공인복합연비</span>
                            <strong className="value-none"> 5.41 kwh</strong>
                        </section>
                    </article>

                    <article className="usage-info">
                        <header className="card-header">
                            <div className="card-title">사용내역</div>
                        </header>

                        <section className="info-item">
                            <span className="label2">누적 충전 전류량</span>
                            <strong className="value-none"> 3499.8 Ah</strong>
                        </section>

                        <section className="info-item">
                            <span className="label2">누적 충전 전력량</span>
                            <strong className="value-none"> 123,456 kwh</strong>
                        </section>

                        <section className="info-item">
                            <span className="label2">누적 방전 전류량</span>
                            <strong className="value-none"> 3499.8 Ah</strong>
                        </section>

                        <section className="info-item">
                            <span className="label2">누적 방전 전력량</span>
                            <strong className="value-none"> 123,456 kwh</strong>
                        </section>

                        <section className="info-item">
                            <span className="label2">BMS 총 동작시간</span>
                            <strong className="value-none"> 123,456 hrs</strong>
                        </section>
                    </article>
                </section>

                {/* <!-- 하단 버튼 영역 --> */}
                <div className="bottom-buttons">
                    <button className="history-button" onClick={()=>navigate("chargingHistory")}>충전이력</button>
                    <button className="history-button" onClick={()=>navigate("usageHistory")}>사용이력</button>
                </div>
            </section>
        </div>
    )
}

export default Battery