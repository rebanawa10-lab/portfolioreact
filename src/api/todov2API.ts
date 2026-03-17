// file:    src/api/todov2.ts
//          NODEJS API

import type { Todo } from "../types/todov2Type"; 

const API = "http://localhost:3000/api/todo"   

// Internal run above works. Otherwise this handle by IIS reverse proxy
// C:\Repos\Portfolio\APINodeJS> npm start


export async function getTodos(): Promise<Todo[]> {
  const res = await fetch(API)
  return res.json()
}

export async function createTodo(name: string) {
  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  })
}

export async function updateTodo(id: number, name: string) {
  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  })
}

export async function deleteTodo(id: number) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  })
}