import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const navigate = useNavigate();

    // List of categories
    const categories = [
        { name: "Science", value: "/books/science" },
        { name: "Fiction", value: "/books/fiction" },
        { name: "Non-Fiction", value: "/books/non_fiction" },
        { name: "Fantasy", value: "/books/fantacy" },
        { name: "Crime", value: "/books/crime" },
    ];

    // Handle category selection
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // Navigate to the selected category
    const handleNavigate = () => {
        if (selectedCategory) {
            navigate(selectedCategory);
        } else {
            alert("Please select a category");
        }
    };

    return (
        <div className="md:mt-12 mt-8 bg-gradient-to-r from-gray-50 via-gray-100 to-white flex flex-col justify-center items-center py-12 shadow-lg rounded-lg">
            <h2 className="font-bold text-4xl mb-8 text-gray-900">Browse Categories</h2>

            <div className="flex flex-col items-center w-full max-w-md">
                {/* Dropdown */}
                <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="w-full px-4 py-3 mb-6 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="" disabled>
                        Select a category
                    </option>
                    {categories.map((category, index) => (
                        <option key={index} value={category.value}>
                            {category.name}
                        </option>
                    ))}
                </select>

                {/* Navigate Button */}
                <button
                    onClick={handleNavigate}
                    className="px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                    Go to Category
                </button>
            </div>
        </div>
    );
};

export default Categories;
