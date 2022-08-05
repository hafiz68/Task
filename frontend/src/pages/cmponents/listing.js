import React from "react";
import axios from "axios";

const Listing = ({ users, setUsers, setSeletedUser,setDisable }) => {
  const deleteHande = (id) => {
    console.log(id.target.value);
    axios({
      // Endpoint to send files
      url: `http://localhost:5001/api/user/${id.target.value}`,
      method: "DELETE",
    })
      .then((res) => {
        const Arr = users.filter((user) => {
          return user.id != id.target.value;
        });
        setUsers(Arr);
      })
      // Catch errors if any
      .catch((err) => {
        console.log(err);
      });
  };

  const updateHandle = (e) => {
    const Arr = users.filter((user) => {
      return user.id == e.target.value;
    });
    
    setSeletedUser(Arr[0])
    setDisable(true)
    window.scrollTo(0, 0);
  };

  return (
    <>
      <center>
        {users.length > 0 ? (
          <table className="table">
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
            {users.map((item, index) => {
              return (
                <tbody>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.gender}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-danger mr-3"
                        value={item.id}
                        onClick={deleteHande}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        value={item.id}
                        onClick={updateHandle}
                        class="btn btn-secondary"
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        ) : (
          <h3>No user found</h3>
        )}
      </center>
    </>
  );
};
export default Listing;
