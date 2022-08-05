import axios from 'axios';

import './App.css';
import Adduser from './pages/cmponents/adUser';
import Listing from './pages/cmponents/listing';
import { useEffect, useState } from 'react';

function App() {

  const [users, setUsers] = useState([])
  const [seletedUser, setSeletedUser] = useState({})
  const [disable, setDisable] = useState(false);


  const getUsers = (e) => {
    axios({
      // Endpoint to send files
      url: "http://localhost:5001/api/user",
      method: "GET",
      // Attaching the form data
    })
      .then((res) => {
        console.log(res.data);
      
        setUsers(res.data);
      })
      // Catch errors if any
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(seletedUser,"seletedUserAppp")

  useEffect(()=>{
    getUsers()
  },[])

  return (
    <>
    <Adduser users= {users} disable={disable } setUsers={setUsers} seletedUser={seletedUser} setDisable={setDisable}/>
    <Listing users= {users}  setUsers={setUsers} setSeletedUser={setSeletedUser}  disable={disable } setDisable={setDisable}/>
    </>
  );
}

export default App;