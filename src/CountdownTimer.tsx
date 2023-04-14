import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface ICountdownWithProgressBar{
  count:boolean
  timeLeft:number;
  setTimeLeft:Dispatch<SetStateAction<number>>
}

const CountdownWithProgressBar = ({count,timeLeft,setTimeLeft}:ICountdownWithProgressBar) => {
  

  useEffect(() => {
    if(count===true){
      console.log('veio')
      const timer:any =
      timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearInterval(timer);
    }
    
  }, [timeLeft,count]);

  const progress = (45 - timeLeft) * (100 / 45);

  return (
    <CountdownWithProgressBarContainer>
      <div className='time-display'>
        <div className='time-span'>{timeLeft}.</div>
        </div> 
        <div style={{ height: '20px', width: '100%', backgroundColor: '#e0e0de' }}>
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              backgroundColor: '#f8a17f',
            }}
          />
        </div>
    </CountdownWithProgressBarContainer>
  );
};

export default CountdownWithProgressBar;

const CountdownWithProgressBarContainer=styled.div`
  width:300px;
  height:500px;
  font-size:35px;
  position:absolute;
  top:100px;
  left:300px;
  color:#ffffff;
  .time-display{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:#ffffff;
    .time-span{
      color:#ffffff;
    }
  }
`