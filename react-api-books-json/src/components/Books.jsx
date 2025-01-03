import {PropTypes} from 'prop-types'

function Books(props) {
  const {stBooks} =props;
  
  return (
    <div className="books-container">
      {stBooks.map((book)=>{
        return(
          <>
              <div key={book.id} className='book'>
                  <div className='book-id-container'>
                    <span>ID: {book.id}</span>
                    <span>User ID: {book.userId}</span>
                  </div>
                  <h3>{book.title}</h3>
                  <p className='book-body'>{book.body}</p>
                  <div className='cart-buy-container'>
                    <button>Add to Cart</button>
                    <button>Buy now</button>
                  </div>
              </div>
              
          </>
        )
      })}
    </div>
  )
}

export default Books

Books.propTypes = {
  stBooks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
};

