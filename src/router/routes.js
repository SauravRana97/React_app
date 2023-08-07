import React from "react";
import { useRoutes } from "react-router-dom";
// import ReactPropType from "../components/reactproptypeCH/reactProptype";
// import Componentchild from "../components/reactComponentchildCh/reactComponentchild";
// import Reactstate from "../components/reactStateCH/reactState";
// import Reactclass from "../components/reactclassCh/reactclass";
// import ReactEvent from "../components/reactEventCh/reactEvent";
// import Reactmount from "../components/reactlifecyclehookCh/reactmount/reactMount";
// import Reactupdate from "../components/reactlifecyclehookCh/reactupdate/reactUpdate";
// import Reactunmounted from "../components/reactlifecyclehookCh/reactumount/reactUnmonuted";
import ReactEffect from "../components/reactuseEffect/reactuseEffect";
// import ReactcustomHook from "../components/reactcustomHook/custumHook";
// import Reactconditonal from "../components/reactConditionalCH/reactconditional";
// import Reactmap from "../components/reactListCh/reactmaplist";
// import Reactcss from "../components/reactCss/reactcss";
// import Reactimg from "../components/reactAssetCh/reactimg";
import Reactcontrolled from "../components/reactFormCh/reactControlledCh/Reactcontrolled";
import Reactapi from "../components/reactApimethods/reactApi";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <Reactcontrolled />,
    },
    {
      path: "/reactuse",
      element: <ReactEffect />,
    },
    {
      path: "/reactapi",
      element: <Reactapi />,
    },
  ]);
  return element;
}
