// import { Component } from "react";
import SideNavBar from "../SideNavBar";
import { MdOutlineDoubleArrow, MdOutlineModeEditOutline } from "react-icons/md";
import ReactDataGrid from "@inovua/reactdatagrid-enterprise";
import "@inovua/reactdatagrid-enterprise/index.css";
import "./index.css";
const gridStyle = { minHeight: 350 };
const dataSource = [
  {
    id: 1,
    viewName: "Inbox",
    ViewDeScipriton: "All Request In Progress",
    LastEditedBy: "Peter Toe",
    LastEditedOn: "8-July-2022",
  },
  {
    id: 2,
    viewName: "Inbox",
    ViewDeScipriton: "All Request In Progress",
    LastEditedBy: "Peter Toe",
    LastEditedOn: "8-July-2022",
  },
  {
    id: 3,
    viewName: "Inbox",
    ViewDeScipriton: "All Request In Progress",
    LastEditedBy: "Peter Toe",
    LastEditedOn: "8-July-2022",
  },
];
const columns = [
  { name: "viewName", defaultFlex: 1, header: "VIEW NAME" },
  { name: "ViewDeScipriton", defaultFlex: 1, header: "VIEW DESRIPTION" },
  { name: "LastEditedBy", defaultFlex: 1, header: "LAST EDITED BY" },
  { name: "LastEditedOn", defaultFlex: 1, header: "LAST EDITED ON" },
  {
    fieldName: "editMode",
    render: () => <button className="edit-button">Edit</button>,
  },
];

const renderViewTable = () => (
  <div className="views-table">
    <ReactDataGrid
      idProperty="id"
      style={gridStyle}
      rowHeight={40}
      maxRowHeight={400}
      columns={columns}
      dataSource={dataSource}
      pagination
    />
  </div>
);

const WorkflowViews = () => (
  <div className="views-bg">
    <SideNavBar />

    <div>
      <div className="views-header">
        <h1 className="head-text">Admin</h1>
        <MdOutlineDoubleArrow className="field-logo" />
        <h1>Views</h1>
      </div>

      <div className="views-page-content">
        <div className="views-header-edit">
          <h1>Workflow Views</h1>
          <MdOutlineModeEditOutline className="temp-logo" />
        </div>
        {/* >>>>>>>>>>>>>>> */}
        {renderViewTable()}
      </div>
    </div>
  </div>
);

export default WorkflowViews;
