import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }){
    const dialog = useRef();
    const timer = useRef();
    const [ timeRemaining, setTimeRemaining ] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime*1000;

    if(timeRemaining <= 0){
        clearInterval(timer.current);
        dialog.current.open();
    }

    async function handleStart(){
        timer.current = setInterval(() => {
            setTimeRemaining((prevTimeRremaining) => prevTimeRremaining - 10)
        }, 10);
    }

    function handleStop(){
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleOnReset(){
        setTimeRemaining(targetTime * 1000);
    }

    return(
        <>
            <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleOnReset} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime>1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge 
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Timer is running..' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}