// file:    src/main.tsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./styles/styles/table.css" // CRUD To do


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'; // ✅ import BrowserRouter
// import './index.css'
// import App from './App.tsx'
// import "./styles/styles/table.css" // CRUD To do


// // Use environment variable VITE_BASE to determine basename dynamically
// const basename = import.meta.env.VITE_BASE || "/";

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <BrowserRouter basename={basename}>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );

// createRoot(document.getElementById('root')!).render(
//   // <StrictMode>
//   //   <App />
//   // </StrictMode>,

//    <StrictMode>
//     <BrowserRouter basename="/portfolioreact"> 
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// )