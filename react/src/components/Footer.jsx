// components/Footer.jsx
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4">
            {" "}
            {/* Changed to dark gray/black */}
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Your Company. All rights
                    reserved.
                </p>
                <div className="mt-2">
                    <a
                        href="#"
                        className="hover:text-gray-300 transition duration-300 mx-2"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="#"
                        className="hover:text-gray-300 transition duration-300 mx-2"
                    >
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
