
// file:    mnuproghovermain.tsx

import { useState } from "react";  // React,
import "./mnuproghovermain.css";
import DtlDB from "./dtldb";
import DtlScripting from "./dtlscripting";
import DtlProg from "./dtlprog" ;
import DtlReports from "./dtlreports" ;

type MenuType = "Database" | "AutomationScript" | "Programming" | "Reports";

function App() {
  const [selectedMenu, setSelectedMenu] = useState<MenuType>("Database");

  return (
    <div className="container">
      <div className="sidebar">
        
        <ul>
          <li onMouseEnter={() => setSelectedMenu("Database")}>Database</li>
          <li onMouseEnter={() => setSelectedMenu("AutomationScript")}>Automation script</li>
          <li onMouseEnter={() => setSelectedMenu("Programming")}>Software development</li>
          <li onMouseEnter={() => setSelectedMenu("Reports")}>Reports</li>
        </ul>
      </div>

      <div className="content">
        {selectedMenu === "Database" && <DtlDB />}
        {selectedMenu === "AutomationScript" && <DtlScripting />}
        {selectedMenu === "Programming" && <DtlProg />}
        {selectedMenu === "Reports" && <DtlReports />}
      </div>
    </div>
  );
}

export default App;
