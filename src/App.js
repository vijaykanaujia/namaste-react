import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import store from "./Utils/store";
import Cart from "./components/Cart";

//chunking
//code splitting
//dynamic bundling
//lazy loading
//on demand loading
//dynamic import

const Instamart = lazy(() => import("./components/Instamart"));
// upon on demand loading -> upon render -> suspend loading
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "override user",
    email: "override_user@example.com",
  });
  return (
    <div className="container">
      <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <header>
          <Header />
        </header>
        <Outlet />
        <footer>
          <Footer />
        </footer>
      </UserContext.Provider>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback="...Loading">
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
