import "./App.css";

import React, { Component } from "react";
import { Navbar } from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 15;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            />

            <Route
              path="/business"
              element={
                <>
                  <News
                    pageSize={this.pageSize}
                    country="in"
                    category="businees"
                  />
                </>
              }
            />

            <Route
              path="/science"
              element={
                <>
                  <News
                    pageSize={this.pageSize}
                    country="in"
                    category="science"
                  />
                </>
              }
            />

            <Route
              path="/health"
              element={
                <>
                  <News
                    pageSize={this.pageSize}
                    country="in"
                    category="health"
                  />
                </>
              }
            />

            <Route
              path="/entertainment"
              element={
                <>
                  <News
                    pageSize={this.pageSize}
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
                  <News
                    pageSize={this.pageSize}
                    country="in"
                    category="sports"
                  />
                </>
              }
            />

            <Route
              path="/technology"
              element={
                <>
                  <News
                    pageSize={this.pageSize}
                    country="in"
                    category="technology"
                  />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
