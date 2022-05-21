import React, { useState } from "react";
// import FormSubmit from './Buttons/FormSubmit';
import GetOne from "./Buttons/GetOne";
// import GetAll from './Buttons/GetAll';

const Form: React.FC = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  return (
    <>
      <textarea form="prompt-form">

      </textarea>
      <form id="prompt-form">
        {/* <div id="btn-stack"> */}
        <GetOne />
        {/* </div> */}
      </form>
    </>
  );
};

export default Form;
