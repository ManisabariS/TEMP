import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(0);
  const [total, setTotal] = useState(0);
  const [visibility, setVisibility] =useState(false)

  function increment() {
    setData(data + 1);
  }

  function reset(i) {
    setData(i);
  }

  function showTotal() {
    setVisibility(true);
    setTotal(data);
    setTimeout(()=>setVisibility(false),300);
  }
  function print(){
    console.log("Print function is executed");
  }
  return (
    <>
      <h1><span><pre>Data: {data}      </pre> </span>
      {visibility && (<span>Total: {total}</span>)}</h1>
      <button onClick={increment}>Add</button>
      <button onClick={() => reset(0)}>Reset</button>
      <button onClick={showTotal}>Show Total</button>
      
      <button onClick={print}>print</button>

      

    </>
  );
}

export default App;
