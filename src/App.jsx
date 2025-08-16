// App.jsx
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home"; // ✅ usually Pages are in /pages not /assets

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// ✅ Define routes
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      // You can add more routes here
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
