import React, { useState, useEffect } from 'react'

const SumCalculator = () => {
const [value, setValue] = useState(0);
const [sum, setSum] = useState(0);

useEffect(()=>{
    setSum(prev => prev + value)
},[value])
  return (
    <div>
        <input type="number" value={value} onChange={(e) => setValue(prev => prev + Number(e.target.value))} />
        <h1>Sum: {sum}</h1>
    </div>
  )
}

export default SumCalculator