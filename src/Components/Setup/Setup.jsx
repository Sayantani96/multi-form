import React from 'react'
import Button from '../Button/Button'
import FormField from '../FormFields/FormField'
import Heading from '../Heading/Heading'
const Setup = ({page,setPage,formData,setFormData}) => {
  return (
    <div>
         <Heading 
        heading="Let's set up a home for all your work"
        subHeading="You can always create another workspace later"/>
        <div>
      <FormField
      placeholder="Eden"
      label="Workspace Name"
      type="text"
      formData={formData}
      setFormData={setFormData}
      name="wName"/>
        </div>
        <div>
       <FormField
      placeholder="Example"
      label={["Workspace URL",<span className='optional' key="1">(optional)</span>]}
      type="url"
      prewritten="www.eden.com/"
      formData={formData}
      setFormData={setFormData}
    name="wrkspURL"/>
        </div>
        <Button page={page} setPage={setPage} formData={formData}>
      Create Workspace
      </Button>
    </div>
  )
}

export default Setup