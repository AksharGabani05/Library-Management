import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Booksdata from '../../Components/Booksdata';
import left_icon from '../../assets/left_icon.svg';

const BookDetail = () => {
  const { id } = useParams();
  const bookDatas = useSelector(state => state.book);
  const book_data = bookDatas.find(book => book.id === id);

  return (
    <section className="p-5 max-w-screen-lg mx-auto">
     
      <Link to="/browsebook">
        <button className="flex items-center mb-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          <img src={left_icon} alt="Back" className="w-5 h-5 mr-2" />
          Back to Browse Books
        </button>
      </Link>

     
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-6 md:p-10 gap-8">
        
        <div className="flex-shrink-0">
          <img
            src={book_data.img}
            alt="book cover"
            className="h-80 w-60 md:h-96 md:w-72 object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="flex flex-col justify-between">
          <h2 className="font-semibold text-3xl md:text-4xl text-gray-800 mb-4">{book_data.title}</h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">{book_data.description}</p>
          <div className="mb-4">
            <span className="px-3 py-1 bg-blue-600 text-white text-sm md:text-base font-medium rounded-md">
              Author: {book_data.author}
            </span>
          </div>
          <p className="text-orange-600 text-sm md:text-lg font-semibold mb-4">
            Ratings: {book_data.rating}+
          </p>

         
          <Link to={`/buy/${book_data.id}`}>
            <button className="px-6 py-3 bg-green-600 text-white text-sm md:text-base font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300">
              Buy Now
            </button>
          </Link>
        </div>
      </div>

      
      <div className="mt-10">
        <Booksdata title="See Other Books" />
      </div>
    </section>
  );
};

export default BookDetail;
