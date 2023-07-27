import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";

import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = (props) => {
  const pageSize = 15;

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <News pageSize={pageSize} country="in" category="general" />
            }
          />

          <Route
            path="/business"
            element={
              <>
                <News pageSize={pageSize} country="in" category="businees" />
              </>
            }
          />

          <Route
            path="/science"
            element={
              <>
                <News pageSize={pageSize} country="in" category="science" />
              </>
            }
          />

          <Route
            path="/health"
            element={
              <>
                <News pageSize={pageSize} country="in" category="health" />
              </>
            }
          />

          <Route
            path="/entertainment"
            element={
              <>
                <News
                  pageSize={pageSize}
                  country="in"
                  category="entertainment"
                />
              </>
            }
          />

          <Route
            path="/sports"
            element={
              <>
                <News pageSize={pageSize} country="in" category="sports" />
              </>
            }
          />

          <Route
            path="/technology"
            element={
              <>
                <News pageSize={pageSize} country="in" category="technology" />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
