import React, { useEffect, useState } from "react";
import axios from "axios";

import "./addUser.css";

const Adduser = ({ users, setUsers, seletedUser }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: "",
    date: "",
    country: "",
    gender: "",
  });

  const [disable, setDisable] = useState(false);

  const hanleValue = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  console.log(seletedUser, "seletedUser");
  const hanleBtn = () => {
    console.log(user);
    axios({
      // Endpoint to send files
      url: "http://localhost:5001/api/user",
      method: "POST",
      // Attaching the form data
      data: user,
    })
      .then((res) => {
        console.log(res.data.user.createduser);
        const newUsers = [res.data.user.createduser, ...users];
        setUsers(newUsers);
        setUser({
          firstName: "",
          lastName: "",
          age: "",
          date: "",
          country: "",
          gender: "",
        });
      })
      // Catch errors if any
      .catch((err) => {
        console.log(err);
      });
  };

  const hanleUpdate = (e) => {
    console.log(user);
    axios({
      // Endpoint to send files
      url: `http://localhost:5001/api/user/${e.target.value}`,
      method: "PUT",
      // Attaching the form data
      data: user,
    })
      .then((res) => {
        const Arr = users.filter((olduser) => {
          return olduser.id != e.target.value;
        });
        console.log(Arr, "data");

        setUsers(Arr);
        const newUsers = [res.data, ...Arr];
        setUsers(newUsers);
        setUser({
          firstName: "",
          lastName: "",
          age: "",
          date: "",
          country: "",
          gender: "",
        });
        setDisable(false);
      })
      // Catch errors if any
      .catch((err) => {
        console.log(err);
      });
  };

  const hanleCacnel = () => {
    console.log(user);

    setUser({
      firstName: "",
      lastName: "",
      age: "",
      date: "",
      country: "",
      gender: "",
    });
    setDisable(false);
  };

  useEffect(() => {
    setUser(seletedUser);
    setDisable(true);
  }, [seletedUser]);

  return (
    <center>
      <h3 className="m-5">Add data to add user</h3>
      <form className="form col-sm-8 mb-5">
        <label className="col-sm-6">
          First Name:
          <input
            className="form-control"
            name="firstName"
            type="text"
            value={user.firstName}
            onChange={(e) => hanleValue(e)}
          />
        </label>
        <label className="col-sm-6">
          Last Name:
          <input
            className="form-control"
            name="lastName"
            value={user.lastName}
            type="text"
            onChange={(e) => hanleValue(e)}
          />
        </label>
        <label className="col-sm-6">
          Age:
          <input
            className="form-control"
            name="age"
            value={user.age}
            type="text"
            onChange={(e) => hanleValue(e)}
          />
        </label>
        <label className="col-sm-6">
          Date:
          <input
            className="form-control"
            name="date"
            value={user.date}
            type="date"
            onChange={(e) => hanleValue(e)}
          />
        </label>
        <label className="col-sm-6">
          Country:
          <input
            className="form-control"
            name="country"
            value={user.country}
            type="text"
            onChange={(e) => hanleValue(e)}
          />
        </label>
        <label className="col-sm-6">
          Gender:
          <select
            className="form-control"
            value={user.gender}
            name="gender"
            onChange={(e) => hanleValue(e)}
          >
            <option>Selec gender:</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </label>
        {!disable ? (
          <button className="btn" type="button" onClick={hanleBtn}>
            Add
          </button>
        ) : (
          <div>
            <button
              className="btn mr-4"
              type="button"
              value={seletedUser?.id}
              onClick={hanleUpdate}
            >
              Update
            </button>
            <button className="btn" type="button" onClick={hanleCacnel}>
              Cancel
            </button>
          </div>
        )}
      </form>
    </center>
  );
};
export default Adduser;
