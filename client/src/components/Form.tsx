import React from 'react'
import FormSubmit from './Buttons/FormSubmit';
import GetOne from './Buttons/GetOne';
import GetAll from './Buttons/GetAll';

const Form: React.FC = () => {
  return (
    <div>I am the MAIN FORM ! <br />
    <div id="btn-stack">
        <FormSubmit />
        <GetAll />
        <GetOne />
    </div>
        
    </div>
    
  )
}

export default Form