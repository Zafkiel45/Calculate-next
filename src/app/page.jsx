'use client'

import Buttons from './layout/buttons';
import Calc from './layout/calc';
import Style from './styles/calculator.module.scss'
import { MathContext } from './layout/context';
import { useState, useRef } from 'react'

export default function Home() {

  const [expression, setExpression] = useState('')
  const InputRef = useRef(null)

  return (
    <MathContext.Provider value={{expression, setExpression, InputRef}}>
      <div className={Style.calculadora}>
          <div className={Style.inputContainer}>
            <Calc/>
          </div>
          <div className={Style.buttonsContainer}>
            <Buttons/>
          </div>
      </div>
    </MathContext.Provider>
  )
}
