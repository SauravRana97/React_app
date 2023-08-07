import React from "react";
// import "./asset/css/Common.css";

// import ReactPropType from "./reactproptypeCH/reactProptype";
// import Componentchild from "./reactComponentchildCh/reactComponentchild";
// import Reactstate from "./reactStateCH/reactState";
// import Reactclass from "./reactclassCh/reactclass";
// import ReactEvent from "./reactEventCh/reactEvent";
// import Reactmount from "./reactlifecyclehookCh/reactmount/reactMount"
// import Reactupdate from "./reactlifecyclehookCh/reactupdate/reactUpdate";
// import Reactunmounted from "./reactlifecyclehookCh/reactumount/reactUnmonuted"
// import ReactEffect from "./components/reactuseEffect/reactuseEffect";
// import ReactcustomHook from "./reactcustomHook/reactcustomHook"
// import Reactconditonal from "./reactConditionalCH/reactconditional";
// import Reactmap from "./reactListCh/reactmaplist"
// import Reactcss from "./reactCss/reactcss"
// import Reactimg from "./reactAssetCh/reactimg";
// import Reactcontrolled from "./components/reactFormCh/reactControlledCh/Reactcontrolled";

import { BrowserRouter } from "react-router-dom";
import Router from "./router/routes.js";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1 className="home">React component Render all Imported Component</h1>
        <Router />
      </div>
    </BrowserRouter>
  );
};

export default App;
