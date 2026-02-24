// file:    homeaurora.tsx

import { useEffect, useRef, useState } from "react";

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // 0.5 = slower, 2 = faster
    }

    // #####
    // Function to show message for 5 seconds
    const triggerMessage = () => {
      setShowMessage(true);

      setTimeout(() => {  
        setShowMessage(false);
      }, 5000); // visible for 5 seconds
    };

    // Show immediately (optional)
     const initialTimeout = setTimeout(() => {
        triggerMessage();
      }, 3000);
   
    // Repeat every 30 sec
    const interval = setInterval(() => {
      triggerMessage(); 
    }, 30000 ); // 5 minutes = 300000 , 10sec 10000, 1sec 1000

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };

  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/auroraborealis.mp4" type="video/mp4" />
      </video>


      {/* Message */}
      <div
        style={{
          position: "fixed",
          top: "15%",
          width: "100%",
          textAlign: "left",
          color: "white",
          fontSize: "17px",
          fontWeight: "Normal",
          opacity: showMessage ? 1 : 0,
          transition: "opacity 1.5s ease-in-out",
          zIndex: 1,
        }}
      >
        The application is provided for demonstration purposes only.
        <br></br>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; 
       
        - Raul 🌌
      </div>



      <div style={{ position: "relative", zIndex: 1, color: "white" }}>
        <h3></h3>
      </div>
    </div>
  );
};

export default Home;
