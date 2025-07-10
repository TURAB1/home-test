import React from 'react'
import Header from '../../components/Header/Header'
import './no-car.css'
const NoCar = () => {
    return (
        <div className="container">
            <Header/>
            <div className="no-vehicle-box">
                <div className="no-vehicle-icon"></div>
                <span className="no-vehicle-text">등록된 차량이 없습니다.</span>
            </div>
        </div>
    )
}

export default NoCar