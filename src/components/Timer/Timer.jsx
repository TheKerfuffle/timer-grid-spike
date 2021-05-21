

function Timer(props) {

    function startTimer() {
        console.log('Start');
    }

    function stopTimer() {
        console.log('Stop');
    }

    function resetTimer() {
        console.log('Reset');
    }


    return (
        <>
            <h3>Timer goes here</h3>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </>
    )
}

export default Timer;