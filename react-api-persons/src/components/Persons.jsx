import PropTypes from "prop-types";
const Persons = (props) => {
    const{persons}=props;
  return (
    <>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
    {
      persons.map((person,idx)=>(
        <>
        {console.log(person)}
        <div key={idx} style={{marginRight:"20px", marginBottom:"20px",textAlign:'center', border:'1px solid grey',width:'250px',maxHeight:'500px',borderRadius:'8px',display:'flex',flexDirection:'column', backgroundColor:'RGB(250,250,250)'}}>
              <h2>{person.id}.{person.firstname}</h2>
              <h3>{person.lastname}</h3>
              <span style={{textAlign:'left',paddingLeft:'20px'}}>
              <h4>Details:</h4>
              <p>Gender: {person.gender}</p>
              <p>Birthday: {person.birthday}</p>
              <p>E-mail: {person.email}</p>
              <p>Phone: {person.website}</p>
            
              <p>Address: </p>
              <p style={{textAlign:'left',paddingLeft:'40px'}}>{person.address.street}</p>
              <p style={{textAlign:'left',paddingLeft:'40px'}}>{person.address.city}</p>
              <p style={{textAlign:'left',paddingLeft:'40px'}}>{person.address.country}</p>
              
              
              </span>
              
              
        </div>
        </>
        
      ))
    }
    </div>
        
    </>
    
  )
}

export default Persons
Persons.propTypes = {
    persons: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        firstname: PropTypes.string,
        lastname: PropTypes.string,
        phone: PropTypes.string,
        email:PropTypes.string,
        birthday:PropTypes.string,
        address:PropTypes.object,
        gender:PropTypes.string,
        website:PropTypes.string,
        image:PropTypes.string,
        

      })
    ).isRequired,
  };