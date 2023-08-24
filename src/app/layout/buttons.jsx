'use client'
import { useContext } from "react"
import { MathContext } from "./context"
import Image from "next/image";
import Svg from '../../../public/backspace-fill.svg'
import Style from '../styles/calculator.module.scss'
import { evaluate } from "mathjs";

export default function Buttons() {

  const {expression,setExpression, InputRef} = useContext(MathContext);
  const Back = () => {
    if(expression.length > 0) {
      const novaExpressão = expression.slice(0, -1);
      console.log(typeof novaExpressão)
      setExpression(novaExpressão)
    }
  }
  const Calculate = () => {
    let result = evaluate(InputRef.current.value).toString()
    console.log(typeof result)
    setExpression(result)
  }

  return (
    <>
      <button 
        className={Style.buttonNumber} 
        onClick={() => setExpression(expression +'(')}>{"("}</button>
        {console.log(typeof expression)}
      <button 
        className={Style.buttonNumber} 
        onClick={() => setExpression(expression +')')}>{")"}</button>
      <button 
        className={Style.buttonNumber} 
        onClick={Back}><Image className={Style.svg} src={Svg}/></button>
      <button 
        className={`${Style.buttonNumber} ${Style.operador}`} 
        onClick={() => setExpression(expression + '+')}>+</button>
      <button 
        className={Style.buttonNumber} 
        onClick={() => setExpression(expression + '1')}>1</button>
      <button 
        className={Style.buttonNumber} 
        onClick={() => setExpression(expression + '2')}>2</button>
      <button 
        className={Style.buttonNumber} 
        onClick={() => setExpression(expression + '3')}>3</button>
      <button 
        className={`${Style.buttonNumber} ${Style.operador}`} 
        onClick={() => setExpression(expression + '-')}>-</button>
      <button 
        className={Style.buttonNumber} 
        onClick={() => setExpression(expression + '4')}>4</button>
      <button 
        className={Style.buttonNumber} 
        onClick={() => setExpression(expression + '5')}>5</button>
      <button 
        className={Style.buttonNumber} 
        onClick={() => setExpression(expression + '6')}>6</button>
      <button 
        className={`${Style.buttonNumber} ${Style.operador}`} 
        onClick={() => setExpression(expression + '/')}>/</button>
      <button 
        className={Style.buttonNumber} 
        onClick={() => setExpression(expression + '7')}>7</button>
      <button 
        className={Style.buttonNumber} 
        onClick={() => setExpression(expression + '8')}>8</button>
      <button 
        className={Style.buttonNumber} 
        onClick={() => setExpression(expression + '9')}>9</button>
      <button 
        className={`${Style.buttonNumber} ${Style.operador}`} 
        onClick={() => setExpression(expression + '*')}>*</button>
      <button 
        className={Style.buttonNumber} 
        onClick={() => setExpression(expression + '.')}>.</button>
      <button 
        className={Style.buttonNumber} 
        onClick={() => setExpression(expression + '0')}>0</button>
      <button 
        className={Style.buttonNumber} 
        onClick={() => setExpression('')}>C</button>
      <button 
        className={`${Style.buttonNumber} ${Style.igualdade}`} 
        onClick={Calculate}>=</button>
    </>
  )
}