import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import "./assets/styles/main.scss";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";


const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/favorites"
          element={
            <Layout>
              <Favorites />
            </Layout>
          }
        />
          <Route
          path="/movies"
          element={
            <Layout>
              <Movies />
            </Layout>
          }
        />
              <Route
          path="/shows"
          element={
            <Layout>
              <TvShows />
            </Layout>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
