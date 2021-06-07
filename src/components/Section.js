import React from 'react';


const Section = ({ title, children }) => {
  console.log(children);

 return (<div className='container'>
    <h2 className='feedback'>{title}</h2>
    {children}
  </div>)
  
}
    
  

export default Section