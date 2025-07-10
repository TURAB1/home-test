import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import './settings.css'

const ToggleItem = ({ label, icon, isOn, onToggle, color }) => {
  return (
    <div className="toggle-item">
      <div className="toggle-label">
        <span className="toggle-icon">{icon}</span>
        <span>{label}</span>
      </div>
      <div className={`switch ${isOn ? "on" : ""} ${color || ""}`} onClick={onToggle}>
        <div className="switch-handle"></div>
      </div>
    </div>
  );
};
const Settings = () => {
  const [toggles, setToggles] = useState({
    enterExit: true,
    lowVoltage: false,
    detach: false,
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
              icon=""
              isOn={toggles.enterExit}
              onToggle={() => toggleSwitch("enterExit")}
              color="red"
            />
            <ToggleItem
              label="저전압 경고"
              icon=""
              isOn={toggles.lowVoltage}
              onToggle={() => toggleSwitch("lowVoltage")}
            />
            <ToggleItem
              label="단말 탈부착 감지"
              icon=""
              isOn={toggles.detach}
              onToggle={() => toggleSwitch("detach")}
            />
          </div>



        </div>

      </div>

      {/* script tag */}


    </div>
  )
}

export default Settings



// import React, { useState, useEffect, useRef } from 'react';
// import './settings.css'; // Externalize the provided CSS

// const ToggleSwitch = ({ defaultOn = false }) => {
//   const [isOn, setIsOn] = useState(defaultOn);
//   return (
//     <div
//       className={`toggle-wrapper ${isOn ? 'on' : 'off'}`}
//       onClick={() => setIsOn(!isOn)}
//     >
//       <div className="toggle-track">
//         <div className="toggle-thumb"></div>
//       </div>
//     </div>
//   );
// };

// const GaugeSlider = ({ minDefault = 30, maxDefault = 80 }) => {
//   const wrapperRef = useRef(null);
//   const minHandle = useRef(null);
//   const maxHandle = useRef(null);
//   const fillRef = useRef(null);

//   useEffect(() => {
//     const wrapper = wrapperRef.current;
//     const barWidth = wrapper.offsetWidth;

//     let dragging = null;

//     const setPosition = (percent, handle) => {
//       const clamped = Math.max(0, Math.min(100, percent));
//       handle.style.left = `${clamped}%`;
//       return clamped;
//     };

//     const updateFillBar = () => {
//       const minLeft = parseFloat(minHandle.current.style.left);
//       const maxLeft = parseFloat(maxHandle.current.style.left);
//       const start = Math.min(minLeft, maxLeft);
//       const end = Math.max(minLeft, maxLeft);
//       fillRef.current.style.left = `${start}%`;
//       fillRef.current.style.width = `${end - start}%`;
//     };

//     const onMouseMove = (e) => {
//       if (!dragging) return;
//       const rect = wrapper.getBoundingClientRect();
//       const offsetX = e.clientX - rect.left;
//       const percent = (offsetX / barWidth) * 100;
//       setPosition(percent, dragging);
//       updateFillBar();
//     };

//     const onMouseUp = () => {
//       dragging = null;
//       document.removeEventListener('mousemove', onMouseMove);
//       document.removeEventListener('mouseup', onMouseUp);
//     };

//     [minHandle.current, maxHandle.current].forEach((handle) => {
//       handle.addEventListener('mousedown', (e) => {
//         e.preventDefault();
//         dragging = handle;
//         document.addEventListener('mousemove', onMouseMove);
//         document.addEventListener('mouseup', onMouseUp);
//       });
//     });

//     setPosition(minDefault, minHandle.current);
//     setPosition(maxDefault, maxHandle.current);
//     updateFillBar();
//   }, [minDefault, maxDefault]);

//   return (
//     <div className="gauge-bar-wrapper" ref={wrapperRef}>
//       <div className="gauge-fill-bar" ref={fillRef}></div>
//       <div className="gauge-indicator indicator-min" ref={minHandle}></div>
//       <div className="gauge-indicator indicator-max" ref={maxHandle}></div>
//     </div>
//   );
// };

// const NotificationCard = ({ iconClass, text, hasGauge = false, min = 0, max = 100, desc }) => (
//   <div className="card-notification">
//     <div className="card-header">
//       <div className="card-title-area">
//         <div className={iconClass}></div>
//         <span className="card-title">{text}</span>
//       </div>
//       <ToggleSwitch />
//     </div>
//     {hasGauge && (
//       <>
//         <div className="gauge-section">
//           <span className="gauge-min">{min}</span>
//           <GaugeSlider minDefault={30} maxDefault={80} />
//           <span className="gauge-max">{max}</span>
//         </div>
//         <div className="description-box">
//           <span className="description-text">{desc}</span>
//         </div>
//       </>
//     )}
//   </div>
// );

// const Settings = () => {
//   return (
//     <div className="container">
//       <div className="header-wrapper">
//         <div className="header-background"></div>
//         <div className="clock-box">
//           <span className="clock-hour">03:10</span>
//           <span className="clock-ampm">PM</span>
//         </div>
//         <div className="signal-icon"></div>
//         <div className="wifi-icon"></div>
//         <div className="battery-icon"></div>
//       </div>

//       <nav className="sidebar-nav">
//         <article className="nav-item-health"></article>
//         <article className="nav-item-battery"></article>
//         <article className="nav-item-notice"></article>
//         <article className="nav-item-setting"></article>
//       </nav>

//       <div className="page-container">
//         <header className="header">
//           <div className="header-left">
//             <div className="account-label">
//               <span className="label-text">계정</span>
//             </div>
//           </div>
//           <div className="header-right">
//             <div className="user-info">
//               <div className="profile-icon"></div>
//               <span className="user-email">test123@test123.com</span>
//               <div className="dropdown-icon"></div>
//             </div>
//             <div className="logout-button">
//               <div className="logout-icon"></div>
//               <span className="logout-text">로그아웃</span>
//             </div>
//           </div>
//         </header>

//         <div className="notification-page">
//           <div className="header-wrapper">
//             <div className="header-logo-box">
//               <div className="header-logo">
//                 <span className="header-title">알림</span>
//               </div>
//             </div>
//           </div>

//           {/* Simple Toggles */}
//           {[
//             { icon: 'icon-wrapper-entryexit', text: '차량 진입/이탈' },
//             { icon: 'icon-wrapper-voltage', text: '저전압 경고' },
//             { icon: 'icon-wrapper-detach', text: '단말 탈부착 감지' },
//             { icon: 'icon-wrapper-logbook', text: '차계부 주기경고' },
//             { icon: 'icon-wrapper-replace', text: '차계부 부품교체' },
//             { icon: 'icon-wrapper-danger', text: '위험운전' },
//             { icon: 'icon-wrapper-charge-start', text: '충전시작' },
//             { icon: 'icon-wrapper-charge-end', text: '충전종료' },
//           ].map((item, i) => (
//             <div className="notification-box" key={i}>
//               <div className="notification-content">
//                 <div className="notification-inner">
//                   <div className={item.icon}></div>
//                   <span className="notification-text">{item.text}</span>
//                 </div>
//                 <ToggleSwitch />
//               </div>
//             </div>
//           ))}

//           {/* Cards with Gauge Sliders */}
//           <div className="notification-background">
//             <NotificationCard
//               iconClass="icon-container-level"
//               text="배터리 잔량 알림"
//               hasGauge={true}
//               min={0}
//               max={100}
//               desc="배터리 잔량이 [30%] 미만이거나, [80%] 초과 시 알림을 전송합니다"
//             />
//             <NotificationCard
//               iconClass="icon-container-temperature"
//               text="배터리 온도 알림"
//               hasGauge={true}
//               min={-40}
//               max={100}
//               desc="온도가 [10℃] 미만이거나, [40℃] 초과 시 알림을 전송합니다"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Settings;



