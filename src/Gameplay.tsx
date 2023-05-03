import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CountdownTimer from "./CountdownTimer";
import { ITeam, mockTeamOne, mockTeamTwo } from "./mockData";

const Gameplay = () => {
  const [count, setCount] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState(45);
  const [scorePlayerOne, setScorePlayerOne] = useState<number>(0);
  const [scorePlayerTwo, setScorePlayerTwo] = useState<number>(0);

  const handleRunning = (): void => {
    setCount(true);
  };
  const handleStop = (): void => {
    setCount(false);
  };

  const handleRestart = (): void => {
    setTimeLeft(45);
    setScorePlayerOne(0);
    setScorePlayerTwo(0);
  };

  const getTeamSkills=(team:ITeam):any=>{
    const teamAttackArray=team.players.map((player)=>player.skills.attack)
    const teamDefenseArray=team.players.map((player)=>player.skills.defense)
    const sumOfTeamAttack=teamAttackArray.reduce((acc, num) => acc + num, 0)
    const sumOfTeamDefense=teamDefenseArray.reduce((acc, num) => acc + num, 0)
    const attackAverage=sumOfTeamAttack/teamAttackArray.length
    const defenseAverage=sumOfTeamDefense/teamDefenseArray.length
    return {
      attack:attackAverage/100,
      defense:defenseAverage/100
    }
  }

  const gameLogic = (): void => {
    const teamOneAverageSkills=getTeamSkills(mockTeamOne)
    const teamTwoAverageSkills=getTeamSkills(mockTeamTwo)
    console.log('teamOneAverageSkills',teamOneAverageSkills)
    console.log('teamTwoAverageSkills',teamTwoAverageSkills)
    const defenseOne = teamOneAverageSkills.defense;
    const defenseTwo = teamTwoAverageSkills.defense;
    const attackOne = teamOneAverageSkills.attack;
    const attackTwo = teamTwoAverageSkills.attack;
    const probabilidadeGol = 0.03155; // Probabilidade de gol por minuto
    const probabilidadeVisitante = 0.4; // Probabilidade de gol ser do time visitante
    const dice1 = Math.random();
    const dice2 = Math.random();
    const diceDefence = Math.random();
    const diceAttack = Math.random();
    console.log("dice1", dice1, "dice2", dice2);
    if (dice1 < probabilidadeGol) {
      if (dice2 > probabilidadeVisitante) {
        if (attackOne * diceAttack > defenseTwo * diceDefence) {
          setScorePlayerOne((state) => state + 1);
        }
      } else {
        if (attackTwo * diceAttack > defenseOne * diceDefence) {
          setScorePlayerTwo((state) => state + 1);
        }
      }
    }
  };

  useEffect(() => {
    if (timeLeft < 45) {
      gameLogic();
    }
  }, [timeLeft]);

  useEffect(() => {
    console.log(
      "scorePlayerOne",
      scorePlayerOne,
      "scorePlayerTwo",
      scorePlayerTwo
    );
  }, [scorePlayerOne, scorePlayerTwo]);

  return (
    <GameplayContainer>
      <div
        style={{
          backgroundImage:
            "url(https://img.freepik.com/vetores-gratis/campo-de-futebol-verde-de-vetor-ou-campo-de-futebol-campo-de-futebol_1284-41290.jpg)",
          backgroundSize: "cover",
          height: "100vh",
          width: "100hv",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div className="scoreboard">
          <div className="score-1">{scorePlayerOne}</div>
          <div className="score-2">{scorePlayerTwo}</div>
        </div>
        <CountdownTimer
          count={count}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
        />
        <div
          style={{
            backgroundColor: "#fff",
            width: "300px",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <p>A partida irá começar</p>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <button style={{ margin: "0 10px" }} onClick={handleRunning}>
            Start
          </button>
          <button style={{ margin: "0 10px" }} onClick={handleStop}>
            Stop
          </button>
          <button style={{ margin: "0 10px" }} onClick={handleRestart}>
            Restart
          </button>
        </div>
      </div>
    </GameplayContainer>
  );
};

export default Gameplay;

const GameplayContainer = styled.div`
  width: 100hv;
  height: 100hv;
  .scoreboard {
    width: 100%;
    height: 80px;
    position: absolute;
    top: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 50px;
    color: #d6202f;
    .score-1,
    .score-2 {
      background-color: #000000;
      width: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
