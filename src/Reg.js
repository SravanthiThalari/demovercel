import React, { useState } from "react";
import axios from "axios";

function Reg() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const submit = async () => {
    try {
      const res = await axios.post(
        "https://new-1-rv4p.onrender.com/register",
        data
      );
      alert(res.data);
    } catch (error) {
      alert(error.message);
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
      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={data.email}
        onChange={(e) =>
          setData({ ...data, email: e.target.value })
        }
      />
      <br /><br />

      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Reg;
