import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state;
  const user = JSON.parse(localStorage.getItem(userId));
  const [file, setFile] = useState(user.file);

  const [firstName, setFirstName] = useState(user.name);

  const [title, setTitle] = useState(user.title);

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <i className="fa-solid fa-arrow-left" onClick={() => navigate(-1)}></i>

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
            value={firstName}
          />
          <br />
          <input
            className="shadow p-3 mb-5 bg-body-tertiary rounded"
            type="tittle"
            id="title"
            placeholder="tittle"
            onChange={handleTitleChange}
            value={title}
          />
          <br />
        </div>
        <div className="Add-Member-btn">
          <button onClick={handleSubmit}>Edit Member</button>
        </div>
      </form>
    </>
  );
}

export default Edit;
