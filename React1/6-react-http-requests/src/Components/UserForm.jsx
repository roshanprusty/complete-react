import './UserForm.css';
import { useRef } from 'react';

function UserForm(props){
    let fnameRef = useRef();
    let lnameRef = useRef();
    let emailRef = useRef();
    let pswdRef = useRef();
    let countryRef = useRef();
    let cityRef = useRef();
    let dateRef = useRef();
    let genderRef = useRef();
    
    function onCreateUser(event){
        event.preventDefault();
        let user = {
            firtName: fnameRef.current.value,
            lastName: lnameRef.current.value,
            email: emailRef.current.value,
            password: pswdRef.current.value,
            country: countryRef.current.value,
            city: cityRef.current.value,
            dob: dateRef.current.value,
            gender: genderRef.current.value
        }
        // eslint-disable-next-line react/prop-types
        props.onCreateUser(user);
    }

    return <>
            <div id="myModal" className="modal">
                    <div className="modal-content">
                        <div className="close" onClick={props.closeForm}>&times;</div>
                        <h3>Create new user</h3>
                        <div className="user-form ">
                            <form onSubmit={onCreateUser}>
                                <div>
                                    <input type="text" placeholder="First name" ref={fnameRef} defaultValue={props.editMode ? props.user.firstName : ''
                                    }/>
                                    <input type="text" placeholder="Last name" ref={lnameRef} defaultValue={props.editMode ? props.user.lastName : ''
                                    }/>
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" ref={emailRef} defaultValue={props.editMode ? props.user.email : ''
                                    }/>
                                </div>
                                <div>
                                    <input type="password" placeholder="Password" ref={pswdRef} defaultValue={props.editMode ? props.user.password : ''
                                    }/>
                                    <input type="password" placeholder="Confirm Password" defaultValue={props.editMode ? props.user.password : ''
                                    }/>
                                </div>
                                <div>
                                    <select name="country" ref={countryRef} defaultValue={props.editMode ? props.user.country : ''
                                    }>
                                        <option value="India">India</option>
                                        <option value="Germany">Germany</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                    </select>
                                    <select name="city" ref={cityRef} defaultValue={props.editMode ? props.user.city : ''
                                    }>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Berlin">Berlin</option>
                                        <option value="New York">New York</option>
                                        <option value="London">London</option>
                                    </select>
                                </div>
                                <div>
                                    <input type="date" placeholder="Date of Birth" ref={dateRef} defaultValue={props.editMode ? props.user.dob : ''
                                    }/>
                                    <select name="gender" ref={genderRef} defaultValue={props.editMode ? props.user.gender : ''
                                    }>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Unknown">Unknown</option>
                                    </select>
                                </div>
                                <button className='add-user-button' >{props.editMode ? 'Update User' : 'Create User'}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
}

export default UserForm;