import React, { useEffect, useState } from "react";

function Countdown({ time }) {
  const [count, setCount] = useState(time);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return count > 0 ? (
    <div>Countdown: {count}</div>
  ) : (
    <div>Countdown finished!</div>
  );
}

export default Countdown;
