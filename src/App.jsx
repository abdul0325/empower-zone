import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./components/ContactCom/Cantact";
import Blogs from "./Pages/Blogs";
import BlogDetail from "./components/Blogs/BlogDetail";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./components/policy/PrivacyPolicy";
import TermsOfService from "./components/policy/TermsOfService";
import AccessibilityPage from "./components/policy/AccessibilityPage";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
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
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/blogDetail/:id", element: <BlogDetail /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/terms-of-service", element: <TermsOfService /> },
      { path: "/accessibility", element: <AccessibilityPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
