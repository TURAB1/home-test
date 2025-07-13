import React from 'react'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import './notice.css'
const Notice = () => {
  return (
    <div className="container">
      <Header />
      <NavBar healthClass="nav-item-health" batteryClass="nav-item-battery" noticeClass="nav-item-notice-on" settingClass="nav-item-setting" />


      <section className="notification-container">
        <div className="overlay"></div>
        <article className="notification-box">
          <header className="notification-header">
            <h2 className="notification-title">알림</h2>
          </header>

          <section className="notification-item">
            <time className="notification-time">오늘 오전 07:50</time>


            <div className="noti-message">
              <span className="message">저전압 경고</span>
            </div>
            <div className="heading-label">현재값(2kWh)이 기준값(11.6kWh) 미만입니다.</div>

            {/* <div className="notification-content">
              <h3 className="notification-heading">저전압 경고</h3>
              <p className="notification-message">현재값(2kWh)이 기준값(11.6kWh) 미만입니다.</p>
            </div> */}
          </section>

          <section className="notification-item">
            <time className="notification-time">오늘 오전 07:45</time>
            <div className="noti-message">
              <span className="message">단말 탈부착 감지</span>
            </div>
            <div className="heading-label">단말기 탈부착이 감지되었습니다</div>
            {/* <div className="notification-content">
              <h3 className="notification-heading">단말 탈부착 감지</h3>
              <p className="notification-message">단말기 탈부착이 감지되었습니다.</p>
            </div> */}
          </section>

          <section className="notification-item">
            <time className="notification-time">오늘 오전 07:21</time>
            <div className="noti-message">
              <span className="message">위험운전</span>
            </div>
            <div className="heading-label">급가속 1회 금감속 0회</div>
            {/* <div className="notification-content">
              <h3 className="notification-heading">위험운전</h3>
              <p className="notification-message">급가속 1회 금감속 0회</p>
            </div> */}
          </section>

          <section className="notification-item">
            <time className="notification-time">오늘 오전 07:00</time>
            <div className="noti-message">
              <span className="message">배터리 온도</span>
            </div>
            <div className="heading-label">배터리 온도가 낮습니다. 현재값 0℃ | 기준값 10℃</div>
            {/* <div className="notification-content">
              <h3 className="notification-heading">배터리 온도</h3>
              <p className="notification-message">배터리 온도가 낮습니다. 현재값 0℃ | 기준값 10℃</p>
            </div> */}
          </section>


        </article>
      
        <footer className="notification-footer">
          <div className="notification-hint">알림은 일주일간 보관됩니다.</div>
        </footer>
      </section>
    </div>
  )
}

export default Notice