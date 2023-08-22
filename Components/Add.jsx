import "./Style.css";
import "./AddMember";
import { useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate();
  const localStorageKeys = Object.keys(localStorage);
  return (
    <>
      <div className="Add-button">
        <button onClick={() => navigate("/addmember")}>Add M</button>
      </div>
      <br />
      <br />

      <div>
        {localStorage.length ? (
          localStorageKeys.map((key) => {
            const user = JSON.parse(localStorage.getItem(key));
            return (
              <div className="box-container">
                <div
                  className="shadow p-3 mb-5 bg-body-tertiary rounded"
                  key={key}
                >
                  <div className="pic-name">
                    <img src={user.file} />
                    <p>
                      <span>{user.name}</span>
                    </p>
                    <br />
                    <p1>{user.title}</p1>
                  </div>

                  <div className="icons">
                    <i
                      class="fa-solid fa-pen"
                      onClick={() => navigate("/edit", { state: key })}
                    ></i>

                    <i
                      class="fa-solid fa-trash"
                      onClick={() => {
                        localStorage.removeItem(key);
                        window.location.reload();
                      }}
                    ></i>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="No-members">
            <h2 className="shadow p-3 mb-5 bg-body-tertiary rounded">
              No Members in the database
            </h2>
          </div>
        )}
      </div>
    </>
  );
}

export default Add;
