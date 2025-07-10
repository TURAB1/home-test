import React from 'react'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import './battery.css'
const Battery = () => {
    return (
        <div className="container">
            <Header />
            <NavBar healthClass="nav-item-health" batteryClass="nav-item-battery-on" noticeClass="nav-item-notice" settingClass="nav-item-setting"/>

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

            <section className="battery-info-container">
                <div className="background-layer"></div>
                <section className="card-group">
                    <article className="spec-info">
                        <h1 className="card-title">제원정보</h1>
                        <section className="info-item"><span className="label">배터리 형태</span><strong className="value-none">원통형</strong></section>
                        <section className="info-item"><span className="label">최대 주행 거리</span><div className="value-unit"><strong className="value">342</strong><span className="unit">km</span></div></section>
                        <section className="info-item"><span className="label">최대 용량</span><div className="value-unit"><strong className="value">77.4</strong><span className="unit">kWh</span></div></section>
                        <section className="info-item"><span className="label">공인복합연비</span><div className="value-unit"><strong className="value">5.41</strong><span className="unit">kWh</span></div></section>
                    </article>
                    <article className="usage-info">
                        <h1 className="card-title">사용내역</h1>
                        <section className="info-item"><span className="label">누적 충전 전류량</span><div className="value-unit"><strong className="value">3499.8</strong><span className="unit">Ah</span></div></section>
                        <section className="info-item"><span className="label">누적 충전 전력량</span><div className="value-unit"><strong className="value">123,456</strong><span className="unit">kWh</span></div></section>
                        <section className="info-item"><span className="label">누적 방전 전류량</span><div className="value-unit"><strong className="value">3499.8</strong><span className="unit">Ah</span></div></section>
                        <section className="info-item"><span className="label">누적 방전 전력량</span><div className="value-unit"><strong className="value">123,456</strong><span className="unit">kWh</span></div></section>
                        <section className="info-item"><span className="label">BMS 총 동작시간</span><div className="value-unit"><strong className="value">123,456</strong><span className="unit">hrs</span></div></section>
                    </article>
                </section>
                <div className="bottom-buttons">
                    <button className="history-button">충전이력</button>
                    <button className="history-button">사용이력</button>
                </div>
            </section>
        </div>
    )
}

export default Battery