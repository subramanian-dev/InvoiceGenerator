import React from "react";

import "./App.css";
import SubApp from "./components/SubApp.jsx";
import { ContentProvider } from "./components/PreviewContent.jsx";

function App() {
  return (
    <div className="App">
      <ContentProvider>
        <SubApp/>
      </ContentProvider>
      {/* printing */}
      <button
        onClick={() => {
          var printContents = document.getElementById("Print").innerHTML;
          document.body.innerHTML = printContents;
          window.print();
        }}
      >
        Print
      </button>
    </div>
  );
}

export default App;
