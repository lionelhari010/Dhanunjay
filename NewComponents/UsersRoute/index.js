import React, { useState } from "react";
import SideNavBar from "../SideNavBar";
import "./index.css";
import ReactDataGrid from "@inovua/reactdatagrid-enterprise";
import "@inovua/reactdatagrid-enterprise/index.css";
import Popup from "reactjs-popup";
import { MdOutlineModeEditOutline, MdOutlineDoubleArrow } from "react-icons/md";
import { BsXLg } from "react-icons/bs";
import "react-dropdown/style.css";
import "../../App.css";
const columns = [
  { name: "Name", defaultFlex: 1, header: " NAME" },
  { name: "Mail", defaultFlex: 1, header: " MAIL" },
  { name: "Department", defaultFlex: 1, header: " DEPARTMENT" },

  {
    name: "Security",
    defaultFlex: 1,
    header: "SECURITY",
  },
];

const dataSource = [
  {
    Name: "John",
    Mail: "Dhanunjay@gmail.com",
    Department: "Marketing",
    id: 0,

    Security: "Normal",
  },
  {
    Name: "Mary",
    Mail: "Dhanunjay@gmail.com",
    Department: "Marketing",
    id: 1,
    Security: "Normal",
  },
  {
    Name: "Mary",
    Mail: "Dhanunjay@gmail.com",
    Department: "Marketing",
    id: 2,
    Security: "Normal",
  },
  {
    Name: "Mary",
    Mail: "Dhanunjay@gmail.com",
    Department: "Marketing",
    id: 3,
    Security: "Normal",
  },
  {
    Name: "Mary",
    Mail: "Dhanunjay@gmail.com",
    Department: "Marketing",
    id: 4,
    Security: "Normal",
  },
];

const gridStyle = { minHeight: 550 };

const filterValue = [
  { name: "Name", operator: "startsWith", type: "string", value: "" },
  { name: "Mail", operator: "startsWith", type: "string", value: "" },
  { name: "Department", operator: "startsWith", type: "string", value: "" },
  { name: "Security", operator: "startsWith", type: "string", value: "" },
];

const UserRoute = () => {
  const [checkboxOnlyRowSelect, setCheckboxOnlyRowSelect] = useState(true);
  const [checkboxColumn, setCheckboxColumn] = useState(true);
  const [enableColumnFilterContextMenu, setEnableColumnFilterContextMenu] =
    useState(true);

  const [currentState, setState] = useState({
    userName: "",
    userMail: "",
    Department: "",
    Security: "",
  });

  const onChangeDepartmentHandler = (event) => {
    setState((previousState) => {
      return { ...previousState, Department: event.value };
    });
  };
  const onChangeSecurityHandler = (event) => {
    setState((previousState) => {
      return { ...previousState, Security: event.value };
    });
  };
  const UserPopUpBtn = () => (
    <div>
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            Add New User
          </button>
        }
      >
        {(close) => (
          <div className="pop-up-bg">
            <div>
              <div className="pop-header">
                <p>Add New User</p>
                <MdOutlineModeEditOutline />
                <BsXLg onClick={() => close()} />
              </div>

              <div className="pop-up-fields">
                <label className="pop-up-label">Full Name</label>
                <input
                  type="text"
                  className="pop-up-input"
                  placeholder="Enter User Name"
                />
              </div>
              <div className="pop-up-fields">
                <label className="pop-up-label">Email</label>
                <input
                  type="text"
                  className="pop-up-input"
                  placeholder="Enter Email"
                />
              </div>
              <div className="drop-down-container">
                <div className="drop-down">
                  <label className="pop-up-label">Department</label>

                  <select
                    onChange={onChangeDepartmentHandler}
                    defaultValue={currentState}
                    className="drop-down-options"
                  >
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div className="drop-down">
                  <label className="pop-up-label">Security</label>

                  <select
                    onChange={onChangeSecurityHandler}
                    defaultValue={currentState}
                    className="drop-down-options"
                  >
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="pop-up-btns">
              <button
                type="button"
                className="pop-up-button"
                onClick={() => close()}
              >
                Close
              </button>
              <button type="button" className="pop-up-button create-btn">
                Create
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );

  return (
    <div className="user-page-bg">
      <SideNavBar />
      <div>
        <div className="templates-header">
          <p>Admin</p>
          <MdOutlineDoubleArrow className="header-logo" />
          <p>Users</p>
        </div>
        <div className="add-user-header">
          <div>
            <p>Users</p>
          </div>
          {UserPopUpBtn()}
        </div>
        <div className="table">
          <ReactDataGrid
            idProperty="id"
            columns={columns}
            style={gridStyle}
            dataSource={dataSource}
            key={"grid-" + checkboxOnlyRowSelect}
            checkboxColumn={checkboxColumn}
            checkboxOnlyRowSelect={checkboxOnlyRowSelect}
            defaultFilterValue={filterValue}
            pagination
            enableColumnFilterContextMenu={enableColumnFilterContextMenu}
          />
        </div>
      </div>
    </div>
  );
};

export default UserRoute;
