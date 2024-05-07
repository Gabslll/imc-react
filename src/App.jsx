import { useState } from 'react'

import './App.css'

function App() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState('')

  const calcular = (e) => {
    e.preventDefault()
    const res = Number(peso) / (Number(altura) ** 2)
    setResultado(res)
  }
  
  return (
    <>
      <form className='container'>
        <div >
        <h1>Calculadora IMC</h1>
          <input 
            type="text" className='input'
              placeholder='Digite seu peso' maxLength={4}
              onChange={e => setPeso(e.target.value)}
          />
        </div>
        <div >
          <input 
            type="text" className='input'
              placeholder='Digite sua altura' maxLength={4}
              onChange={e => setAltura(e.target.value)}
          />
        </div>
        <button className='button' onClick={calcular}>Calcular</button>
        <p>Resultado: {resultado.toFixed(2)}</p>
      </form>
    </>
  )
}

export default App
