import { useState } from 'react'
import './Contact.css'
const Contact = () => {

    const [user, setUser] = useState({
        name: "",
        address: "",
        email: "",
        phone: "",
        message: "",
    });

    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value });
    }

    const postData = async (event) => {
        event.preventDefault();

        // destructuring the values of the user object for passing to the firebase
        const { name, address, email, phone, message } = user;

        if (name && address && email && phone && message) {
            // we need to write the name of our db from our side and write .json at the end of it
            // because firebase wants the data in json format
            const res = await fetch("https://react-form-new-6252c-default-rtdb.firebaseio.com/user.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    address,
                    email,
                    phone,
                    message,
                })
            });

            if (res) {
                setUser({
                    name: "",
                    address: "",
                    email: "",
                    phone: "",
                    message: "",
                });
                alert("Thanks for contacting...")
            }
        }
        else {
            alert("Please fill all the fields")
        }


    }

    return (
        <>
            <section className="contact_wrapper">
                <div className="contact_info">
                    <h3 className="title">
                        Contact Info
                    </h3>

                    <ul className="icons_wrapp">
                        <li>
                            <div className="icon">
                                <span className="material-icons-outlined"> place </span>
                            </div>
                            <div className="text">
                                123 ABCDedf Road, 123 ABC, ABCD - 123456123 ABCDedf Road, 123 ABC, ABCD - 123456
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <span className="material-icons-outlined"> mail_outline </span>
                            </div>
                            <div className="text">
                                ABCDedfRoad@ABCD.com
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <span className="material-icons-outlined"> phone_in_talk </span>
                            </div>
                            <div className="text">
                                123-456-789
                            </div>
                        </li>
                    </ul>

                    <ul className="soci_wrap">
                        <li>
                            <a href="#">
                                <span className="material-icons-outlined"> facebook </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="material-icons-outlined"> face </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="material-icons-outlined"> facebook </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="material-icons-outlined"> face </span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="contact_msg">
                    <h3 className="title">
                        Send a Message
                    </h3>

                    <form method='POST'>
                        <div className="form_fild">
                            <div className="input_group w_50">
                                <input type="text" name="name" className="input" required autoComplete='off' value={user.name} onChange={getUserData} />
                                <label className="placeholder">Name</label>
                            </div>

                            <div className="input_group w_50">
                                <input type="text" name='address' className="input" required autoComplete='off' value={user.address} onChange={getUserData} />
                                <label className="placeholder">Address</label>
                            </div>

                            <div className="input_group w_50">
                                <input type="text" name='email' className="input" required autoComplete='off' value={user.email} onChange={getUserData} />
                                <label className="placeholder">Emal Address</label>
                            </div>

                            <div className="input_group w_50">
                                <input type="tel" name='phone' className="input" required autoComplete='off' value={user.phone} onChange={getUserData} />
                                <label className="placeholder">Mobile Number</label>
                            </div>

                            <div className="input_group w_100">
                                <textarea name='message' className="input input_textarea " rows="6" required autoComplete='off' value={user.message} onChange={getUserData}></textarea>
                                <label className="placeholder textarea">Write your message here...</label>
                            </div>

                            <div className="input_group">
                                <input type="submit" className="btn" value="Send" onClick={postData} />
                            </div>

                        </div>
                    </form>

                </div>

            </section>
        </>
    )
}

export default Contact