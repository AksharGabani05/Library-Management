import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

const Booksdata = ({ title, inputValue }) => {

    const bookData = useSelector(state => state.book);

    const searchedValue = inputValue ? inputValue.toLowerCase() : '';

    const filterData = bookData.filter((book) => (
        (book.title && book.title.toLowerCase().includes(searchedValue)) ||
        (book.author && book.author.toLowerCase().includes(searchedValue))
    ));

    return (
        <div className='mt-10 p-5'>
            <div className='flex justify-between items-center'>
                <h2 className='font-Poppins font-semibold text-3xl text-gray-800'>{title ? title : 'Popular Books'}</h2>
                {!title && (
                    <Link to='/browsebook'>
                        <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md bg-transparent font-normal hover:bg-blue-600 hover:text-white transition-all duration-300">
                            View More
                        </button>
                    </Link>
                )}

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filterData.map((book) => (
                    <BookCard book={book} key={book.id} />
                ))}
            </div>
        </div>
    )
}

export default Booksdata;
