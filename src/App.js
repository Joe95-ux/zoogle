import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllRoutes from "./components/AllRoutes";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <AllRoutes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
