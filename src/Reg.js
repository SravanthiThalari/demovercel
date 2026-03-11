import React, { useState } from "react";
import axios from "axios";

function Reg() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
//   const changeName=(e)=>
//   {
//     setData({...data,[e.target.name]:e.target.value})
//   }

  const submit = async () => {
    try {
      const res = await axios.post(
        "http://cabsystemsms-1.onrender.com/register",
        data
      );
      alert(res.data);
    } catch (xyz) {
      alert(xyz.message);
    }
  };

  return (
    <div>
      <h1>Registration Page</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={data.name}
        onChange={(e) =>
          setData({ ...data, name: e.target.value })
        }
      />
      <br />

      <input
        type="email"
        placeholder="Enter Email"
        value={data.email}
        onChange={(e) =>
          setData({ ...data, email: e.target.value })
        }
      />
      <br />

      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Reg;
