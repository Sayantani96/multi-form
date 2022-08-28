import React,{useEffect} from 'react'
import Step from './Step.jsx';
const ProgressBar = ({steps,pageNum}) => {
    useEffect(()=>{
        console.log(pageNum);
    })
  return (
    <div className='container'>

        {
            steps.map((step,index)=><Step label={index} selected={pageNum>=index}/>)
        }
    </div>
  )
}

export default ProgressBar