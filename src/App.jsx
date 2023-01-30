/** @format */

import React, { useState } from "react";
import NewProjects from "./components/NewProjects";
import SideBar from "./components/SideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex">
      <SideBar />
      <NewProjects />
    </div>
  );
}

export default App;
