// file:    navbar.tsx    

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import Hamburger from './navbarhamburger'; 
import './navbar.css' ;
import { Link } from "react-router-dom";
// import mnulogo from "../../../assets/REBlogopng.png"
import mnulogo from "../../assets/REBlogopng.png"

// -- sidebar rightside menu
const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;                        /* Changed from right: 0 */
  height: 100vh;
  width: 250px;                   /* Adjust width as needed */
  background-color:  #bfc0f8;   /* Side bar background */
  padding: 2rem;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
  color: white;
`;

// -- sidebar leftside popup menu 
const MenuVariants = {
  hidden: { opacity: 0, x: '-100%' },  // start off-screen left
  visible: { opacity: 1, x: 0 },       // slide in
  exit: { opacity: 0, x: '-100%' },    // slide out left
};


const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;   /* instead of width: 100%, width cause the scrollbar on right-side for all the components */
  height: 60px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;   /* CENTER logo */
  z-index: 998;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

const LogoImage = styled.img`
  height: 40px;
  object-fit: contain;
  
`;

const App: React.FC = () => {
const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => setIsOpen(!isOpen);

const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
const toggleSubMenu = (menu: string) => {
  setOpenSubMenu(prev => (prev === menu ? null : menu));
};

const SubMenuVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};

const handleMouseLeave = () => {
  setTimeout(() => {
    setOpenSubMenu(null);
  }, 150);  // 150ms delay before closing
};

return (
    <>
   
      <div className="MainMnuPadding">

        <TopBar>
          <LogoImage src={mnulogo} alt="App Logo" />
        </TopBar>

        <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} /> 
           
        {/* AnimatePresence Menu transition from Open/Close  */}
        <AnimatePresence>
            {isOpen && (
            <MenuOverlay
                variants={MenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4 }}
            >

                {/* Add menu links here */}
                <br></br>

                <ul className="MnuHdr">
                    <li className="MnuRowMargin" >                   
                        <Link to="/" onClick={() => setIsOpen(false)} className="menuLink">Home</Link>
                    </li>

                    <li className="MnuRowMargin" >                                  
                        <Link to="/dashboard" onClick={() => setIsOpen(false)} className="menuLink">Dashboard</Link>         
                    </li>

                    <li className="MnuRowMargin" >                                  
                        <Link to="/worldtoday" onClick={() => setIsOpen(false)} className="menuLink">World Today</Link>         
                    </li>

                    <li className="MnuRowMargin" >
                        <Link to="/mnuprogtypehover" onClick={() => setIsOpen(false)} className="menuLink">Submenu type Hover...</Link>      
                    </li> 
                 
                    <li className="MnuRowMargin">

                        {/* Accordion Header */}
                        <motion.div
                          style={{ cursor: "pointer", color: "white" }}
                          onClick={() => toggleSubMenu("Programming")}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Submenu type Accordion {openSubMenu === "Programming" ? "▾" : "▸"}
                        </motion.div>

                        {/* Accordion Content */}
                        <AnimatePresence>
                            {openSubMenu === "Programming" && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              style={{
                                listStyle: "none",
                                paddingLeft: "15px",
                                marginTop: "8px"
                              }}
                            >
                                <li>
                                  <Link
                                    to="/mnuprogdtldb"
                                    onClick={() => setIsOpen(false)}
                                    className="menuLink"
                                  >
                                    Database
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    to="/mnuprogdtlauto"
                                    onClick={() => setIsOpen(false)}
                                    className="menuLink"
                                  >
                                    Automation Script
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    to="/mnuprogdtlsoftware"
                                    onClick={() => setIsOpen(false)}
                                    className="menuLink"
                                  >
                                    Software Development
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    to="/mnuprogdtlrpt"
                                    onClick={() => setIsOpen(false)}
                                    className="menuLink"
                                  >
                                    Reports
                                  </Link>
                                </li>

                          </motion.ul>
                           )}
                        </AnimatePresence>
                    </li>

                    {/* "Submenu nested sidebar */}
                    <li
                      className="MnuRowMargin"
                      style={{ position: "relative" }}
                      onMouseEnter={() => setOpenSubMenu("Submenu nested sidebar")}               
                      onMouseLeave={handleMouseLeave}
                    >

                        {/* Add Smooth Hover Animation */}
                        <motion.div
                          style={{ cursor: "pointer", color: "white" }}
                          onClick={() => toggleSubMenu("Submenu nested sidebar")}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          Submenu Nested Sidebar ▸
                        </motion.div>

                        <AnimatePresence>
                              {openSubMenu === "Submenu nested sidebar" && (
                              <motion.ul
                                variants={SubMenuVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                                style={{
                                  listStyle: "none",
                                  padding: "0.5rem",
                                  position: "absolute",
                                  top: 0,
                                  left: "100%",
                                  width: "200px",
                                  background: "#a7a9ee",
                                  borderRadius: "8px"
                                }}
                              >

                                  {/* MainMnu background #bfc0f8 */}
                                  {/* SampleOrig background: "#8d8ff0", */}
                                
                                  <li>
                                    <Link to="/mnuprogdtldb" onClick={() => setIsOpen(false)} className="menuLink" >Database</Link>
                                  </li>

                                  <li>
                                    <Link to="/mnuprogdtlauto" onClick={() => setIsOpen(false)} className="menuLink" >Automation Script</Link>
                                  </li>

                                  <li>
                                    <Link to="/mnuprogdtlsoftware" onClick={() => setIsOpen(false)} className="menuLink" >Software Development</Link>
                                  </li>

                                  <li>
                                    <Link to="/mnuprogdtlrpt" onClick={() => setIsOpen(false)} className="menuLink" >Reports</Link>
                                  </li>

                              </motion.ul>
                          )}
                        </AnimatePresence>

                    </li>

                    
                    <li className="MnuRowMargin" >                                  
                          <Link to="/mnudataexecsales" onClick={() => setIsOpen(false)} className="menuLink">Data Executive Sales</Link>         
                    </li>


                    <li className="MnuRowMargin" >
                      <Link to="/about" onClick={() => setIsOpen(false)} className="menuLink">About</Link> 
                    </li>


                    {/* DEBUG MODE: START */}
{/*                                              
                    <li className="MnuRowMargin" >                                  
                          <Link to="/okreviewtradesimulation" onClick={() => setIsOpen(false)} className="menuLink">Review Trading simulation...</Link>         
                    </li>
                
                    <li className="MnuRowMargin" >                                  
                          <Link to="/okreviewhomegifwall" onClick={() => setIsOpen(false)} className="menuLink">Review Home GIF wall</Link>         
                    </li>

                    <li className="MnuRowMargin" >                                  
                          <Link to="/okreviewgoldtwelvedata" onClick={() => setIsOpen(false)} className="menuLink">Review Gold Price</Link>         
                    </li>
                           
                    <li
                      className="MnuRowMargin"
                      style={{ position: "relative" }}
                      onMouseEnter={() => setOpenSubMenu("Review popup review")}               
                      onMouseLeave={handleMouseLeave}
                    >
          
                        <motion.div
                          style={{ cursor: "pointer", color: "white" }}
                          onClick={() => toggleSubMenu("Review Nested Sidebar")}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          Review Nested Sidebar ▸
                        </motion.div>

                        <AnimatePresence>
                              {openSubMenu === "Review Nested Sidebar" && (
                              <motion.ul
                                variants={SubMenuVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                                style={{
                                  listStyle: "none",
                                  padding: "0.5rem",
                                  position: "absolute",
                                  top: 0,
                                  left: "100%",
                                  width: "200px",
                                  background: "#a7a9ee",
                                  borderRadius: "8px"
                                }}
                              >

                                  <li>
                                    <Link to="/okreviewnsb2accordion" onClick={() => setIsOpen(false)} className="menuLink" >Accordion</Link>
                                  </li>

                                  <li>
                                    <Link to="/okreviewnsb2txtvw" onClick={() => setIsOpen(false)} className="menuLink" >Text View</Link>
                                  </li>

                                  <li>
                                    <Link to="/okreviewnsb2homeorig" onClick={() => setIsOpen(false)} className="menuLink" >Home Orig</Link>                                                   
                                  </li>

                                  <li>
                                    <Link to="/okreviewnsb2imgscrollv1" onClick={() => setIsOpen(false)} className="menuLink" >Image Scroll v1</Link>
                                  </li>

                                  <li>
                                    <Link to="/okreviewnsb2imgscrollv2" onClick={() => setIsOpen(false)} className="menuLink" >Image Scroll v2</Link>
                                  </li>
                             
                                  <li>
                                    <Link to="/okreviewnsb2announcement" onClick={() => setIsOpen(false)} className="menuLink" >Announcement Type</Link>
                                  </li>

                                  <li>
                                    <Link to="/okreviewnsb2announcementJSON" onClick={() => setIsOpen(false)} className="menuLink" >Announcement JSON file</Link>
                                  </li>

                              </motion.ul>
                          )}
                        </AnimatePresence>

                    </li> */}

                     {/* DEBUG MODE: END */}

                    {/* Test component */}


                </ul>

            </MenuOverlay>

            )}
        </AnimatePresence>

      </div>
    </>
  );
};

export default App;


