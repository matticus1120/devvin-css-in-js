import React, { useEffect } from "react";
import Emotion from "./Emotion";
import Page from "./Page";
import "./App.css";

import { usePageContext } from "./PageContext";

function App() {
  return (
    <div id="body">
      <h1>Devvin on CSS in JS</h1>
      <Emotion />
      <hr />
      <Page />
    </div>
  );
}

export default App;
