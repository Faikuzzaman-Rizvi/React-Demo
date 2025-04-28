import React, { useState } from "react";

const Todo = () => {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [index, setIndex] = useState(null);

  const AddToList = () => {
    if (name === "" || age === "" || email === "") {
      alert("Please fill all fields");
    } else {
      const newItem = {
        name: name,
        age: age,
        email: email,
      };
      setList([...list, newItem]);
      setName("");
      setAge("");
      setEmail("");
    }
  };

  const handleDelete = (i) => {
    const updatedList = [...list];
    updatedList.splice(i, 1);
    setList(updatedList);
  };

  const handleEdit = (i) => {
    const itemToEdit = list[i];
    setName(itemToEdit.name);
    setAge(itemToEdit.age);
    setEmail(itemToEdit.email);
    setIndex(i);
  };

  const handleUpdate = () => {
    const updatedList = [...list];
    updatedList[index] = {
      name: name,
      age: age,
      email: email,
    };
    setList(updatedList);
    setName("");
    setAge("");
    setEmail("");
    setIndex(null); // important: update hoye gele abar Add mode e jawa
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
          {list.length > 0 ? (
            list.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={() => handleDelete(i)}>Delete</button>
                  <button onClick={() => handleEdit(i)}>Edit</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data available</td>
            </tr>
          )}
        </tbody>
      </table>

      <br />
      <label>Enter your Name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your Name"
      />
      <br />
      <br />
      <label>Enter your Age: </label>
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your Age"
      />
      <br />
      <br />
      <label>Enter your Email: </label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your Email"
      />
      <br />
      <br />
      {(index !== null) ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={AddToList}>Add to List</button>
      )}
      <br />
    </div>
  );
};

export default Todo;
