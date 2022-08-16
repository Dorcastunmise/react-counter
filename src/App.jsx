import React from 'react';
import Count from './Count';


function App() {
  const [count, setCount] = React.useState(0)

  function add() {
    setCount(prevCount => prevCount + 1)
}

function subtract() {
    setCount(prevCount => prevCount - 1)
}
 const valueOfCounter = count


return (
    <div className="counter">
      <h2><i>The COUNTER</i></h2>
        <button className="counter--minus" disabled={valueOfCounter === 0 ? true : false} onClick={subtract}>-</button>
        <Count number={count}/>
        <button className="counter--plus" onClick={add}>+</button>
    </div>
)
}

export default App