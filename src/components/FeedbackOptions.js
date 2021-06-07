import React from 'react'

const FeedbackOptions = ({onGood, onNeutral, onBad}) =>
      <div>
        <button className='btn-good' type='button' onClick={onGood}>Good</button>
        <button className='btn-neutral' type='button' onClick={onNeutral}>Neutral</button>
        <button className='btn-bad' type='button' onClick={onBad} >Bad</button>
  </div>
      
      
export default FeedbackOptions