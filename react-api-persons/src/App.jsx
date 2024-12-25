import { useEffect, useState } from "react";
import "./App.css";
import Persons from "./components/Persons";

function App() {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  function getData() {
    try {
      fetch("https://fakerapi.it/api/v2/persons", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((json) => {
          if(json){
            setPersons(json.data);
          }
          else{
            console.log("Error Data fetching")
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Persons-Api</h2>
      <Persons persons={persons}/>
    </>
  );
}

export default App;



