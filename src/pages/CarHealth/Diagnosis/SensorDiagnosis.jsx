import React, { useContext } from 'react'
import Header from "../../../components/Header/Header"
import NavBar from "../../../components/NavBar/NavBar"
import { AuthContext } from '../../../AuthContext'
import './sensorDiagnosis.css'
const SensorDiagnosis = () => {
  const { sensorFault } = useContext(AuthContext)
  return (
    <div class="container">
      <Header />
      <NavBar healthClass="nav-item-health-on" batteryClass="nav-item-battery" noticeClass="nav-item-notice" settingClass="nav-item-setting" />
      {sensorFault ?
        <sensor-alert-widget>
          <sensor-icon>
          </sensor-icon>
          <sensor-message-box>
            <sensor-message>센서진단결과 이상 1건</sensor-message>
          </sensor-message-box>
          <sensor-timestamp>[2025-10-02 17:09]</sensor-timestamp>
        </sensor-alert-widget>
        :
        <sensor-alert-widget>
          <sensor-icon-green>
          </sensor-icon-green>
          <sensor-message-box>
            <sensor-message-green>센서진단결과 정상</sensor-message-green>
          </sensor-message-box>
          <sensor-timestamp>[2025-10-02 17:09]</sensor-timestamp>
        </sensor-alert-widget>
      }

      <data-widget>
        <data-row>
          <data-box></data-box>
          <data-label>셀간전압편차</data-label>
          <data-unit>V</data-unit>
          <data-value>0</data-value>
        </data-row>
        <data-row>
          <data-box></data-box>
          <data-label>배터리 최저 전압</data-label>
          <data-unit>V</data-unit>
          <data-value>13.2</data-value>
        </data-row>
        <data-row>
          <data-box></data-box>
          <data-label>배터리 외기 온도</data-label>
          <data-unit>°C</data-unit>
          <data-value>30</data-value>
        </data-row>
      </data-widget>

      <div class="battery-widget">
        <div class="temperature-box">
          <div class="temperature-bg"></div>

          <div class="temp-max">
            <div class="temp-value-max">
              <span>°C</span><span>22</span>
            </div>
            <div class="temp-icon-max">
              <div></div>
              <div class="name"></div>
            </div>
            <span>배터리 최대 온도</span>
          </div>

          <div class="temp-min">
            <div class="temp-value-min">
              <span>°C</span><span>21</span>
            </div>
            <div class="temp-icon-min">
              <div></div>
              <div class="name"></div>
            </div>
            <span>배터리 최저 온도</span>
          </div>
        </div>
        <div class="battery-widget-title">
          <span>배터리 온도</span>
          <p>(20°C ~ 40°C)</p>
        </div>
      </div>

      <div class="cellvoltage-widget">
        <div class="cellvoltage-box">
          <div class="cellvoltage-bg"></div>

          <div class="voltage-max">
            <div class="voltage-max-value">
              <span class="unit">V</span>
              <span class="value">3.4</span>
            </div>
            <div class="voltage-max-icon">
              <div class="voltage-icon-shape-1"></div>
              <div class="voltage-icon-shape-2"></div>
              <div class="voltage-icon-shape-3"></div>
            </div>
            <span class="voltage-max-label">배터리 최대 셀전압</span>
          </div>

          <div class="voltage-min">
            <div class="voltage-min-value">
              <span class="unit">V</span>
              <span class="value">3.3</span>
            </div>
            <div class="voltage-min-icon">
              <div class="voltage-icon-shape-1"></div>
              <div class="voltage-icon-shape-2"></div>
            </div>
            <span class="voltage-min-label">배터리 최저 셀전압</span>
          </div>
        </div>

        <div class="cellvoltage-titlebox">
          <span class="cellvoltage-title">배터리 셀전압</span>
          <span class="cellvoltage-subtitle">(3V ~ 6V)</span>
        </div>
      </div>

    </div>
  )
}

export default SensorDiagnosis