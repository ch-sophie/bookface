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
  
  // update the state properties
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
 
  // handle submission
  async function onSubmit(e) {
    e.preventDefault();
    
    // when a post request is sent to the create url, it will add a new record to the database
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
          <input type="text" className="shareInput" id="desc" value={form.desc} onChange={(e) => updateForm({ userId: e.target.value, desc: e.target.value })} />
        </div>
        <br />

        <div className="form">
          <input type="submit" value="Share" className="buttonshare" />
          {/* <a href="/" class="cancel" className="btn buttonform">Cancel</a> */}
        </div>
      </form>
    </div>
    );
}