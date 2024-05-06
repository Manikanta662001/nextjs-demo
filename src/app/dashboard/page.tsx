import React from 'react'
import LineChart from './line-chart'
import Button from '@/components/Button'

function BarChart() {
  return (
    <div>Bar Chart</div>
  )
}
export default function Dashboard(){
    return <>
    <h1>This is Dashboard Page</h1>
    <BarChart/>
    <LineChart/>
    <Button/>
    </>
}