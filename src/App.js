import React from "react";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import ErrorPage from "./pages/ErrorPage";
import "./App.css";

function App() {
  return (
    <>
      <Home />
      <Rooms />
      <SingleRoom />
      <ErrorPage />
    </>
  );
}

export default App;
