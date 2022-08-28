import React from 'react'
import SuccessIcon from '../../Assets/SuccessIcon'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
const Success = ({formData,page,setPage}) => {
  return (
    <div>
      <SuccessIcon/>
        <Heading 
        heading={`Congratulations,${formData.displayName}!`}
        subHeading="You have completed onboarding,you can start using the Eden!"/>
       <Button page={page} setPage={setPage}>
      Launch Eden
      </Button>
    </div>
  )
}

export default Success