import React, { useState } from "react";

const Home = () => {
  const [inputs, setinput] = useState({
    name: "",
    email: "",
  });
  const [tableDate, settableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const handleChange = (e) => {
    setinput({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handelSumbmit = (e) => {
    e.preventDefault();
    // console.log("inputs", inputs);
    if (editClick) {
      const tempTableData = tableDate;
      Object.assign(tempTableData[editIndex],inputs)
      settableData([...tempTableData]);
      setEditClick(false);
      setinput({
        name: "",
        email: "",
      });
    } else {
      settableData([...tableDate, inputs]);
      setinput({
        name: "",
        email: "",
      });
    }
  };
  const heandelDelete = (index) => {
    const filterData = tableDate.filter((item, i) => i !== index);
    settableData(filterData);
  };
  const handelEdit = (index) => {
    const tempData = tableDate[index];
    console.log("tempData", tempData);
    setinput({ name: tempData.name, email: tempData.email });
    setEditClick(true);
    setEditIndex(index);
  };
  console.log("tableDate", tableDate);
  return (
    <div className="min-h-screen bg-[#004b43] ">
      <h1 className="text-center">Crud App</h1>
      <div className="bg-[#e1bdbd] max-w-fit m-auto p-4 rounded-md">
        <form action="" onSubmit={handelSumbmit}>
          <div className="flex flex-col">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              className="p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              className="p-1 rounded-md"
            />
          </div>
          <button type="submit" className="w-full bg-[#014d64] text-white mt-3">
            {editClick ? "Update" : "ADD"}
          </button>
        </form>
      </div>
      <table className="w-6/12 m-auto mt-3 bg-slate-950  text-white text-center border-2">
        <thead className="bg-red-700 bottom-1">
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody className="text-white bg-gray-600 text-black mx-2">
          {tableDate.map((item, i) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button
                  className="mr-3 text-yellow-300 bg-blue-600 p-2 rounded-md w-20"
                  onClick={() => handelEdit(i)}
                >
                  Edit
                </button>
                <button
                  className="text-white rounded-xl  bg-red-950 p-2 m-1"
                  onClick={() => heandelDelete(i)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
