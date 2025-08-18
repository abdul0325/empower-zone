// App.jsx
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home"; // ✅ usually Pages are in /pages not /assets
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import BlogDetail from "./components/Blogs/BlogDetail";


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
      { path: "/about", element: <About /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/blogDetail/:id", element: <BlogDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
