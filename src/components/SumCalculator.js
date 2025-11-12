import React, { useState, useEffect } from 'react'

const SumCalculator = () => {
const [value, setValue] = useState([0,0]);

function onChange(e){
  const value = parseInt(e.target.value);
  setValue(prev => [value, prev[1]])
}
useEffect(()=>{
    setValue(prev => [prev[0], prev[1] + prev[0]])
},[value[0]])
  return (
    <div>
      <h1>Sum Calculator</h1>
        <input type="number" value={value[0]} onChange={onChange} />
        <p>Sum: {value[1]}</p>
    </div>
  )
}

export default SumCalculator