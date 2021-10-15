import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import FormValidation from '../../shared/layout/forms/form-validation';
import InputText from '../../shared/layout/forms/input-text';
import { Modal } from '../../shared/layout/modal';

import { getConfig } from './reducers';

function ConfigAddEdit(props) {
  useEffect(() => {
    props.getConfig(props.id);
  }, [props.id]);
  const onSubmit = (values, errors) => {
    if((errors||[]).length > 0) {
      return;
    } 
    if(props.onSave) {
      props.onSave(values)
    }
  }
  return (
    <Modal
      title={
        props.id === -1 ? 'Add New Config' : 'Edit Config'
      }
      show={props.show}
      onSubmit={props.onSubmit}
      onClose={props.onClose}
      submitText = {
        props.id === -1 ? 'Add' : 'Edit'
      }
      className="form-add-edit-config"
      submitProps = {{
        form: "form-add-edit-config"
      }}
      >
      <FormValidation init={props.config} onSubmit={onSubmit} id="form-add-edit-config">
        <InputText label="Constant name" name="constName" className="primary" />
        <InputText label="Value" name="value" 
          validations={{
            required: 'Value field is required',
          }}/>
      </FormValidation>
    </Modal>
  );
}

const mapDispatchToProps = {
  getConfig
};

const mapStateToProps = (state) => {
  return {
    config: state.configurations.config,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfigAddEdit);
