'use client'
import math from "mathjs";
import Style from '../styles/calculator.module.scss';
import { useContext } from "react"
import { MathContext } from "./context"

export default function Calc() {

  const {expression, InputRef} = useContext(MathContext)

  return(
    <>
      <input
        className={Style.input} 
        type="text" 
        value={expression}
        placeholder="Digite um valor..."
        ref={InputRef}
        readOnly
      />
    </>
  )
}