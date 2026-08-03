import { useState } from 'react';

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick() {
    setPlayer({
      ...player,
      score: player.score + 1
    });
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value
    });
  }

  return (
    <div className="score-card">

      <h2>Player Score</h2>

      <p>
        Score: <b>{player.score}</b>
      </p>

      <button onClick={handlePlusClick}>
        +1
      </button>


      <label>
        First Name:
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>


      <label>
        Last Name:
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>

    </div>
  );
}