// App.jsx
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home"; // ✅ usually Pages are in /pages not /assets
import About from "./Pages/About";
import Contact from "./components/ContactCom/Cantact";


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
      {path:"/about",element:<About/>},
      {path:"/contact",element:<Contact/>},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
