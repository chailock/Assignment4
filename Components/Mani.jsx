import { useState } from "react";

import "./Mani.css";

import EditForm from "./EditForm";

function Button() {
  const [val, setValue] = useState(false);

  const [file, setFile] = useState("");

  const [firstName, setFirstName] = useState("");

  const [tittle, setTitle] = useState("");

  const [editing, setEditing] = useState(false);

  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const [formData, setFormData] = useState({
    file: null,
    firstName: "",
    tittle: "",
  });

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleFormSubmit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  function savedata() {
    let jobs = JSON.parse(localStorage.getItem("jobs") || "[]");
    let job = {
      firstname: firstName,
      tittle: tittle,
      file: file,
    };
    jobs.push(job);
    localStorage.setItem("jobs", JSON.stringify(jobs));
    localStorage.setItem("firstname", firstName);
    localStorage.setItem("tittle", tittle);
    localStorage.setItem("file", file);
  }

  function handleChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const dataUrl = e.target.result;
        setFile(dataUrl);
      };

      reader.readAsDataURL(file);
    }
  }

  const haddlearrow = () => {
    setValue(false);
  };

  const haddleBtn = () => {
    setValue(true);
  };

  return (
    <>
      {!val ? (
        <>
          <button className="btn" onClick={haddleBtn}>
            Add
          </button>
          <br />
          <br />
          <div className=" p-shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="imag__component">
              <img src={localStorage.getItem("file")} />
              <div className="content">
                <p>
                  <span>{localStorage.getItem("firstname")}</span>
                </p>
                <p>{localStorage.getItem("tittle")}</p>
              </div>
            </div>

            <div className="component__icons">
              <div>
                {editing ? (
                  <EditForm
                    onSubmit={handleFormSubmit}
                    onCancel={handleCancel}
                    props={formData}
                  />
                ) : (
                  <div onClick={handleShowForm}>
                    <div onClick={handleEditClick}>
                      <span>
                        <i class="fa-solid fa-pen"></i>
                      </span>
                      {showForm && <EditForm />}
                    </div>
                  </div>
                )}
              </div>

              <i class="fa-solid fa-trash"></i>
            </div>
          </div>
        </>
      ) : (
        <div>
          <form action="input">
            {setValue ? (
              <i className="fa-solid fa-arrow-left" onClick={haddlearrow}></i>
            ) : (
              ""
            )}
            <div className="image">
              <img src={file} />
              <input type="file" id="file" onChange={handleChange} />
            </div>

            <br />

            <br />
            <input
              className="shadow p-3 mb-5 bg-body-tertiary rounded"
              type="firstname"
              id="firstname"
              placeholder="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <br />
            <input
              className="shadow p-3 mb-5 bg-body-tertiary rounded"
              type="tittle"
              id="tittle"
              placeholder="tittle"
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <button onClick={savedata}>Add Member</button>
          </form>
        </div>
      )}
    </>
  );
}

export default Button;
