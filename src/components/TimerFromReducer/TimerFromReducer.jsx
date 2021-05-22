import { useRef, useState } from "react";


function Timer() {

    let [time, setTime] = useState(3595);
    // let [toggleRunning, setToggleRunning] = useState(false);
    const countRef = useRef(null);

    function startTimer() {
        // setToggleRunning(true);
        countRef.current = setInterval(() => {
            setTime((time) => time + 1)
          }, 1000);
    }

    function stopTimer() {
        clearInterval(countRef.current);
        // setToggleRunning(false)
    }

    function resetTimer() {
        setTime(0);
        // setToggleRunning(false);
    }

    const renderTime = () => {
        const getSeconds = `0${(time % 60)}`.slice(-2);
        const minutes = `${Math.floor(time / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    
        return `${getHours} : ${getMinutes} : ${getSeconds}`;
      }

    return (
        <>
            <h3>{renderTime()}</h3>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </>
    )
}

export default Timer;