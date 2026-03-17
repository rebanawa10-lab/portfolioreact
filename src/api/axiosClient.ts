// file:    src/api/axiosClient.ts


import axios from "axios";

const NODE_API = import.meta.env.VITE_NODE_API;
const FAST_API = import.meta.env.VITE_FASTAPI;

console.log("Node API:", NODE_API);
console.log("FastAPI:", FAST_API);

export const nodeApi = axios.create({
  baseURL: import.meta.env.VITE_NODE_API,  // NODE_API,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fastApi = axios.create({
  baseURL: import.meta.env.VITE_FASTAPI,  // FAST_API,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: logging
nodeApi.interceptors.request.use((config) => {
  console.log("Node Request:", config.url);
  return config;
});

fastApi.interceptors.request.use((config) => {
  console.log("FastAPI Request:", config.url);
  return config;
});


