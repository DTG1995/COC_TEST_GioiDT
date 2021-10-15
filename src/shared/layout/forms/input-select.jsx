import React, { useContext, useEffect, useState } from 'react';
import { FormContext } from './form-validation';

const InputSelect = props => {
  const { setFieldValue, getFieldValue, init } = useContext(FormContext);
  const [wrapperValue, setWapperValue] = useState('');

  const {onChange, onBlur} = props;
  useEffect(() => {
    const value = getFieldValue(props.name);
    setWapperValue( value === undefined ? "" : value);
  }, [init]);


  const onChangeHandler = e => {
    setWapperValue(e.target.value);
    setFieldValue(e.target.name, e.target.value);
    if (onChange !== undefined) {
      onChange(e);
    }
  };

  const onBlurHandler = e => {
    setFieldValue(e.target.name, e.target.value);
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
        <select
          id={`control-${props.name}`}
          value={wrapperValue}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          {...props}
          className={`form-control ${props.className}`}
        >
          {props.children}
        </select>
      </div>
    </div>
  )
}

export default InputSelect;