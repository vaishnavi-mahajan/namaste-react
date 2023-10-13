import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
const Grocery = lazy(() => import("./components/Grocery"));

import { useState,useEffect } from "react"

// const toggletheme = () => {
//   document.documentElement.classList.toggle("dark");
// };
const AppLayout = () => {
  const [theme, setTheme] = useState("light"); // Set an initial theme (light).
  
  useEffect(() => {
    // Check user's preferred color scheme.
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    // Apply the theme class to the document's root element.
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  
  const handleThemeToggle = () => {
    // Toggle between light and dark themes.
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="right-6 ">
    <div className={`bg-${theme === "dark" ? "black" : "white"}`}>
      <div className="dark-mode-toggle" onClick={handleThemeToggle}>
        {theme === "dark" ? "🌞" : "🌜"} {/* Use moon and sun emojis for dark mode */}
      </div>
      <Header theme={theme} />
      <Outlet />
      <Footer theme={theme} />
    </div>
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery></Grocery>
          </Suspense>
        ),
      },
      {
        path: "/resturants/:resId",
        element: <RestaurantMenu></RestaurantMenu>,
      },
    ],

    errorElement: <Error></Error>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
