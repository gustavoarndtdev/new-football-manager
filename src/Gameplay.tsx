import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CountdownTimer from "./CountdownTimer";

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

  const gameLogic = (): void => {
    const randomNumber=Math.floor(Math.random() * 100) + 1;
    const playerOneNumbers=[1,2,3]
    const playerTwoNumbers=[98,99,100]
    console.log('randomNumber',randomNumber)
    if(playerOneNumbers.includes(randomNumber)){
      setScorePlayerOne(state=>state+1)
    }
    if(playerTwoNumbers.includes(randomNumber)){
      setScorePlayerTwo(state=>state+1)
    }
  };

  useEffect(() => {
    if (timeLeft < 45) {
      gameLogic();
    }
    
  }, [timeLeft]);

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
