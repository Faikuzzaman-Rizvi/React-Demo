import React, { useState } from 'react';

const TodoApp = () => {
    const [list, setList] = useState([]);
    const [task, setTask] = useState('');
    const [editIndex, setEditIndex] = useState(null); // Edit mode track korbe

    // ✅ Add Task Function
    const AddToTask = () => {
        if (task === '') {
            alert("Add your Task!");
        } else {
            if (editIndex !== null) {
                // If edit mode, update the existing task
                const updatedList = [...list];
                updatedList[editIndex] = task;
                setList(updatedList);
                setEditIndex(null); // Reset edit mode
            } else {
                // If normal mode, add new task
                setList([...list, task]);
            }
            setTask(""); // Clear input field
        }
    };

    // ✅ Edit Task Function
    const TaskToEdit = (index) => {
        setTask(list[index]); // Load existing task to input
        setEditIndex(index);  // Track which index is being edited
    };

    // ✅ Delete Task Function
    const handleDelete = (index) => {
        const updatedList = [...list];
        updatedList.splice(index, 1);
        setList(updatedList);
        setEditIndex(null); // Reset edit mode if deleted
    };

    return (
        <div>
            <label htmlFor="">Task Name : </label>
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder='Add your task' 
            />
            <button onClick={AddToTask}>
                {editIndex !== null ? "Update Task" : "Add Task"}
            </button>

            <h1>All Tasks</h1>
            <table border={1} cellPadding={10} cellSpacing={2}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list.length > 0 ? (
                        list.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item}</td>
                                <td>
                                    <button onClick={() => TaskToEdit(index)}>Edit</button>
                                    <button onClick={() => handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3}>No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TodoApp;
