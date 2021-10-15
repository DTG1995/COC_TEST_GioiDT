import React, { useEffect, useState } from 'react';
import './form.less';

const initState = props => {
  return {
    init: {
      ...props.init
    },
    errors: {}
  };
};

let FormContext = React.createContext({});

const { Provider } = FormContext;

const FormValidation = (props) => {
  const [formState, setFormState] = useState(initState(props));

  const onSubmit = e => {
    e.preventDefault();
    props.onSubmit(formState.init, formState.errors);
  };
  useEffect(() => {
    setFormState({
      ...formState,
      init: props.init
    });
  }, [props.init])
  const setFieldValue = (name, value) => {
    setFormState(state => {
      const temp = {...state,
        init: {
          ...state.init,
          [name]: value
        }
      };
      if(props.handlerData) {
        props.handlerData(temp.init);
      }
      return temp;
    });
  }

  const getFieldValue = (name) => {
    return formState.init[name];
  }

  const setFieldValidation = (id, msg) => {
    if(msg === undefined) {
      setFormState(state  => {
        const {init, errors} = {...state};
        delete errors[id];
        if (props.onError) {
          props.onError(errors);
        }
        
        return {
          init,
          errors
        }
      })
    } else {
      setFormState(state  => {
        const rs = {
          ...state,
          errors: {
            ...state.errors,
            [id]: msg
          }
        };
        return {
          ...state,
          errors: {
            ...state.errors,
            [id]: msg
          }
        }
      });
      
      if (props.onError) {
        props.onError(formState.errors);
      }
    }
  }

  const providerValue = {
    errors: formState.errors,
    init: formState.init,
    setFieldValidation,
    setFieldValue,
    getFieldValue
  };

  return (
    <Provider value={providerValue}>
      <form
        onSubmit={onSubmit}
        className={`validation-form ${props.className}`}
        id={props.id}
        name={props.name}
      >
        {props.children}
      </form>
    </Provider>
  );
}
export default FormValidation;
export { FormContext };