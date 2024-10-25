import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    

    return (
        <nav className="bg-white opacity-70 text-black py-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="text-xl font-semibold">WeatherApp</div>
                {/* Hamburger Icon */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
                {/* Links */}
                <ul className={`lg:flex lg:flex-row lg:space-x-12 justify-end flex-col items-center text-center absolute lg:static lg:bg-transparent bg-black lg:w-auto w-full lg:py-0 py-5 lg:z-auto z-0 left-0 transition-all ease-in duration-1000 ${isOpen ? "top-16" : "top-[-300px]"} space-y-5 lg:space-y-0`}>
                    <li>
                        <Link to="/" className="hover:text-blue-500">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-blue-500">About</Link>
                    </li>
                    <li className="relative group">
                        <Link to="/services" className="hover:text-blue-500">Services</Link>
                        {/* Dropdown menu */}
                        <ul className="w-52 absolute top-4 left-0 hidden mt-2 bg-white border border-gray-200 rounded-md shadow-lg group-hover:block z-50">
                            <li className="px-4 py-2 hover:text-white hover:bg-blue-500">
                                <Link to="/current-weather">Current weather</Link>
                            </li>
                            <li className="px-4 py-2 hover:text-white hover:bg-blue-500">
                                <Link to="/air-quality">Air quality</Link>
                            </li>
                            <li className="px-4 py-2 hover:text-white hover:bg-blue-500">
                                <Link to="/disaster-detection">Disaster detection</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/recommendations" className="hover:text-blue-500">Get recommendations</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-blue-500">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
