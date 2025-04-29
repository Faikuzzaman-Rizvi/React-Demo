import React, { useState } from "react";

const TodoAppWithExtras = () => {
    const [task, setTask] = useState("");
    const [category, setCategory] = useState("General");
    const [list, setList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [search, setSearch] = useState("");
    const [sortAsc, setSortAsc] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const tasksPerPage = 5;

    const AddToTask = () => {
        if (task.trim() === "") {
            alert("Please enter a task!");
            return;
        }

        const newTask = { text: task, category };

        if (editIndex !== null) {
            const updatedList = [...list];
            updatedList[editIndex] = newTask;
            setList(updatedList);
            setEditIndex(null);
        } else {
            setList([...list, newTask]);
        }

        setTask("");
        setCategory("General");
    };

    const TaskToEdit = (index) => {
        setTask(list[index].text);
        setCategory(list[index].category);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updatedList = [...list];
        updatedList.splice(index, 1);
        setList(updatedList);

        if (editIndex === index) {
            setTask("");
            setEditIndex(null);
        }
    };

    const handleSort = () => {
        setSortAsc(!sortAsc);
    };

    const filteredList = list
        .filter((item) =>
            item.text.toLowerCase().includes(search.toLowerCase())
        )
        .filter((item) =>
            selectedCategory === "All" ? true : item.category === selectedCategory
        );

    const sortedList = [...filteredList].sort((a, b) =>
        sortAsc ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
    );

    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = sortedList.slice(indexOfFirstTask, indexOfLastTask);
    const totalPages = Math.ceil(sortedList.length / tasksPerPage);

    return (
        <div>
            <h1>Todo List with Categories & Pagination</h1>

            <div>
                <input
                    type="text"
                    placeholder="Search Task"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    value={selectedCategory}
                >
                    <option value="All">All Categories</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Study">Study</option>
                    <option value="General">General</option>
                </select>
                <button onClick={handleSort}>
                    Sort {sortAsc ? "(A-Z)" : "(Z-A)"}
                </button>
            </div>

            <div>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter a task"
                />
                <select
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                >
                    <option value="General">General</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Study">Study</option>
                </select>
                <button onClick={AddToTask}>
                    {editIndex !== null ? "Update Task" : "Add Task"}
                </button>
            </div>

            {currentTasks.length > 0 ? (
                currentTasks.map((item, index) => (
                    <div key={index}>
                        <div>
                            <h3>
                                {indexOfFirstTask + index + 1}: {item.text}
                            </h3>
                            <small>Category: {item.category}</small>
                        </div>
                        <div>
                            <button onClick={() => TaskToEdit(list.indexOf(item))}>
                                Edit
                            </button>
                            <button onClick={() => handleDelete(list.indexOf(item))}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <h2>No Tasks Found</h2>
            )}

            <div>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TodoAppWithExtras;
