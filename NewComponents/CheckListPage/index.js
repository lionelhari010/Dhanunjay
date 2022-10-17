import { MdOutlineDoubleArrow, MdOutlineModeEditOutline } from "react-icons/md";
import SideNavBar from "../SideNavBar";
import ReactDataGrid from "@inovua/reactdatagrid-enterprise";
import "@inovua/reactdatagrid-enterprise/index.css";
import "./index.css";
const gridStyle = { minHeight: 350 };
const checklistData = [
  {
    id: 1,
    checklistItem: "Verify Product Name",
    LastEditedBy: "Peter Toe",
    LastEditedOn: "8-July-2022",
    department: "Marketing",
  },
  {
    id: 2,
    checklistItem: "Verify Product Name",
    LastEditedBy: "Peter Toe",
    LastEditedOn: "8-July-2022",
    department: "Marketing",
  },
  {
    id: 3,
    checklistItem: "Verify Product Name",
    LastEditedBy: "Peter Toe",
    LastEditedOn: "8-July-2022",
    department: "Marketing",
  },
];
const columns = [
  { name: "checklistItem", defaultFlex: 1, header: " CHECKLIST ITEM" },

  { name: "LastEditedBy", defaultFlex: 1, header: "LAST EDITED BY" },
  { name: "LastEditedOn", defaultFlex: 1, header: "LAST EDITED ON" },
  {
    name: "department",
    defaultFlex: 1,
    header: "DEPARTMENT",
  },
  {
    fieldName: "editMode",
    render: () => <button className="edit-button">Edit</button>,
  },
];
const renderChecklistTable = () => (
  <ReactDataGrid
    idProperty="id"
    style={gridStyle}
    rowHeight={40}
    maxRowHeight={400}
    columns={columns}
    dataSource={checklistData}
    pagination
  />
);

const ChecklistsPage = () => (
  <div className="checklist-page">
    <SideNavBar />
    <div className="checkList-content-page">
      <div className="checklist-header">
        <p>Admin</p>
        <MdOutlineDoubleArrow />
        <p>WorkFlow</p>
      </div>

      <div className="checklist-btn-header">
        <div className="checklist-header">
          <p>Checklists</p>
          <MdOutlineModeEditOutline />
        </div>
        <button>Add CheckList</button>
      </div>

      {renderChecklistTable()}
    </div>
  </div>
);
export default ChecklistsPage;
