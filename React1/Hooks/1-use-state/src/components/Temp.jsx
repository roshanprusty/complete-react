import { useState } from "react";

function Temp(){
    let[liked, setLiked]=useState(0) //
    function like(){
        setLiked(liked++);
    }
    function dislike(){
        setLiked(liked--);
    }
    return(<>
        <h2>Photo</h2>
        <p>{liked}</p>
        <button onClick={like}>Like</button>
        <button onClick={dislike}>Dislike</button>
    </>)
}
export default Temp;