import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './grid.css';
import { ROWDATA } from '../Data/data';
import Form from '../Form/form';

export default function Grid() {
  const [users, setUsers] = useState(ROWDATA);

  const gridOptions = {
    defaultColDef: {
      sortable: true,
      editable: true,
      filter: true,
    },
    columnDefs: [
      {
        field: 'name',
      },
      {
        field: 'username',
      },
      {
        field: 'email',
      },
      {
        field: 'phone',
      },
      {
        field: 'website',
      },
    ],
  };

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  const [showForm, setShowForm] = useState(false);
  const onClickForm = () => setShowForm(!showForm);
  return (
    <>
      <p className="header">Using AG Grid with React Hook Form</p>
      <div>
        <button className="button" onClick={onClickForm}>
          Form
        </button>
        {showForm ? <Form addUser={addUser} /> : null}
      </div>
      <br />
      <div
        className="grid ag-theme-alpine-dark"
        style={{ height: 300, width: 970 }}
      >
        <AgGridReact rowData={users} gridOptions={gridOptions} />
      </div>
      <br />
    </>
  );
}
