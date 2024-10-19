// components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-900 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-white font-bold text-lg">
                    <Link to="/">Mak Company</Link>{" "}
                    {/* Replace 'Mak Company' with your app name */}
                </div>
                <ul className="flex space-x-6">
                    <li>
                        <Link
                            to="/"
                            className="text-white hover:text-gray-300 transition duration-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
                        >
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/signup"
                            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
                        >
                            Signup
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
