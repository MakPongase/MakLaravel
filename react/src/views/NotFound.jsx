import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
    const location = useLocation(); // Get the current location
    const path = location.pathname.replace(/^\//, ""); // Remove leading slash
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center p-8 ">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                    Page Not Found
                </h2>
                <p className="text-gray-600 mb-6">
                    Whoops! We dont have{" "}
                    <span className="text-gray-800 font-semibold">{path}</span>!
                    Maybe its available on another website?
                </p>
                <Link
                    to="/"
                    className="inline-block px-6 py-3 text-white bg-gray-600 rounded-lg hover:bg-gray-500 transition duration-300"
                >
                    Go to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
