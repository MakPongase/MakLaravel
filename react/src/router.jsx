import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login"; // Ensure this path is correct
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function AppLayout() {
    const location = useLocation();
    const noHeaderFooterPages = ["/login", "/signup"];

    return (
        <div>
            {!noHeaderFooterPages.includes(location.pathname) && <Navbar />}
            <Outlet />
            {!noHeaderFooterPages.includes(location.pathname) && <Footer />}
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

export default router;
