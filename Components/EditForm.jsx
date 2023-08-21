import React, { useState } from "react";

const EditForm = (props) => {
  const [file, setFile] = useState(props.file || null);
  const [firstName, setFirstName] = useState(props.firstName || "");
  const [tittle, setTittle] = useState(props.tittle || "");

  const [formVisible, setFormVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      file,
      firstName,
      tittle,
    };
    onSubmit(formData);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <form style={{ display: formVisible ? "hide" : "none" }} id="Editform">
        <div>
          <input type="file" id="file" onChange={handleFileChange} />
        </div>
        <div>
          <input
            className="shadow p-3 mb-5 bg-body-tertiary rounded"
            type="text"
            id="firstName"
            value={firstName}
            placeholder="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <input
            className="shadow p-3 mb-5 bg-body-tertiary rounded"
            type="text"
            id="title"
            value={tittle}
            placeholder="tittle"
            onChange={(e) => setTittle(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Edit Member</button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
