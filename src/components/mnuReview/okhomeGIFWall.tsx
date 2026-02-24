
// file:    homeGIFWall.tsx

import React from "react";
import "./okhomeGIFWall.css";

const App: React.FC = () => {
  return (
    <div>
      
      <h2></h2>
      <div className="app-background"></div>

      <div style={{ position: "relative", zIndex: 1, color: "white", padding: "1px", alignItems: "left" }}>
        <h2>Hello, this with GIF wallpaper!</h2>
        <p>Everything else will be on top of the GIF.</p>
      </div>
    </div>
  );
};

export default App;

