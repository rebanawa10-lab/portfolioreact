// file:    src/api.ts

import axios from "axios";

const NODE_API = import.meta.env.VITE_NODE_API;
const FAST_API = import.meta.env.VITE_FASTAPI;

console.log("Node API:", NODE_API);
console.log("FastAPI:", FAST_API);

export const nodeApi = axios.create({
  baseURL: NODE_API,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fastApi = axios.create({
  baseURL: FAST_API,
  headers: {
    "Content-Type": "application/json",
  },
});

// mport type { Inventory } from "./types/inventory";
// import type { Todo } from "./types/todo";

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE || "http://localhost:8000"
//   ,headers: {
//     "Content-Type": "application/json"
//   }
// });


// const API = import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000";

// console.log("API BASE:", API);

// const api = axios.create({
//   baseURL: API,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });


// console.log("API:", import.meta.env.VITE_API_BASE);

// --- To do API ---
// Get a single row by id 
// export const getTodoById = async (id: number): Promise<Todo> => {
//   const res = await api.get(`/todo/${id}`);
//   return res.data;
// };

// export const getTodo = async (): Promise<Todo[]> => {
//   const res = await api.get("/todo/"); 
//   return res.data;
// };

// export const createTodo = async (data: Omit<Todo, "id">) => {
//   const res = await api.post("/todo/", data);
//   return res.data;
// };

// export const updateTodo = async (id: number, data: Partial<Todo>) => {
//   const res = await api.put(`/todo/${id}`, data);
//   return res.data;
// };

// export const deleteTodo = async (id: number) => {
//   const res = await api.delete(`/todo/${id}`);
//   return res.data;
// };
