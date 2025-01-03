import { useEffect, useState } from "react";

import './App.css'
import Books from "./components/Books";
function App()
{
  const [stBooks,setStBooks] = useState([]);

  useEffect(()=>{
    fetchData('https://jsonplaceholder.typicode.com/posts')
  },[])

  async function fetchData (url){
    try{
      const response = await fetch (url)
      const gatheredData = await response.json()
      if(!response.ok)
      {
        console.error('No response!')
      }
      setStBooks(gatheredData)
    }
    catch(error)
    {
      console.error('Catch error: ', error)
    }
  }


  return(
    <>
      <h1>List of Books</h1>
      <Books stBooks={stBooks}/>
    </>
  )

}
export default App;