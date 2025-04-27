import React, { useState } from 'react';

const Todo = () => {

    const [list, setList] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const AddToList = () => {
        if (name === '' || age === '' || email === '') {
            alert('Please fill all fields');
        } else {
            const newItem = {
                name: name,
                age: age,
                email: email
            };
            setList([...list, newItem]);
            setName('');
            setAge('');
            setEmail('');
        }
    };

    const handleDelete = (index) => {
        const updatedList = [...list];
        updatedList.splice(index, 1);
        setList(updatedList);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <h2>List of items</h2>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.length > 0 ? list.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button onClick={() => handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        )) : <tr><td colSpan="4">No data available</td></tr>
                    }
                </tbody>
            </table>

            <br />
            <label>Enter your Name: </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your Name' />
            <br /><br />
            <label>Enter your Age: </label>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter your Age' />
            <br /><br />
            <label>Enter your Email: </label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email' />
            <br /><br />
            <button onClick={AddToList}>Add to List</button>
            <br />
        </div>
    );
};

export default Todo;
