import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="relative p-5 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer bg-gradient-to-b from-white to-gray-50">
      {/* Newly Added Badge */}
      {book.isNew && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md font-semibold">
          New
        </span>
      )}

      {/* Book Image */}
      <img
        src={book.img}
        alt="book_image"
        className="w-full h-56 object-cover rounded-lg shadow-sm mb-4"
      />

      {/* Book Title */}
      <h3 className="text-xl font-semibold text-gray-800 truncate mb-2">
        {book.title}
      </h3>

      {/* Author Information */}
      <div className="flex items-center gap-2 mb-3">
        <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-md">
          Author
        </span>
        <p className="text-gray-700 text-sm font-medium">{book.author}</p>
      </div>

      {/* Book Description */}
      <p className="text-gray-600 text-sm mb-4">
        {book.description.length > 70
          ? `${book.description.substring(0, 70)}...`
          : book.description}
      </p>

      {/* Ratings */}
      <div className="flex items-center gap-1 text-yellow-500 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.75L6.075 20.908 7.289 14.404 2.578 9.824 9.116 8.932 12 2.75 14.884 8.932 21.422 9.824 16.711 14.404 17.925 20.908z" />
        </svg>
        <span className="text-sm font-semibold">{book.rating}+</span>
      </div>

      {/* View Details Button */}
      <Link to={`/book/${book.id}`}>
        <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium rounded-md hover:from-blue-700 hover:to-blue-600 transition duration-300">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default BookCard;
