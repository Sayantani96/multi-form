import './App.css';
import Welcome from './Components/Welcome/Welcome';
import Setup from './Components/Setup/Setup';
import Plan from './Components/Describe/Plan';
import Success from './Components/Success/Success';
import { useState } from 'react';
import Logo from './Assets/Logo';
import ProgressBar from './Components/Progress/ProgressBar';

function App() {
  const[page,setPage]=useState(0);
  const [formData,setFormData]=useState({
    fullName:"",
    displayName:"",
    wName:"",
    wrkspURL:'',
    plan:"",
  })
  const componentList=[
    <Welcome 
    page={page} 
    setPage={setPage}
    formData={formData}
    setFormData={setFormData}/>,
    <Setup 
    page={page} 
    setPage={setPage}
    formData={formData}
    setFormData={setFormData}/>,
    <Plan 
    page={page} 
    setPage={setPage}
    formData={formData}
    setFormData={setFormData}/>,
    <Success 
    page={page} 
    setPage={setPage}
    formData={formData}
    setFormData={setFormData}/>
  ];
  return (
    <>
     <Logo/>
     <ProgressBar steps={componentList} pageNum={page}/>
     <div className="App">
     <div>
       {componentList[page]}
     </div>
   </div>
    </>
   
  );
}

export default App;
