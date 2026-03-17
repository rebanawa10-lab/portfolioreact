// file:    src/api/todov1API.ts
//          FastAPI

// OLD: todoService

import { fastApi } from "./axiosClient";
import type { Todo } from "../types/todo"; 

export const getTodo = async (): Promise<Todo[]> => {
  const res = await fastApi.get("/todo");
  return res.data;
};

export const getTodoById = async (id: number): Promise<Todo> => {
  const res = await fastApi.get(`/todo/${id}`);
  return res.data;
};

export const createTodo = async (data: Omit<Todo, "id">) => {
  const res = await fastApi.post("/todo", data);
  return res.data;
};

export const updateTodo = async (id: number, data: Partial<Todo>) => {
  const res = await fastApi.put(`/todo/${id}`, data);
  return res.data;
};

export const deleteTodo = async (id: number) => {
  const res = await fastApi.delete(`/todo/${id}`);
  return res.data;
};