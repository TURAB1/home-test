import { Routes, Route } from "react-router-dom";
import React from 'react'
import Login from "../pages/Login/Login";
import FaultCar from "../pages/CarHealth/FaultCar";
import Battery from "../pages/Battery/Battery";
import Notice from "../pages/Notice/Notice";
import Settings from "../pages/Settings/Settings";
import Fault from "../pages/CarHealth/Diagnosis/Diagnosis";
import PerfectCar from "../pages/CarHealth/PerfectCar";
import NoCar from "../pages/CarHealth/NoCar";
import Diagnosis from "../pages/CarHealth/Diagnosis/Diagnosis";
import SensorDiagnosis from "../pages/CarHealth/Diagnosis/SensorDiagnosis";
import RealTimeDiagnosis from "../pages/CarHealth/RealTimeDiagnosis/RealTimeDiagnosis";
import RealTimeDiagnosing from "../pages/CarHealth/RealTimeDiagnosis/RealTimeDiagnosing";
import RealTimeDiagnosisResult from "../pages/CarHealth/RealTimeDiagnosis/RealTimeDiagnosisResult";
import UsageHistory from "../pages/Battery/UsageHistory/UsageHistory";
import ChargingHistory from "../pages/Battery/ChargingHistory/ChargingHistory";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="faultCar" element={<FaultCar />} />
      <Route path="perfectCar" element={<PerfectCar />} />
      <Route path="noCar" element={<NoCar />} />
      <Route path="battery" element={<Battery />} />
      <Route path="notice" element={<Notice />} />
      <Route path="settings" element={<Settings />} />
      <Route path="health/diagnosis" element={<Diagnosis />} />
      <Route path="health/sensorDiagnosis" element={<SensorDiagnosis />} />
      <Route path="health/realTimeDiagnosis" element={<RealTimeDiagnosis />} />

      <Route path="perfectCar/health/realTimeDiagnosis" element={<RealTimeDiagnosis />} />
      <Route path="faultCar/health/realTimeDiagnosis" element={<RealTimeDiagnosis />} />

      <Route path="health/realTimeDiagnosing" element={<RealTimeDiagnosing />} />

      <Route path="perfectCar/health/realTimeDiagnosis/health/realTimeDiagnosing" element={<RealTimeDiagnosing />} />
      <Route path="faultCar/health/realTimeDiagnosis/health/realTimeDiagnosing" element={<RealTimeDiagnosing />} />

      <Route path="health/realTimeDiagnosisResult" element={<RealTimeDiagnosisResult />} />
       <Route path="battery/usageHistory" element={<UsageHistory />} />
       <Route path="battery/chargingHistory" element={<ChargingHistory />} />
     
      
    </Routes>
  )
}

export default AppRoutes
