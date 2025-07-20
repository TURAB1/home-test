import React, { useEffect } from 'react';
import axios from 'axios';
import Header from '../../../components/Header/Header'
import NavBar from '../../../components/NavBar/NavBar'
import "./calendar.css";
import './charging-history.css'
import Calendar from './Calendar';
const ChargingHistory = () => {
     useEffect(() => {
        fetchMonthlyEvCharge(new Date('2025-07-01').getTime(),new Date('2025-08-01').getTime());
     }, []);

    const fetchMonthlyEvCharge = async (start,end) => {
        const api_base_url = "http://localhost/api/1";
        const key = JSON.parse(sessionStorage.getItem('token'));
        const vehicleKey = JSON.parse(sessionStorage.getItem('vehicleKey'));
        

        try {
            const response = await axios.get(`${api_base_url}/vehicle/${vehicleKey}/evChargeCnt`, {
            params: {
                searchStartTs: start,
                searchEndTs: end,
                searchVehicleKey: vehicleKey
            },
            headers: {
                "Content-Type": "application/json",
                "key": key
            }
        });

        const arrData = response.data.result;
        let arrEvents = [];

        let totalVolume = 0;
        let totalCost = 0;
        let totalFast = 0;
        let totalSlow = 0;

        for (let item of arrData) {
            const fastCnt = item.fastCnt || 0;
            const slowCnt = item.slowCnt || 0;
            const cost = item.cost || 0;
            const batVolume = item.batVolume || 0;
            const dateTs = item.dateTs;

            // 이벤트 객체 구성 (FullCalendar용이지만 실제 출력 안 함)
            arrEvents.push({
                date: dateTs,
                fastCnt,
                slowCnt,
                cost,
                batVolume: (batVolume / 1000).toFixed(2) // Wh → kWh
            });

            // 합계 계산
            totalFast += fastCnt;
            totalSlow += slowCnt;
            totalCost += cost;
            totalVolume += batVolume;
        }

        // ✅ 콘솔 출력
        console.log("📅 월별 충전 이벤트 데이터셋:", arrEvents);
        console.log("📊 총 충전량:", (totalVolume / 1000).toFixed(1), "kWh");
        console.log("💰 총 충전비용:", totalCost.toLocaleString(), "원");
        console.log("⚡ 급속충전:", totalFast, "회 / 🐢 완속충전:", totalSlow, "회");

        } catch (err) {
            console.error("❌ 월별 충전이력 조회 실패:", err);
        }
    };


    const energyData = {
  "2025-06-03": 120,
  "2025-06-04": 220,
  "2025-06-15": 320,
  "2025-06-21": 420,
  "2025-06-30": 520,
};
    return (
        <div className="container">
            <Header />
            <NavBar healthClass="nav-item-health" batteryClass="nav-item-battery-on" noticeClass="nav-item-notice" settingClass="nav-item-setting" />
            <div className="calendar">
                <Calendar  data={energyData} />
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