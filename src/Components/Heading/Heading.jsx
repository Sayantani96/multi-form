import React from 'react'
import './Heading.css'
const Heading = ({heading,subHeading}) => {
  return (
    <div>
        <h2 className='main-heading'>
           {heading} 
        </h2>
        <div className='sub-heading'>
            {subHeading}
        </div>
    </div>
  )
}

export default Heading