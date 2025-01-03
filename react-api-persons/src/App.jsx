import { useEffect, useState } from "react";
import Person from "./components/Person";
import './App.css'
function App()
{
  const [dbData,setDbData] = useState([]);
  useEffect(() => {
    getDataFromApi('https://fakerapi.it/api/v2/persons')

},[]); // Runs whenever dbData changes

  
  async function getDataFromApi(url){
    try{
      const response = await fetch(url);
      // console.log('Gathered response from API: \n ',response);
      const gatheredData = await response.json();
      // console.log('Gathered data from API: \n ',gatheredData);
      if(gatheredData.data)
      {
        setDbData(gatheredData.data);
      }
    }
    catch(error){
      console.error('Program generated an error: ', error)
    }
  
  }
  return(
    <>
      {console.table(dbData)}
      {dbData.map((eachPerson)=>{
        return(
          <Person key={eachPerson.id} eachPerson={eachPerson}/>
        )
      })}

    </>
  )

}
export default App;