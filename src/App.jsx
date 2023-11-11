import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Header from "./components/header/Header";
import NotFound from "./pages/NotFound";

const App = () => {
  useEffect(() => {
    console.log("first");
  });

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/favorites"
          element={
            <>
              <Header />
              <Favorites />
            </>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
