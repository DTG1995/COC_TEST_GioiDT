import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import FormValidation from '../../shared/layout/forms/form-validation';
import InputSelect from '../../shared/layout/forms/input-select';
import InputText from '../../shared/layout/forms/input-text';
import { Modal } from '../../shared/layout/modal';

import { getCategory } from './reducers';

function CategoryAddEdit(props) {
  useEffect(() => {
    props.getCategory(props.id);
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
        props.id === -1 ? 'Add New Category' : 'Edit Category'
      }
      show={props.show}
      onSubmit={props.onSubmit}
      onClose={props.onClose}
      submitText = {
        props.id === -1 ? 'Add' : 'Edit'
      }
      className="form-add-edit-category"
      submitProps = {{
        form: "form-add-edit-category"
      }}
      >
      <FormValidation init={props.category} onSubmit={onSubmit} id="form-add-edit-category">
        <InputText label="key" name="key" className="primary" />
        <InputText label="Display name" name="displayName" />
        <InputSelect label="Status" name="show">
          <option value={"enable"}>Enable</option>
          <option value={"disable"}>Disable</option>
        </InputSelect>
        <InputText
          label="Order"
          name="order"
          type="number"
          validations={{
            required: 'Order field is required',
          }}
        />
      </FormValidation>
    </Modal>
  );
}

const mapDispatchToProps = {
  getCategory,
};

const mapStateToProps = (state) => {
  return {
    category: state.categories.category,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryAddEdit);
