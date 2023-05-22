import { useState } from 'react';
import UserForm from './Components/UserForm';
import './App.css';
import UserDetails from './Components/UserDetails';
import axios from 'axios'
function App() {
  let [showForm, setShowForm] = useState(false);
  let [users, setUsers] = useState([]);
  function addUserHandler() {
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false)
  }
  function onCreateUser(user) {
    // fetch("https://react-http-request-a8d9e-default-rtdb.firebaseio.com/users.json",{
    //   method: 'POST',
    //   body: JSON.stringify(user),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then((resp)=>{
    //   console.log(resp);
    // })
    axios.post("https://react-form-new-6252c-default-rtdb.firebaseio.com/user.json", user)
      .then((response) => {
        console.log(response.data);
      })
  }
  function fetchUser() {
    fetch("https://react-form-new-6252c-default-rtdb.firebaseio.com/user.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let userData = [];
        for (let key in data) {
          userData.push({ ...data[key], id: key });
        }
        // console.log(userData);
        setUsers(userData);
      })
    // axios.get("https://react-form-new-6252c-default-rtdb.firebaseio.com/user.json")
    // .then((response) => {
    //   return response.data();
    // })
    // .then((data) => {
    //   let userData = [];
    //   for (let key in data) {
    //     userData.push({ ...data[key], id: key });
    //   }
    //   // console.log(userData);
    //   setUsers(userData);
    // })
  }
  return (
    <div>
      <div className='page-header'>
        <button className='btn btn-success mt-5' onClick={addUserHandler}>Add User</button>
        <button className='btn btn-normal mt-5' onClick={fetchUser}>Get Users</button>
      </div>
      <UserDetails users={users}></UserDetails>
      {showForm && <UserForm closeForm={closeForm} onCreateUser={onCreateUser}></UserForm>}
    </div>
  );
}

export default App;
