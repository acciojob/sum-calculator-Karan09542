import React from 'react'

const SumCalculator = () => {
const [sum, setSum] = useState(0);
  return (
    <div>
        <input type="number" value={sum} onChange={(e) => setSum(prev => prev + Number(e.target.value))} />
        <p>Sum: {sum}</p>
    </div>
  )
}

export default SumCalculator