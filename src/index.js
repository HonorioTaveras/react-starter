import React from "react";
import ReactDOM from "react-dom";
import movies from "./movieEntries.js";
import App from "./components/App.jsx";


ReactDOM.render(<App movies={movies} />, document.getElementById("app"));
