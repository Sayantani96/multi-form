import React from 'react'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import LinkCard from '../LinkCard/LinkCard'
import './Plan.css'
const Plan = ({page,setPage,formData,setFormData}) => {
  return (
    <div>
        <Heading 
        heading="How are you planning to use Eden?"
        subHeading="We'll streamline your experience accordingly"/>
       <div className='plans'>
       <LinkCard 
       heading="For Myself" 
       content=" Write better.Think more clearly.Stay organized"
       formData={formData}
       setFormData={setFormData}
       name="myself"/>
       <LinkCard 
       heading="With My Team" 
       content="Wikis,docs,tasks and projects,all in one place"
       formData={formData}
       setFormData={setFormData}
       name="team"/>
       </div>
        <Button page={page} setPage={setPage} formData={formData}>
      Create Workspace
      </Button>
    </div>
  )
}

export default Plan