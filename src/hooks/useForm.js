import React, { useState } from "react";

const useForm = (fields) => {
  const [inputs, setInputs] = useState({ ...fields });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  return { inputs, handleChange };
};

export default useForm;
