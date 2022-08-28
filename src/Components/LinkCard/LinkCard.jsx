import React from 'react'
import './LinkCard.css'
const LinkCard = ({heading,content,name,formData,setFormData}) => {
    const dataHandler=()=>{
        setFormData({...formData,plan:name});
    }
  return (
    <div className='card' onClick={dataHandler}>
      <div className='icon'>
      {
        name==="team"?<i className="fa-solid fa-people-group"></i>:
        <i className="fa-solid fa-child"></i>
      }
      </div>
       
        <h5>{heading}</h5>
        <p className='card-content'>
           {content}
        </p>
    </div>
  )
}

export default LinkCard