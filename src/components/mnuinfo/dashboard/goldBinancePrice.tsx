// file:    goldBinancePrice.tsx

import React, { useEffect, useState, useRef } from "react";

const GoldPrice: React.FC = () => {
  const [price, setPrice] = useState<number | null>(null);
  const [color, setColor] = useState<string>("#ffffff");
  const previousPrice = useRef<number | null>(null);

  useEffect(() => {
    const socket = new WebSocket(
      "wss://fstream.binance.com/ws/xauusdt@ticker"
    );

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const newPrice = parseFloat(data.c);

      // 'c' = current last price

      if (previousPrice.current !== null) {
        if (newPrice > previousPrice.current) {
          setColor("#26a69a"); // green
        } else if (newPrice < previousPrice.current) {
          setColor("#ef5350"); // red
        }
      }

      previousPrice.current = newPrice;  
      setPrice(parseFloat(data.c));
    };

    socket.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div
      style={{
        background: "#0f172a",
        padding: "20px",
        borderRadius: "12px",
        textAlign: "center",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "normal",
        width: "170px",
      }}
    >
     
      <div style={{ fontSize: "16px", opacity: 0.7 }}>
        Gold (XAUUSDT)
      </div>

      {/* <div style={{ fontSize: "16px", marginTop: "10px", color: "#26a69a" }}> */}
      <div
        style={{
          fontSize: "16px",
          fontWeight: "bold",
          marginTop: "10px",
          color: color,
          transition: "color 0.2s ease",
        }}
      >
        {price ? `$${price.toFixed(2)}` : "Loading..."}
      </div>
    </div>
  );
};

export default GoldPrice;
