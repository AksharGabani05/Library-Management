import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../../utils/bookSlice';
import { nanoid } from 'nanoid';

const AddBooks = () => {
  const [error, setError] = useState('');
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    type: '',
    image: null,
    description: '',
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setBookData({
      ...bookData,
      [name]: files ? files[0] : value,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, author, image, description } = bookData;

    if (!title || !author || !image || !description) {
      setError('Please ensure all fields are filled in.');
      return;
    }

    const newBooks = {
      id: nanoid(),
      title: bookData.title,
      img: URL.createObjectURL(bookData.image),
      type: bookData.type,
      author: bookData.author,
      description: bookData.description,
      isNew: true,
    };

    dispatch(addBook(newBooks));
    navigate('/browsebook');
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 p-5'>
      <form className='bg-white shadow-lg rounded-lg p-10 md:w-1/3 w-full' onSubmit={handleSubmit}>
        <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>Add New Book</h2>

        <div className='mb-4'>
          <label className='block text-lg font-semibold text-gray-700 mb-1'>Title</label>
          <input 
            type="text" 
            name='title' 
            value={bookData.title} 
            onChange={handleChange} 
            placeholder='Enter the title of the book' 
            className='w-full h-12 pl-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200' 
          />
        </div>

        <div className='mb-4'>
          <label className='block text-lg font-semibold text-gray-700 mb-1'>Author</label>
          <input 
            type="text" 
            name='author' 
            value={bookData.author} 
            onChange={handleChange} 
            placeholder='Enter the author name' 
            className='w-full h-12 pl-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200' 
          />
        </div>

        <div className='mb-4'>
          <label className='block text-lg font-semibold text-gray-700 mb-1'>Book Type</label>
          <input 
            type="text" 
            name='type' 
            value={bookData.type} 
            onChange={handleChange} 
            placeholder='Enter a book type (e.g., Fantasy, Non-Fiction, Crime, etc.)' 
            className='w-full h-12 pl-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200' 
          />
        </div>

        <div className='mb-4'>
          <label className='block text-lg font-semibold text-gray-700 mb-1'>Description</label>
          <textarea 
            name='description' 
            value={bookData.description} 
            onChange={handleChange} 
            placeholder='Enter a description' 
            className='w-full pl-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200' 
            rows='4'
          ></textarea>
        </div>

        <div className='mb-4'>
          <label className='block text-lg font-semibold text-gray-700 mb-1'>Upload an Image</label>
          <input 
            type="file" 
            name='image' 
            accept='image/*' 
            onChange={handleChange} 
            className='block w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200' 
          />
        </div>

        {error && <p className='text-red-600 text-base mb-4'>{error}</p>}

        <button 
          type='submit' 
          className='w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out'
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBooks;
