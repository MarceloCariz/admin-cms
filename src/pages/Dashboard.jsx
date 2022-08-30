import React from 'react'
import { DailyChart } from '../components/dashboard-components/DailyChart'

export const Dashboard = () => {
  return (
    <div className="dashboard">
        <h1>Métricas Visitas Totém</h1>
        
      
      <DailyChart />
    </div>
  )
}
