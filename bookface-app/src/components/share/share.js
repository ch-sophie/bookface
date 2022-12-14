import React, { useState } from "react";
// import '../App.css';
import { useNavigate } from "react-router";
import './share.css';
 
export default function Create() {
  const [form, setForm] = useState({
    userId: "",
    desc: "",
    
  });
  
  const navigate = useNavigate();
  

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
 
  async function onSubmit(e) {
    e.preventDefault();
    
    
    const newItem = { ...form };
 
    await fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
 
    setForm({ userId: "", desc: "" });
    
    navigate("/hall");
  }

  return (
    <div>
      <h3 className="sharetop"></h3>

      <form onSubmit={onSubmit}>
        <div className="form">
          <label htmlFor="comment"></label>
          <input type="text" placeholder="What do you want to talk about?" className="shareInput" id="desc" value={form.desc} onChange={(e) => updateForm({ userId: e.target.value, desc: e.target.value })} />
        </div>
        <br />

        <div className="form">
          <input type="submit" value="Share" className="buttonshare" />
        </div>
      </form>
    </div>
    );
}