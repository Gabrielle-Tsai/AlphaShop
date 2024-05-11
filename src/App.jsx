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

function StepsPanel() {
  const [step, setStep] = useState(1)

  function handlePrev() {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  return (
    <div className='stepsPanel'>
      <StepProgress />
      <Step1 isActive={step === 1}/>
      <Step2 isActive={step === 2}/>
      <Step3 isActive={step === 3}/>
      <Cart />
      <ProgressControl 
        onPrev={handlePrev}
        onNext={handleNext}
        step={step}
      />
    </div>
  )
}

function App() {

  return (
    <Main>
      <h2>結帳</h2>
        <StepsPanel>
        </StepsPanel>
    </Main>
  )
}

export default App
