import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Icons } from '../../shared/layout/icons';
import { TableData } from '../../shared/layout/table/Table';
import { getListCategories, addCategory, editCategory, deleteCategory } from './reducers';
import './categories.less';
import CategoriesAddEdit from './categories-add-edit';
import { ModalConfirm } from '../../shared/layout/modal/modal-confirm';

function Categories(props) {
  const { categories } = props;
  const [editId, setEditId] = useState(0);
  const [deleteId, setDeleteId] = useState(0);
  const [selectedId, setSelectedId] = useState([]);

  useEffect(() => {
    props.getListCategories();
  }, []);

  useEffect(() => {
    setSelectedId(props.categories.map((_) => 0));
  }, [props.categories]);

  const onAddCategory = () => {
    setEditId(-1);
  };

  const onEditCategory = (id) => {
    setEditId(id);
  };

  const onSave = (values) => {
    if (values.id === undefined) {
      props.addCategory(values);
      setSelectedId([...selectedId, [0]]);
    } else {
      props.editCategory(values);
    }
    props.getListCategories();
    setEditId(0);
  };
  const onClose = () => {
    setEditId(0);
  };
  const onDeleteCategory = (id) => {
    setDeleteId(id);
  };
  const onConfirmDelete = () => {
    if (deleteId === -1) {
      selectedId.forEach((id) => {
        props.deleteCategory(id);
      });
    } else {
      props.deleteCategory(deleteId);
    }
    props.getListCategories();
    setDeleteId(0);
  };

  const onSelectCategory = (index, id) => {
    const items = [...selectedId];
    items[index] = id;
    setSelectedId(items);
  };

  const columns = [
    {
      title: 'Key',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Display name',
      dataIndex: 'displayName',
      key: 'displayName',
    },
    {
      title: 'Show/Hide',
      dataIndex: 'show',
      key: 'show',
      render: (value) =>
        value === 'enable' ? (
          <span className="icon-status show">
            <Icons name="check-bold" />
          </span>
        ) : (
          <span className="icon-status hide">
            <Icons name="close-thick" />
          </span>
        ),
    },
    {
      title: 'Order',
      dataIndex: 'order',
      key: 'order',
    },
    {
      title: 'Edit',
      dataIndex: 'id',
      key: 'edit',
      render: (value) => (
        <button title="Edit" type="text" className="btn" onClick={() => onEditCategory(value)}>
          <Icons name="square-edit-outline" />
        </button>
      ),
    },
    {
      title: 'Delete',
      dataIndex: 'id',
      key: 'delete',
      render: (value) => (
        <button title="Delete" type="text" className="btn" onClick={() => onDeleteCategory(value)}>
          <Icons name="trash-can-outline" />
        </button>
      ),
    },
    {
      title: 'Bulk Delete',
      dataIndex: 'id',
      key: 'bulkDelete',
      render: (id, index) => (
        <label className="input-checkbox">
          <input
            type="checkbox"
            checked={selectedId[index] !== 0}
            onChange={(e) => onSelectCategory(index, e.target.checked ? id : 0)}
          />
          <div className="checkmark" />
        </label>
      ),
    },
  ];

  return (
    <>
      <div className="content-header">
        <div className="title">Categories</div>
        <div className="control">
          <button className="btn btn-default btn-large" onClick={onAddCategory}>
            Add
          </button>
          <button className="btn btn-primary btn-large" onClick={() => onDeleteCategory(-1)}>
            Delete All
          </button>
        </div>
      </div>
      <div className="content-body">
        <div className="content-app area-categories">
          <TableData columns={columns} dataSource={categories} />
          <CategoriesAddEdit id={editId} show={editId != 0} onSave={onSave} onClose={onClose} />
        </div>
      </div>
      <ModalConfirm
        show={deleteId}
        onCancel={() => setDeleteId(0)}
        onConfirm={onConfirmDelete}
        title={deleteId === -1 ? 'Confirm delete selected' : 'Confirm delete'}
      >
        {deleteId === -1 ? 'Are you sure delete categories selected?' : 'Are you sure delete this category?'}
      </ModalConfirm>
    </>
  );
}

const mapDispatchToProps = {
  getListCategories,
  addCategory,
  editCategory,
  deleteCategory,
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
