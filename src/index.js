import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import "../src/asset/css/Common.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import { BrowserRouter } from "react-router-dom";
// import routes   from "./router/routes.js"
// import Reactevent from "./reactEventCh/reactEvent"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
)
// root.unmount(document.getElementById('root'))
// const root2 = ReactDOM.createRoot(document.getElementById('root2'))

// root2.render(<Reactevent/>)
