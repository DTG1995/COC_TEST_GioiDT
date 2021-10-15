import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Icons } from '../../shared/layout/icons';
import { TableData } from '../../shared/layout/table/Table';
import { getListConfigurations, addConfig, editConfig, deleteConfig } from './reducers';
import './configurations.less';
import ConfigAddEdit from './configurations-add-edit';
import { ModalConfirm } from '../../shared/layout/modal/modal-confirm';

function Configurations(props) {
  const { configurations } = props;
  const [editId, setEditId] = useState(0);
  const [selectedId, setSelectedId] = useState([]);

  useEffect(() => {
    props.getListConfigurations();
  }, []);

  const onAddConfig = () => {
    setEditId(-1);
  };

  const onEditConfig = (id) => {
    setEditId(id);
  };

  const onSave = (values) => {
    if (values.id === undefined) {
      props.addConfig(values);
      setSelectedId([...selectedId, [0]]);
    } else {
      props.editConfig(values);
    }
    props.getListConfigurations();
    setEditId(0);
  };
  const onClose = () => {
    setEditId(0);
  };

  const columns = [
    {
      title: 'Constant name',
      dataIndex: 'constName',
      key: 'constName',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Edit',
      dataIndex: 'id',
      key: 'edit',
      render: (value) => (
        <button title="Edit" type="text" className="btn" onClick={() => onEditConfig(value)}>
          <Icons name="square-edit-outline" />
        </button>
      ),
    }
  ];

  return (
    <>
      <div className="content-header">
        <div className="title">Configurations</div>
        <div className="control">
          <button className="btn btn-default btn-large" onClick={onAddConfig}>
            Add
          </button>
        </div>
      </div>
      <div className="content-body">
        <div className="content-app area-configurations">
          <TableData columns={columns} dataSource={configurations} />
          <ConfigAddEdit id={editId} show={editId != 0} onSave={onSave} onClose={onClose} />
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = {
  getListConfigurations,
  addConfig,
  editConfig,
  deleteConfig,
};

const mapStateToProps = (state) => {
  return {
    configurations: state.configurations.configurations,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Configurations);
