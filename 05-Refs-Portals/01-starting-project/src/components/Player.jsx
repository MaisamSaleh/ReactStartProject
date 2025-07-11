import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef('unknown entity');

  const [ enteredPlayerName , setEnteredPlayerName ] = useState('unknown entity');

  function handleClick(){
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknwon entity'} </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
