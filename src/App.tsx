
// Ver1
// import { useState, version } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
  // const [count, setCount] = useState(0)
  // return (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1><small>xx-- {version} --xx</small>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  // )
// }


// file:  app.tsx

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Single Page Application (SPA) method. MainMenu
import MnuNavBar from './components/mnunavbar/navbar';


// Home
import MnuInfoHome from "./components/mnuinfo/home/homeaurora";  //HomeAurora


// Dashboard
import MnuInfoDashboard from "./components/mnuinfo/dashboard/dashboard" ; // Dashboard


// World Today
import MnuAddOnWorldToday from "./components/mnuinfo/worldtoday/worldtoday"; // World Today


// Type Hover / Accordion / Nested Sidebar
import MnuProgTypeHover from "./components/mnuPersonal/mnuproghover/mnuproghovermain";
    import MnuPersonalProgDtlDB from "./components/mnuPersonal/mnuproghover/dtldb";
    import MnuPersonalProgDtlAuto from "./components/mnuPersonal/mnuproghover/dtlscripting";
    import MnuPersonalProgDtlSoftWare from "./components/mnuPersonal/mnuproghover/dtlprog";
    import MnuPersonalProgDtlRpt from "./components/mnuPersonal/mnuproghover/dtlreports";

// Data JSON
import MnuDataJSONExecSales from "./components/mnuDataJSON/execsalesgrid";

// About
import MnuInfoAbout from "./components/mnuinfo/about/about"; // About

// Review ok
import ReviewTradeSimulation from "./components/mnuReview/okTradeSimulationMain"; 
import ReviewHomeGIFWall from "./components/mnuReview/okhomeGIFWall"; // Home GIF
import ReviewGoldTwelveData from "./components/mnuReview/okgoldtwelvedata"; // Gold TwelveData

// import ReviewNSB2Accordion from './components/mnuReviewNestedSidebarv2/accordion-OLD'; 
import ReviewNSB2Accordion from './components/mnuReviewNestedSidebarv2/accordion';
import ReviewNSB2TxtVw from './components/mnuReviewNestedSidebarv2/txtvw'; 

import ReviewNSB2HomeOrig from "./components/mnuReviewNestedSidebarv2/homeorig";   // HomeOrig

import ReviewNSB2ImgScrollHorizontalV1 from './components/mnuReviewNestedSidebarv2/imgscrollhorizonalv1';
import ReviewNSB2ImgScrollHorizontalv2 from './components/mnuReviewNestedSidebarv2/imgscrollhorizonalv2';
import ReviewNSB2Announcement from "./components/mnuReviewNestedSidebarv2/announcementmain";
import ReviewNSB2AnnouncementJSON from "./components/mnuReviewNestedSidebarv2/announcement5main";




// Test component


function App() {
  
    return (
        <>
  
          <Router>

              {/* Single Page Application (SPA) method. MnuNavBar inside the router in order not to break the link */}
              <MnuNavBar />

              <div className="main-content">
                <Routes>

                      <Route path="/" element={<MnuInfoHome />} />
                           
                      <Route path="/dashboard" element={<MnuInfoDashboard />} />                   
                                    
                      <Route path="/worldtoday" element={<MnuAddOnWorldToday />} />
            
                      <Route path="/mnuprogtypehover" element={<MnuProgTypeHover />} />
                          <Route path="/mnuprogdtldb" element={<MnuPersonalProgDtlDB />} />
                          <Route path="/mnuprogdtlauto" element={<MnuPersonalProgDtlAuto />} />
                          <Route path="/mnuprogdtlsoftware" element={<MnuPersonalProgDtlSoftWare />} />
                          <Route path="/mnuprogdtlrpt" element={<MnuPersonalProgDtlRpt />} />
                                      
                    
                      {/* Data */}
                      <Route path="/mnudataexecsales" element={<MnuDataJSONExecSales />} />


                      <Route path="/about" element={<MnuInfoAbout />} />


                      {/* Review  */}
                      <Route path="/okreviewtradesimulation" element={<ReviewTradeSimulation />} />                 
                      <Route path="/okreviewhomegifwall" element={<ReviewHomeGIFWall />} />
                      <Route path="/okreviewgoldtwelvedata" element={<ReviewGoldTwelveData />} />


                      <Route path="/okreviewnsb2accordion" element={<ReviewNSB2Accordion />} />
                      <Route path="/okreviewnsb2txtvw" element={<ReviewNSB2TxtVw />} />
                      <Route path="/okreviewnsb2homeorig" element={<ReviewNSB2HomeOrig />} />
                      <Route path="/okreviewnsb2imgscrollv1" element={< ReviewNSB2ImgScrollHorizontalV1 />} />
                      <Route path="/okreviewnsb2imgscrollv2" element={< ReviewNSB2ImgScrollHorizontalv2 />} />
                      <Route path="/okreviewnsb2announcement" element={< ReviewNSB2Announcement />} />
                      <Route path="/okreviewnsb2announcementJSON" element={<ReviewNSB2AnnouncementJSON />} />
             
                      {/* Test component */}

                </Routes>
              </div>

          </Router>

        </>
    )
}

export default App
