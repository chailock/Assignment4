import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMember() {
  const navigate = useNavigate();

  const [file, setFile] = useState("");

  const [firstName, setFirstName] = useState("");

  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = localStorage.length + 1;
    localStorage.setItem(
      userId,
      JSON.stringify({
        name: firstName,
        title: title,
        file: file,
      })
    );
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const dataUrl = e.target.result;
        setFile(dataUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="back-arrow">
        <i className="fa-solid fa-arrow-left" onClick={() => navigate(-1)}></i>
      </div>
      <form>
        <div className="image">
          <img src={file} />
          <input type="file" onChange={handleChange} />
        </div>
        <br />
        <br />
        <div className="ipunt-container">
          <input
            className="shadow p-3 mb-5 bg-body-tertiary rounded"
            type="firstname"
            id="firstname"
            placeholder="firstName"
            onChange={handleFirstNameChange}
          />
          <br />
          <input
            className="shadow p-3 mb-5 bg-body-tertiary rounded"
            type="tittle"
            id="title"
            placeholder="tittle"
            onChange={handleTitleChange}
          />
        </div>
        <br />
        <div className="Add-Member-btn">
          <button onClick={handleSubmit}>Add Member</button>
        </div>
      </form>
    </>
  );
}

export default AddMember;
