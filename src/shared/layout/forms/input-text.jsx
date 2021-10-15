import React, { useContext, useEffect, useState } from 'react';
import { FormContext } from './form-validation';

const InputText = props => {
  const { setFieldValidation, setFieldValue, getFieldValue, init } = useContext(FormContext);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const [wrapperValue, setWapperValue] = useState('');

  const {validations={}, onChange, onBlur} = props;
  useEffect(() => {
    const value = getFieldValue(props.name);
    setWapperValue( value === undefined ? "" : value);
  }, [init]);

  const resetValidation = () => {
    setError(false);
    setMessage('');
  };

  const validation = (id, name, value) => {
    setFieldValue(name, value);
    // required
    if (validations.required === undefined) {
      // Not execute
    } else {
      if (value === undefined || value === '') {
        setError(true);
        setMessage(validations.required);
        setFieldValidation(id, validations.required);
        return;
      }
    }

    setFieldValidation(id, undefined);
  };

  const onChangeHandler = e => {
    setWapperValue(e.target.value);
    resetValidation();
    validation(e.target.id, e.target.name, e.target.value);
    if (onChange !== undefined) {
      onChange(e);
    }
  };

  const onBlurHandler = e => {
    validation(e.target.id, e.target.name, e.target.value);
    if (onBlur !== undefined) {
      onBlur(e);
    }
  };
  
  return (
    <div className="form-item">
      <div className="form-item-label">
        <label htmlFor={`control-${props.name}`}>
          {props.label}
        </label>
      </div>
      <div className="form-item-control">
        <input
          id={`control-${props.name}`}
          value={wrapperValue}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          {...props}
          className={`form-control ${props.className} ${error?'control-error': ''}`}
        />
        {
          error && (
            <div className="form-item-msg">
              {message}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default InputText;