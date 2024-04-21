import { useState } from 'react'
import './App.css'
import StepProgress from './components/Step/StepProgress'
import { Step1, Step2, Step3 } from './components/Step/Steps'
import ProgressControl from './components/Step/ProgressControl'
import Cart from './components/Cart'

function Main({children}) {
  return (
    <div id="main-app">
      {children}
    </div>
  )
}

function StepsPanel({children}) {
  return (
    <div className='stepsPanel'>
      {children}
    </div>
  )
}

function App() {

  return (
    <Main>
      <h2>結帳</h2>
        <StepsPanel>
          <StepProgress />
          <Step1 />
          <Cart />
          <ProgressControl />
        </StepsPanel>
    </Main>
  )
}

export default App
