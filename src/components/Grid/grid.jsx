import React, { useState, useCallback, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import ROWDATA from '../Data/data';
import EditForm from '../Form/form';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './grid.css';

export default function DisplayGrid() {
  const gridRef = useRef();
  const initialState = {
    id: null,
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  };
  const [users, setUsers] = useState(ROWDATA);
  const [currentUser, setCurrentUser] = useState(initialState);

  const [showForm, setShowForm] = useState(false);
  const onClickForm = () => setShowForm(!showForm);

  const updateUser = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const gridOptions = {
    defaultColDef: {
      sortable: true,
      editable: false,
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

  const onRowSelected = (params) => {
    setCurrentUser({
      id: params.data.id,
      name: params.data.name,
      username: params.data.username,
      email: params.data.email,
      phone: params.data.phone,
      website: params.data.website,
    });
  };

  return (
    <>
      <p className="header">Using AG Grid with React Hook Form</p>
      <div>
        <div>
          <button className="button" onClick={onClickForm}>
            Form
          </button>
          {showForm ? (
            <EditForm currentUser={currentUser} updateUser={updateUser} />
          ) : null}
        </div>
        <br />
      </div>
      <div
        className="grid ag-theme-alpine-dark"
        style={{ height: 300, width: 1000 }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={users}
          gridOptions={gridOptions}
          rowSelection={'single'}
          onRowSelected={onRowSelected}
        />
      </div>
      <br />
    </>
  );
}
