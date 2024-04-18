import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StepProgress from './components/Step/StepProgress'
import { Step1, Step2, Step3 } from './components/Step/Steps'
import ProgressControl from './components/Step/ProgressControl'

function App() {

  return (
    <>
      <StepProgress />
      <Step1 />
      <ProgressControl />
    </>
  )
}

export default App
