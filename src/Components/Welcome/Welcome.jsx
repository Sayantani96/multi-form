import React from 'react'
import Button from '../Button/Button'
import FormField from '../FormFields/FormField'
import Heading from '../Heading/Heading'

const Welcome = ({page,setPage,formData,setFormData}) => {
  return (
    <div>
        <Heading 
        heading="Welcome!First things first..."
        subHeading="You can always change them later"/>
        <div>
      <FormField 
      type="text"
      placeholder="Full Name"
      label="Full Name"
      name="fullName"
      formData={formData}
      setFormData={setFormData}/>
        </div>
        <div>
      <FormField 
      type="text"
      placeholder="Display Name"
      label="Display Name"
      name="displayName"
      formData={formData}
      setFormData={setFormData}
     />
        </div>
       
     
      <Button page={page} setPage={setPage} type="submit" formData={formData}>
      Create Workspace
      </Button>
    </div>
  )
}

export default Welcome