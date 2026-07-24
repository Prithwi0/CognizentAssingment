import React from "react";

const IndianPlayers = () => {
  const OddTeam = ["Virat", "Hardik", "Dhoni", "Gill", "Bumrah"];
  const EvenTeam = ["Rohit", "Jadeja", "Shami", "Kuldeep", "Surya", "KL Rahul"];

  const [team1, team2] = [OddTeam, EvenTeam];

  const T20Players = ["Virat", "Rohit", "Gill"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane", "Iyer"];
  const mergedPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team</h2>
      <ul>
        {team1.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team</h2>
      <ul>
        {team2.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>T20 Players</h2>
      <ul>
        {T20Players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Ranji Trophy Players</h2>
      <ul>
        {RanjiTrophyPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merge</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
