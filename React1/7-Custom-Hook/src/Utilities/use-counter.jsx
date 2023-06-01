import { useState, useEffect } from "react";

function useCounter(increment=true){
    //increment set to true just bcz if any boolean is not given it will consider as true --- if it is given it will ignore.
    let[counter, setCounter]=useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(increment) setCounter(counter => counter +1);
            else setCounter(counter => counter -1)
        },1000);
    }, []);
    return counter;
}
export default useCounter;