import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import DualSlider from '../../components/DualSlider/DualSlider'
import './settings.css'

const ToggleItem = ({ label, icon, isOn, onToggle, color }) => {
  return (

    <div className="toggle-item">
      <div className="toggle-label">
        {/* <span className="toggle-icon"></span> */}
        <div className={icon}></div>
        <span>{label}</span>
      </div>
      <div className={`switch ${isOn ? "on" : ""} ${color || ""}`} onClick={onToggle}>
        <div className="switch-handle"></div>
      </div>
    </div>


  );
};
const ToggleBatteryLevelItem = ({ label, icon, isOn, onToggle, color }) => {
  return (
    <div className='battery'>
      <div className="toggle-item">
        <div className="toggle-label">
          {/* <span className="toggle-icon"></span> */}
          <div className={icon}></div>
          <span>{label}</span>
        </div>
        <div className={`switch ${isOn ? "on" : ""} ${color || ""}`} onClick={onToggle}>
          <div className="switch-handle"></div>
        </div>
      </div>
      <DualSlider />
      <div class="description-box">
        <span class="description-text">배터리 잔량이[30%]미만으로 떨어지거나, [80%]를 초과하는 경우 알림을 전송합니다</span>
      </div>
    </div>


  );
};
const ToggleBatteryTemperatureItem = ({ label, icon, isOn, onToggle, color }) => {
  return (
    <div className='battery temperature'>
      <div className="toggle-item">
        <div className="toggle-label">
          {/* <span className="toggle-icon"></span> */}
          <div className={icon}></div>
          <span>{label}</span>
        </div>
        <div className={`switch ${isOn ? "on" : ""} ${color || ""}`} onClick={onToggle}>
          <div className="switch-handle"></div>
        </div>
      </div>
      <DualSlider />
      <div class="description-box">
        <span class="description-text">온도가[10℃]미만으로 떨어지거나, [40℃]를 초과하는 경우 알림을 전송합니다</span>
      </div>
    </div>

  );
};

const Settings = () => {
  const [toggles, setToggles] = useState({
    enterExit: true,
    lowVoltage: false,
    detach: false,
    logBook: false,
    replace: false,
    danger: false,
    chargeStart: false,
    chargeEnd: false,
    batteryLevel: false,
    batteryTemperature: false

  });

  const toggleSwitch = (key) => {
    setToggles({ ...toggles, [key]: !toggles[key] });
  };

  return (
    <div className="container">
      <Header />
      <NavBar healthClass="nav-item-health" batteryClass="nav-item-battery" noticeClass="nav-item-notice" settingClass="nav-item-setting-on" />
      <div className="page-container">
        <header className="header">
          <div className="header-left">
            <div className="account-label">
              <span className="label-text">계정</span>
            </div>
          </div>
          <div className="header-right">
            <div className="user-info">
              <div className="profile-icon"></div>
              <span className="user-email">test123@test123.com</span>
              <div className="dropdown-icon"></div>
            </div>
            <div className="logout-button">
              <div className="logout-icon"></div>
              <span className="logout-text">로그아웃</span>
            </div>
          </div>
        </header>

        <div className="notification-page">
          <div className="header-wrapper">
            <div className="header-logo-box">
              <div className="header-logo">
                <span className="header-title">알림</span>
              </div>
            </div>
          </div>

          <div className="toggle-container">
            <ToggleItem
              label="차량 진입/이탈"
              icon="icon-wrapper-entryexit"
              isOn={toggles.enterExit}
              onToggle={() => toggleSwitch("enterExit")}
              color="red"
            />

            <ToggleItem
              label="저전압 경고"
              icon="icon-wrapper-voltage"
              isOn={toggles.lowVoltage}
              onToggle={() => toggleSwitch("lowVoltage")}
            />
            <ToggleItem
              label="단말 탈부착 감지"
              icon="icon-wrapper-detach"
              isOn={toggles.detach}
              onToggle={() => toggleSwitch("detach")}
            />
            {/* sf */}

            <ToggleItem
              label="차계부 주기경고"
              icon="icon-wrapper-logbook"
              isOn={toggles.logBook}
              onToggle={() => toggleSwitch("logBook")}

            />

            <ToggleItem
              label="차계부 부품교체"
              icon="icon-wrapper-replace"
              isOn={toggles.replace}
              onToggle={() => toggleSwitch("replace")}
            />
            <ToggleItem
              label="위험운전"
              icon="icon-wrapper-danger"
              isOn={toggles.danger}
              onToggle={() => toggleSwitch("danger")}
            />
            <ToggleItem
              label="충전시작"
              icon="icon-wrapper-charge-start"
              isOn={toggles.chargeStart}
              onToggle={() => toggleSwitch("chargeStart")}
            />
            <ToggleItem
              label="충전종료"
              icon="icon-wrapper-charge-end"
              isOn={toggles.chargeEnd}
              onToggle={() => toggleSwitch("chargeEnd")}
            />
            <ToggleBatteryLevelItem
              label="배터리 잔량 알림"
              icon="icon-container-level"
              isOn={toggles.batteryLevel}
              onToggle={() => toggleSwitch("batteryLevel")}
            />
            <ToggleBatteryTemperatureItem
              label="배터리 온도 알림"
              icon="icon-container-temperature"
              isOn={toggles.batteryTemperature}
              onToggle={() => toggleSwitch("batteryTemperature")}
            />
          </div>



        </div>

      </div>

      {/* script tag */}


    </div>
  )
}

export default Settings






