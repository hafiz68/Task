import axios from 'axios';

import './App.css';
import Adduser from './pages/cmponents/adUser';
import Listing from './pages/cmponents/listing';
import { useEffect, useState } from 'react';

function App(props) {

  const [users, setUsers] = useState([])
  const [seletedUser, setSeletedUser] = useState({})

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
    <Adduser users= {users}  setUsers={setUsers} seletedUser={seletedUser}/>
    <Listing users= {users}  setUsers={setUsers} setSeletedUser={setSeletedUser}/>
    </>
  );
}

export default App;
