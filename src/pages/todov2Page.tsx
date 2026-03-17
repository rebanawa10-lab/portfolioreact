// file:    src/pages/todov2Page.tsx

import { useEffect, useState } from "react"
import type { Todo } from "../types/todov2Type";  
import { getTodos, createTodo, deleteTodo, updateTodo } from "../../src/api/todov2API" ; 
import TodoList from "../../src/components/todov2listComp"; 
import TodoForm from "../../src/components/todov2formComp"; 
import Accordion from "../components/mnuReviewNestedSidebarv2/accordionfunc";

function App() {

  const [todos, setTodos] = useState<Todo[]>([])

  const load = async () => {
    const data = await getTodos()
    setTodos(data)
  }

  useEffect(() => {
    load()
  }, [])

  const addTodo = async (name: string) => {
    await createTodo(name)
    load()
  }

  const removeTodo = async (id: number) => {
    await deleteTodo(id)
    load()
  }

   // UPDATE
   const handleUpdate = async (id: number, name: string) => {
    await updateTodo(id, name)   // update database
    load()                       // reload list
  };

  return (
    
    <div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <h2 style={{ margin: 0 }}>CRUD To-Do List  (MS SQLServer)</h2>

            
        </div>
        <Accordion title="Overview">
              <p className="DivTxtFormatHighlight">            
              The <b>CRUD To-Do List module</b> is a simple task management component that allows users to create, view, update, and delete tasks.<br></br><br></br>
              It demonstrates a full <b>CRUD workflow</b> using a React frontend and an API backend.<br></br><br></br>

              * Create, Read, Update, and Delete (CRUD) are the four operations (actions) of user interface.<br></br><br></br>
              </p>    
        </Accordion>
        <br></br>

     

      <TodoForm onCreate={addTodo} />

      <TodoList
        todos={todos}
        onDelete={removeTodo}
        onUpdate={handleUpdate}
      />
    </div>
  )
}

export default App