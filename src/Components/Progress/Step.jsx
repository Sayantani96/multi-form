

import './ProgressBar.css'
const Step = ({label,selected}) => {
   return(
    <div className="step-circle">
        <div className={selected?'on-select':'not-select'}>
        {label+1}
        </div>
    </div>
   )
}

export default Step