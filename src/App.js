import React from "react";
import "./App.css"
import SidebarBody from "./components/sidebar-body/SidebarBody";
import Sidebar from "./components/sidebar/Sidebar";
function App() {
  return (
    <div className="App">
        <div className="sidebar">
              <Sidebar/>
        </div>
        <div className="sidebar-body">
              <SidebarBody/>
        </div>
    </div>
  );
}

export default App;
