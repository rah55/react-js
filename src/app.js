import React, { Children, lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Loader from "./components/loader";
import AboutUs from "./components/AboutUs";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const Instamart = lazy(()=>import("./components/Instamart"));

const AppLayout = () => {
  const [user,setUser]= useState({
    name:"rahul",
    email:"rahul@gmail.com"
  });

  return (
    <Provider store={store}>
    <UserContext.Provider value={{user:user,
      setUser:setUser,
    }}>
      <Title />
      <Outlet />
      <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          
            <AboutUs />
         
        ),
      },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Loader />}>
            <Instamart />
          </Suspense>
        ),
      },{
        path:"/cart",
        element:<Cart/>
      },
     
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
