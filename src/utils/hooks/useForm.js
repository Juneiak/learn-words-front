import React from "react";

const useForm = () => {
  const [ values, setValues ] = React.useState({});

  const handleChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;
    setValues({...values, [name]: value})
  }
  const resetForm = React.useCallback((newValues={}) => {
    setValues(newValues);
  })
  return {values, handleChange, resetForm}
}

const useFormWithValidation = () => {
  const [ values, setValues ] = React.useState({});
  const [ errors, setErrors ] = React.useState({});
  const [ isValid, setIsValid ] = React.useState(false);


  const handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    setValues({ ...values, [name]: target.value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity())
  }
  
  const resetForm = React.useCallback(
    (newValues={}, newErrors={}, newIsValid=false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    }
  )
  return {values, errors, isValid, handleChange, resetForm}
}

export {
  useForm,
  useFormWithValidation,
};