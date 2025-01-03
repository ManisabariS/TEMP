import PropTypes from 'prop-types';

function Person(props){
    const {eachPerson} = props;
  return (
    <div className='person-card'>
      {console.log('Data :',eachPerson)}
      <h1>{eachPerson.firstname}</h1>
      <p>{eachPerson.lastname}</p>
    </div>
  )
}

export default Person


Person.propTypes = {
  eachPerson: PropTypes.object.isRequired, // Use lowercase 'object'
};
