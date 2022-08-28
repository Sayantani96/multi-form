import React from 'react'
import './Button.css'
const Button = ({page,setPage,children,type,formData}) => {
  const clickHandler=()=>{
    console.log(page);
    if(page===0){
      if(formData.fullName && formData.displayName){
        setPage(page+1);
      }
      else{
        alert("Required fields not filled");
      }
    }
     if(page===1){
      if(formData.wName!==""){
        setPage(page+1);
      }
      else{
        alert("Required fields not filled");
      }
    }
     if(page===2){
      if(formData.plan){
        setPage(page+1);
      }
      else{
        alert("Click on one of the cards");
      }
    }
    if(page===3){
      setPage(0);
    }
  }
  return (
    <div className='next-step-btn'>
        <button onClick={clickHandler} className='btn' type={type}>
            {children}
        </button>
    </div>
  )
}

export default Button