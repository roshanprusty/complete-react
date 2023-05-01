import { useEffect, useState } from "react";
import "./API.css";

function API() {
    const [data1, setData] = useState();
    async function getUserData() {
        let data = await fetch("https://api.github.com/users");
        let response = await data.json();
        console.log("response", response);
        setData(response);
    }
    useEffect(() => {
        console.log("component did updated");
        getUserData();
    }, []);
    return (<>
        <div className="spinner-container">
            <div className="loading-spinner">
            </div>
        </div>
        <h2>CompB</h2>
        {data1?.map((each, index) => (
            <p key={index}>{each.login}</p>
        ))}

    </>)
}
export default API; 