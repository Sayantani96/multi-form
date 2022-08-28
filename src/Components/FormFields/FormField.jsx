import React from 'react'
import './FormField.css'
const FormField = ({label,placeholder,type,name,formData,setFormData,prewritten}) => {
  const changeHandler=e=>{
    if(prewritten){
      setFormData({
        ...formData,
        [e.target.name]:`${prewritten}${e.target.value}`
      })}
      else{
        setFormData({
          ...formData,
          [e.target.name]:e.target.value
        })
      }
      console.log(formData);
    }
  return (
    <div>
        <p>
           <label htmlFor='ipt'>
           {label}
            </label> 
        </p>
        <div className='form-input'>
        {
          prewritten? <div className='pre-written'>
            {prewritten}
          </div>:''
        }
        <input 
        className='input-field' 
        placeholder={placeholder} 
        id='ipt'
        type={type}
        name={name}
        onChange={changeHandler}
        />
        </div>
    </div>
  )
}

export default FormField