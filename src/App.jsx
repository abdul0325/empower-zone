import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./components/ContactCom/Cantact";
import Blogs from "./Pages/Blogs";


const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      {path:"/about",element:<About/>},
      {path:"/services",element:<Services/>},
      {path:"/contact",element:<Contact/>},
      {path:"/blogs",element:<Blogs/>},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
