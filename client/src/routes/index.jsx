import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// Import layout and components
import Layout from "../layout/Layout";
import Loading from "../components/Loading";

// Lazy loading function with Suspense
const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

// Routes Configuration
export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/signup", element: <SignUp /> },
        { path: "/login", element: <Login /> },
        { path: "/wishlist", element: <Wishlist /> },
      ],
    },
    // {
    //   path: "/login",
    //   element: isAuthenticated() ? (
    //     <Navigate to="/dashboard/developer" replace />
    //   ) : (
    //     <Login />
    //   ),
    // },

    { path: "*", element: <Page404 /> },
  ]);
}

const Home = Loadable(lazy(() => import("../pages/Home")));
const About = Loadable(lazy(() => import("../pages/About")));
const Contact = Loadable(lazy(() => import("../pages/Contact")));
const SignUp = Loadable(lazy(() => import("../pages/Signup")));
const Page404 = Loadable(lazy(() => import("../pages/Error")));
const Login = Loadable(lazy(() => import("../pages/Login")));
const Wishlist = Loadable(lazy(() => import("../pages/Wishlist")));
