import "./App.css";
import { Routerr } from "./router/router";
import { memo } from "react";
import commerce from "./lib/commerce"
function App() {
  return (
    <div>
      <Routerr />
    </div>
  );
}

export default memo(App);
