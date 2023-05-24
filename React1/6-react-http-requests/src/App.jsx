import { useEffect, useState } from 'react';
import UserForm from './Components/UserForm';
import './App.css';
import UserDetails from './Components/UserDetails';
import axios from 'axios'
import Loader from './Components/Loader';
function App() {
  let [showForm, setShowForm] = useState(false);
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(false);
  let [errorMessage, setErrorMessage] = useState(null);
  let [editMode, setEditMode] = useState(false);
  let [userToEdit, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);
  function addUserHandler() {
    setEditMode(false);
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
    if (!editMode) {
      axios.post("https://react-form-new-6252c-default-rtdb.firebaseio.com/user.json", user)
        .then((response) => {
          console.log(response.data);
        })
    }
    else {
      console.log(userToEdit);
      console.log(user);
      axios.put("https://react-form-new-6252c-default-rtdb.firebaseio.com/user/" + userToEdit.id + ".json", user)
        .then((response) => {
          console.log(response);
          setShowForm(false);
        })
        .catch((err) => {
          setErrorMessage(err.message);
        })
    }
    fetchUser();
    setShowForm(false);
  }
  function fetchUser() {
    // setLoading(true);
    // setErrorMessage(null); //here we setting up errorMessage to null just because we want to clear all old error message
    // fetch("https://react-form-new-6252c-default-rtdb.firebaseio.com/user.json")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     let userData = [];
    //     for (let key in data) {
    //       userData.push({ ...data[key], id: key });
    //     }
    //     // console.log(userData);
    //     setUsers(userData);
    //     setLoading(false);
    //   })
    //   //REMEMBER :-In NORMAL Fetch method we have to add error message manually it don't have property to show error message.
    //   .catch((err) => {
    //     // setErrorMessage(err.message); //Unexpected token 'o', "not found" is not valid JSON
    //     setErrorMessage("SOMETHING WENT WRONG!!");
    //     setLoading(false);
    //   })

    setLoading(true);
    setErrorMessage(null); //here we setting up errorMessage to null just because we want to clear all old error message
    axios.get("https://react-form-new-6252c-default-rtdb.firebaseio.com/user.json")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        let userData = [];
        for (let key in data) {
          userData.push({ ...data[key], id: key });
        }
        // console.log(userData);
        setUsers(userData);
        setLoading(false);
      })
      //to visualize the working of catch block change the link (json to xml)
      .catch((err) => {
        setErrorMessage(err.message);
        setLoading(false);
      })
  }
  function onEditUser(user) {
    setEditMode(true);
    setUser(user);
    setShowForm(true);
    console.log(user);
  }
  return (
    <div>
      <div className='page-header'>
        <button className='btn btn-success mt-5' onClick={addUserHandler}>Add User</button>
        <button className='btn btn-normal mt-5' onClick={fetchUser}>Get Users</button>
      </div>
      {!loading && !errorMessage && <UserDetails users={users} onEditUser={onEditUser}></UserDetails>}
      {errorMessage && <h2>{errorMessage}</h2>}
      {loading && <Loader></Loader>}
      {showForm && <UserForm closeForm={closeForm} onCreateUser={onCreateUser} editMode={editMode} user={userToEdit}></UserForm>}
    </div>
  );
}

export default App;
