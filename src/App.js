import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import FreeCourseSection from "./pages/FreeCourses";
import ProCourseSection from "./pages/ProCourses";
import CourseBundles from "./pages/CourseBundles";
import { About } from "./pages/About";
import { Product } from "./pages/Product";
import { Contact } from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/free-courses",
    element: <FreeCourseSection />,
  },
  {
    path: "/pro-courses",
    element: <ProCourseSection />,
  },
  {
    path: "/course-bundles",
    element: <CourseBundles />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
