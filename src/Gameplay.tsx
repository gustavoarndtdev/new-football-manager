import { time } from 'console';
import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';

const Gameplay = () => {
  const [count, setCount]=useState<boolean>(false)
  const [timeLeft, setTimeLeft] = useState(45);

const handleRunning=():void=>{
  setCount(true)
}
const handleStop=():void=>{
  setCount(false)
}

const handleRestart=():void=>{
  setTimeLeft(45)
}
console.log(count)
  return (
    <div
      style={{
        backgroundImage: 'url(https://img.freepik.com/vetores-gratis/campo-de-futebol-verde-de-vetor-ou-campo-de-futebol-campo-de-futebol_1284-41290.jpg)',
        backgroundSize: 'cover',
        height: '100vh',
        width:'100hv',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
        <CountdownTimer count={count} timeLeft={timeLeft} setTimeLeft={setTimeLeft}/>
      <div
        style={{
          backgroundColor: '#fff',
          width: '300px',
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <p>A partida irá começar</p>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <button style={{ margin: '0 10px' }} onClick={handleRunning}>Start</button>
        <button style={{ margin: '0 10px' }} onClick={handleStop}>Stop</button>
        <button style={{ margin: '0 10px' }} onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
};

export default Gameplay;
