import { Link } from "react-router-dom"; // Import Link from react-router-dom
import BusinessImage from "../assets/entrepreneur-business-corporate-office.jpg"; // Import your image

export default function SignUp() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Left Column: Sign Up Form */}
                <div className="w-full md:w-1/2 p-8 space-y-6">
                    <a
                        href="/"
                        className="text-gray-600 hover:underline mb-4 block"
                    >
                        &lt; Home
                    </a>
                    <h2 className="text-3xl font-bold text-center text-gray-800">
                        Sign Up
                    </h2>
                    <form className="space-y-4">
                        <div>
                            <label
                                htmlFor="username"
                                className="block mb-2 text-sm font-medium text-gray-600"
                            >
                                Username:
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                                required
                                placeholder="Enter your username"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-600"
                            >
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                                required
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-600"
                            >
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                                required
                                placeholder="Create a password"
                            />
                        </div>
                        <Link
                            to="/dashboard" // Change this to your target route after successful signup
                            className="block w-full px-4 py-3 text-center text-white bg-gray-600 rounded-lg hover:bg-gray-500 focus:outline-none focus:bg-gray-500 transition duration-300"
                        >
                            Sign Up
                        </Link>
                    </form>
                    <p className="text-sm text-center text-gray-600">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-gray-600 hover:underline"
                        >
                            Log In
                        </Link>
                    </p>
                </div>

                {/* Right Column: Image Section */}
                <div className="hidden md:block md:w-1/2">
                    <img
                        src={BusinessImage}
                        alt="Sign Up Illustration"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
}
