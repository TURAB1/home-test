import React, { useContext, useState } from "react";
import Header from "../../../components/Header/Header";
import NavBar from "../../../components/NavBar/NavBar";
import "./diagnosis.css";
import { AuthContext } from "../../../AuthContext";

const Diagnosis = () => {
  const { dtcHstr_data } = useContext(AuthContext)
  console.log("arr=>" + JSON.stringify(dtcHstr_data))

  return (
    <div className="container">
      <Header />
      <NavBar healthClass="nav-item-health-on" batteryClass="nav-item-battery" noticeClass="nav-item-notice" settingClass="nav-item-setting" />

      <sensor-alert-widget>
        <sensor-icon>
        </sensor-icon>
        <sensor-message-box>
          <sensor-message>고장코드 4건</sensor-message>
        </sensor-message-box>
        <sensor-timestamp>[2025-10-02 17:09]</sensor-timestamp>
      </sensor-alert-widget>

      <div className="dtc-container">
        <div className="dtc-background"></div>

        {/* <!-- Block 1 --> */}
        {dtcHstr_data ?
          dtcHstr_data.map((item1, index1) => {
        
            console.log(JSON.stringify(item1.dtcRecords))
            const dtcRecords=item1.dtcRecords
             return   dtcRecords.map((item2, index2) => {
                  console.log(JSON.stringify(item2.descript))
                  //const desc=JSON.stringify(item2.descript)
                  //check dtcKey
                  //const li_data = dtcHstr_data[index1]['dtcRecords'][index2];
                  //check emergency
                  return (
                    <div className={`dtc-block block-${index2 + 1}`} key={index2}>
                      <div className="dtc-header">
                        <div className="dtc-icon-2">
                        </div>
                        <span className="dtc-code">[{item2.dtcCode}] {item2.typeName}</span>
                      </div>
                      <div className="dtc-description-wrap">
                        <div className="dtc-description-frame"></div>
                        <span className="dtc-description">{item2.descript}</span>
                      </div>
                    </div>
                  )

                 }
               )

              
          }

          )
          :
          <div className="dtc-block block-1">
            <div className="dtc-description-wrap">
              <div className="dtc-description-frame"></div>
              <span className="dtc-description">데이터가 없습니다.</span>
            </div>
          </div>

        }
        {/* <!-- Block 2 --> /}
        <div className="dtc-block block-2">
          <div className="dtc-header">
            <div className="dtc-icon-2">
            </div>
            <span className="dtc-code">[P0120] 파워트레인</span>
          </div>
          <div className="dtc-description-wrap">
            <div className="dtc-description-frame"></div>
            <span className="dtc-description">스로틀/페달 위치 센서/스위치 "A" 회로</span>
          </div>
        </div>

        {/* <!-- Block 3 --> /}
        <div className="dtc-block block-3">
          <div className="dtc-header">
            <div className="dtc-icon-3">
            </div>
            <span className="dtc-code">[P0120] 파워트레인</span>
          </div>
          <div className="dtc-description-wrap">
            <div className="dtc-description-frame"></div>
            <span className="dtc-description">스로틀/페달 위치 센서/스위치 "A" 회로</span>
          </div>
        </div>

        {/* <!-- Block 4 --> /}
        <div className="dtc-block block-4">
          <div className="dtc-header">
            <div className="dtc-icon-4">
            </div>
            <span className="dtc-code">[P0120] 파워트레인</span>
          </div>
          <div className="dtc-description-wrap">
            <div className="dtc-description-frame"></div>
            <span className="dtc-description">스로틀/페달 위치 센서/스위치 "A" 회로</span>
          </div>
        </div>*/}

      </div>
    </div>
  )
}

export default Diagnosis;