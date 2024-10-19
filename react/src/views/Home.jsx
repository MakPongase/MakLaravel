// src/views/Home.jsx
const Home = () => {
    return (
        <div className="bg-gray-100 flex flex-col">
            {/* Hero Section */}
            <div className="flex flex-col justify-center items-center p-12 bg-gray-800 text-white min-h-[100vh]">
                <h1 className="text-5xl font-bold mb-4">Welcome to MyApp!</h1>
                <p className="text-lg mb-6">
                    Your one-stop solution for all your needs. Explore our
                    features and join our community.
                </p>
                <a
                    href="/signup"
                    className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-500 transition duration-300"
                >
                    Get Started
                </a>
            </div>

            {/* Features Section */}
            <section className="py-16 px-4 bg-gray-200 min-h-[90vh] flex items-center">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        Our Features
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="border border-gray-300 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                            <h3 className="font-semibold text-lg mb-2">
                                Feature One
                            </h3>
                            <p className="text-gray-700">
                                Description of feature one goes here. Highlight
                                its benefits.
                            </p>
                        </div>
                        <div className="border border-gray-300 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                            <h3 className="font-semibold text-lg mb-2">
                                Feature Two
                            </h3>
                            <p className="text-gray-700">
                                Description of feature two goes here. Highlight
                                its benefits.
                            </p>
                        </div>
                        <div className="border border-gray-300 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                            <h3 className="font-semibold text-lg mb-2">
                                Feature Three
                            </h3>
                            <p className="text-gray-700">
                                Description of feature three goes here.
                                Highlight its benefits.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-16 px-4 bg-gray-300 min-h-[90vh] flex items-center">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        About Us
                    </h2>
                    <p className="text-lg text-gray-700">
                        We are dedicated to providing the best solutions for our
                        users. Our mission is to simplify processes and enhance
                        productivity through innovative technology.
                    </p>
                </div>
            </section>

            {/* Contact Us Section */}
            <section className="py-16 px-4 bg-gray-200 min-h-[90vh] flex items-center">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        Contact Us
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Have any questions? Feel free to reach out to us!
                    </p>
                    <a
                        href="/contact" // Assuming you have a contact page
                        className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-500 transition duration-300"
                    >
                        Contact Support
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
