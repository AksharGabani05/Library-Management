import Categories from "../../Components/Categories";
import Booksdata from "../../Components/Booksdata";
import hero_image from '../../assets/hero_images.png';
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        const heroText = document.getElementById('heroText');
        const heroImage = document.getElementById('heroImage');

        setTimeout(() => {
            heroText.classList.add('opacity-100', 'translate-y-0', 'animate-bounceIn');
            heroImage.classList.add('opacity-100', 'translate-x-0', 'animate-fadeIn');
        }, 300);
    }, []);

    return (
        <div className="bg-gray-50">
            <section id="hero_Section" className="flex md:flex-row flex-col md:justify-between justify-start items-center w-full p-10 gap-10 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50 shadow-lg">
                <div id="heroText" className="w-full md:w-1/2 transition-all duration-1000 ease-in-out opacity-0 transform translate-y-10">
                    <h2 className="md:text-5xl text-4xl font-semibold mb-4 text-gray-800">
                        The Ultimate Library Management Tool
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Manage your entire library with ease using our advanced tools and features.
                    </p>
                    <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all duration-300">
                        Explore Now
                    </button>
                </div>
                <img id="heroImage" src={hero_image} alt="hero_image"
                    className="w-full md:w-1/3 h-auto transition-all duration-1000 ease-in-out opacity-0 transform translate-x-10 shadow-lg rounded-md" />
            </section>
            <Categories />
            <Booksdata />
        </div>
    );
};

export default Home;
