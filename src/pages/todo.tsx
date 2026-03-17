// file:    src/pages/todo.tsx

import TodoTable from "../components/todotable";
import TodoForm from "../components/todoform";
import { useState } from "react";
import Accordion from "../components/mnuReviewNestedSidebarv2/accordionfunc";

export default function TodoPage() {

  const [reload, setReload] = useState(false);   // <-- REQUIRED

  const [editingId, setEditingId] = useState<number | undefined>();

  return (
    <>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <h2 style={{ margin: 0 }}>CRUD To-Do List</h2>

            <span className="noteCode">
              <b>NOTE:</b> &nbsp;
              Please try accessing the module again after <b><u>one minute</u></b>.
              If the sample data does not appear, the data storage service is on a free plan and may go to sleep after 15 minutes of inactivity.       
            </span>
        </div>

          <Accordion title="Overview">
              <p className="DivTxtFormatHighlight">            
              The <b>CRUD To-Do List module</b> is a simple task management component that allows users to create, view, update, and delete tasks.<br></br><br></br>
              It demonstrates a full <b>CRUD workflow</b> using a React frontend and an API backend.<br></br><br></br>

              * Create, Read, Update, and Delete (CRUD) are the four operations (actions) of user interface.<br></br><br></br>
              </p>    
          </Accordion>
           <br></br>
      </div>

      <TodoForm
        id={editingId}
        onSuccess={() => {
          setReload(!reload);
          setEditingId(undefined);   // exit edit mode
        }}
        onCancel={() => setEditingId(undefined)}
      />

      <TodoTable
        key={reload.toString()}
        onEdit={(id) => setEditingId(id)}
        onCancelEdit={() => setEditingId(undefined)}
        onReload={() => setReload(!reload)}
      />
    </>
  );
}