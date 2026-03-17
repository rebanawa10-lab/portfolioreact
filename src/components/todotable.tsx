// file:    src/components/todotable.tsx

// remarks: Delete in modal prompt
//          Row per page and paging

import { useEffect, useState } from "react";
import { getTodo, deleteTodo } from "../api/todov1API"; 

import type { Todo } from "../types/todo"; 
import CustomConfirm from "./customYN"; 

interface Props {
    onEdit: (id: number) => void;
    onReload: () => void;
    onCancelEdit?: () => void; 
}

export default function TodoList({ onEdit, onReload, onCancelEdit }: Props) {
  const [items, setItems] = useState<Todo[]>([]);

    // Paging
    // State
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10); 

    // Total pages
    const totalPages = Math.ceil(items.length / rowsPerPage);

    // Slice items for current page
    const startIndex = (currentPage - 1) * rowsPerPage;
    const pagedItems = items.slice(startIndex, startIndex + rowsPerPage);

    const getPageNumbers = () => {
        const pageNumbers: number[] = [];
        const maxVisible = 5;

        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, startPage + maxVisible - 1);

        startPage = Math.max(1, endPage - maxVisible + 1);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };



    useEffect(() => {
        loadTodo();
    }, []);

    const loadTodo = async () => {
        try {
            const res = await getTodo();
            if (Array.isArray(res)) {
            setItems(res);
            setCurrentPage(1); // reset paging
            console.log("Data loaded:", res.length, "data");
            } else {
            console.error("API did not return an array:", res);
            setItems([]);
            }
        } catch (err) {
            console.error("Error loading data:", err);
            setItems([]);
        }
    };


    // DELETE
    const [confirmDelete, setConfirmDelete] = useState<Todo | null>(null);

    const handleDeleteClick = (data: Todo) => {
        if (onCancelEdit) {
        onCancelEdit();   // exit edit mode immediately
        }
        setConfirmDelete(data);
    };

    const handleConfirm = async () => {
        if (confirmDelete !== null) {
        await deleteTodo(confirmDelete.id);

        setConfirmDelete(null);
        onReload();   // reload list
        }
    };

    const handleCancel = () => setConfirmDelete(null);

    return (
        <div className="gridTableInventory">

            {/* Paging */}
            <div className="paginationRow">

                {/* LEFT SIDE */}
                <div className="rowsPerPage">
                    <span>Rows per page:</span>

                    <select
                    className="rowsSelect"
                    value={rowsPerPage}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setRowsPerPage(Number(e.target.value));
                        setCurrentPage(1);
                    }}
                    >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    </select>
                </div>

                {/* RIGHT SIDE */}
                <div className="paginationControls">

                    <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(1)}
                    >
                    |&lt;
                    </button>

                    <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => prev - 1)}
                    >
                    &lt;
                    </button>

                    {getPageNumbers().map((pageNum: number) => (
                    <button
                        key={pageNum}
                        className={currentPage === pageNum ? "activePage" : ""}
                        onClick={() => setCurrentPage(pageNum)}
                    >
                        {pageNum}
                    </button>
                    ))}

                    <button
                    disabled={currentPage === totalPages || totalPages === 0}
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    >
                    &gt;
                    </button>

                    <button
                    disabled={currentPage === totalPages || totalPages === 0}
                    onClick={() => setCurrentPage(totalPages)}
                    >
                    &gt;|
                    </button>

                </div>
            </div>

            <br></br>

            <div className="gridHeader">
            <div>Row#</div>
            <div>ID</div>
            <div>Description</div>
            <div>Actions</div>
            </div>

            {pagedItems.map((data, index) => {
            const rowNumber = (currentPage - 1) * rowsPerPage + index + 1; // absolute row number
            return (
                <div key={data.id} className="gridRow">
                <div>{rowNumber}</div>   {/* <-- row number */}
                <div>{data.id}</div>
                <div>{data.name}</div>
                <div>
                    <button className="my-button" onClick={() => onEdit(data.id)}>Edit</button>
                    <button className="my-button" onClick={() => handleDeleteClick(data)}>Delete</button>
                </div>
                </div>
            );
            })}

            {confirmDelete !== null && (
            <CustomConfirm      
                message={
                    <>
                    <div>Todo: <strong style={{ color: "blue" }}>{confirmDelete.name}</strong></div>
                    <div style={{ marginTop: "1em" }}>Delete confirm?</div>
                    </>
                }
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />
            )}

        </div>
    );
}