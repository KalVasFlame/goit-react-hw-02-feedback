import React from 'react'

const Statistics = ({ good, neutral, bad,total, positivePercentage}) =>
  <>
        
        <ul className='statistic-list'>
          <li className='statistic-item'>Good: { good }</li>
          <li className='statistic-item'>Neutral: { neutral }</li>
          <li className='statistic-item'>Bad: {bad} </li>
          <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}</li>
        </ul>
    </>

export default Statistics