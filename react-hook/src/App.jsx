import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([0]); // Array to manage multiple data sets
  const [total, setTotal] = useState(0);
  const [visibility, setVisibility] = useState(false);
  const count = useRef(0); // Persistent counter across renders

  // Runs only once after the component mounts
  useEffect(() => {
    count.current++;
    console.log(`Component mounted successfully.. Count: ${count.current}`);
    getDataFromApi()
  }, []);

  // Increment value for a specific data index
  function increment(index) {
    setData(prevData => {
      
      const updatedData = [...prevData];
      updatedData[index]++;
      return updatedData;
    });
  }

  // Reset value for a specific data index
  function reset(index) {
    setData(prevData => {
      const updatedData = [...prevData];
      updatedData[index] = 0;
      return updatedData;
    });
  }

  // Show total for a specific data index
  function showTotal(value) {
    setVisibility(true);
    setTotal(value);
    setTimeout(() => setVisibility(false), 1000);
  }

  // Add a new data entry dynamically
  function addNewData() {
    setData(prevData => [...prevData, 0]);
  }

  //fetch data from api
  function getDataFromApi(){
    fetch("https://fakerapi.it/api/v2/persons",{method:"GET"})
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))
  }
  return (
    <>
      {data.map((value, index) => (
        <div key={index}>
          <h1>
            Data{index + 1}: {value} {visibility && <span>Total: {total}</span>}
          </h1>
          <button onClick={() => increment(index)}>Add</button>
          <button onClick={() => reset(index)}>Reset</button>
          <button onClick={() => showTotal(value)}>Show Total</button>
        </div>
      ))}

      
      <button onClick={addNewData}>Add New Data</button>
      
    </>
  );
}

export default App;
