import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './components/Device/Device'
import Watch from './components/Watch/Watch'

function App() {
  

  return (
    <div className='App'>
      {/* <Device name ='Iphone' price ='120000'></Device>
      <Device name ='MackBook' price ='150000'></Device>
      <Device name ='Samsung' price ='100000'></Device> */}
      {/* <h1>Vite + React</h1> */}
      <Watch></Watch>
    </div>
  )
}

export default App
