

import MnuInfoPortfolio from "./portfolio";

import "./about.css";

import REBLogo from '../../../assets/REBlogopng.png';

export default function About() {

    const currentYear = new Date().getFullYear() + ' Copyright.   ';

    return (

          <div>

              <h2>About</h2>
              © {currentYear} Email: 
              <a href="mailto:rebanawa10@gmail.com ?subject=Contact%20from%20React%20Demo%20App">
                rebanawa10@gmail.com
              </a>
              <br></br>
              <br></br>The React application is provided for demonstration purposes only.  
              <br></br><br></br>
            
              <div> &nbsp;&nbsp;&nbsp;  
                  <img className="rotate" src={REBLogo} alt="Logo rotate R"></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img className="rotateanti" src={REBLogo} alt="Logo rotate L"></img>
              </div>
              <br></br><br></br>
              <MnuInfoPortfolio />

          </div>

    );
}