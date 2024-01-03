import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './shared/card/Card'

function App() {
  const now = new Date()
  const hour = now.getHours()
  const minutes = now.getMinutes()
  const secs = now.getSeconds()
  const day = now.getFullYear()
  return(
    <>
    <h1>HAPPY NEW YEAR.The time is {hour}-{minutes}-{secs} in the year {day}</h1>
    
    </>
  )
}

export default App
