// import { Component } from "react";
// import SideNavBar from "../SideNavBar";
// import { MdOutlineDoubleArrow, MdOutlineModeEditOutline } from "react-icons/md";
// import { AiOutlineClose } from "react-icons/ai";

// import { AiOutlineCheck } from "react-icons/ai";
// import { BiGridVertical } from "react-icons/bi";
// import Popup from "reactjs-popup";
// import ButtonToggle from "../../Context/ButtonToggle";

// import "./index.css";
// import "../../App.css";

// class FormFieldPage extends Component {
//   editPopUpField = () => (
//     <Popup
//       modal
//       trigger={
//         <button type="button" className="edit-button">
//           Edit
//         </button>
//       }
//     >
//       {(close) => (
//         <div className="pop-up-bg">
//           <div className="field-pop-header">
//             <h2>Text field 1</h2>
//             <MdOutlineModeEditOutline />
//             <AiOutlineClose />
//           </div>
//           <p className="field-type-text">Field Type: Text</p>
//           <div className="pop-check-box-con">
//             <div>
//               <input type="checkbox" id="mandatory" />
//               <label for="mandatory">Mandatory field</label>
//             </div>
//             <div>
//               <input type="checkbox" id="visible" />
//               <label for="visible">Visible field</label>
//             </div>
//           </div>

//           <div className="field-pop-buttons">
//             <button
//               type="button"
//               className="trigger-button"
//               onClick={() => close()}
//             >
//               Cancel
//             </button>

//             <button type="button">Save</button>
//           </div>
//         </div>
//       )}
//     </Popup>
//   );

//   // FIELD TABLE
//   formFieldTable = () => (
//     <ButtonToggle.Consumer>
//       {(value) => {
//         const { navBarClick } = value;
//         const tableWidth = navBarClick ? "table-width" : "table-width-sm";

//         return (
//           <table className={`${tableWidth}`}>
//             <thead>
//               <tr>
//                 <th>FIELD NAME</th>
//                 <th>FIELD TYPE</th>
//                 <th>MANDATARY</th>
//                 <th>VISIBLE</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>
//                   <BiGridVertical />
//                   Request Number
//                 </td>
//                 <td>Numeric</td>
//                 <td>
//                   <AiOutlineCheck />
//                 </td>
//                 <td>
//                   <AiOutlineCheck />
//                 </td>
//                 <td>{this.editPopUpField()}</td>
//               </tr>
//               <tr>
//                 <td>
//                   <BiGridVertical />
//                   Request Number
//                 </td>
//                 <td>Numeric</td>
//                 <td>
//                   <AiOutlineCheck />
//                 </td>
//                 <td>
//                   <AiOutlineCheck />
//                 </td>
//                 <td>{this.editPopUpField()}</td>
//               </tr>
//               <tr>
//                 <td>
//                   <BiGridVertical />
//                   Request Number
//                 </td>
//                 <td>Numeric</td>
//                 <td>
//                   <AiOutlineCheck />
//                 </td>
//                 <td>
//                   <AiOutlineCheck />
//                 </td>
//                 <td>{this.editPopUpField()}</td>
//               </tr>
//             </tbody>
//           </table>
//         );
//       }}
//     </ButtonToggle.Consumer>
//   );

//   render() {
//     return (
//       <div className="form-fields-conatainer">
//         <SideNavBar />
//         <div className="field-content">
//           <div className="field-header">
//             <h1>Admin</h1>
//             <MdOutlineDoubleArrow className="field-logo" />
//             <h1>Form Fields</h1>
//           </div>
//           <div className="field-header">
//             <h1>Form fileds</h1>
//             <MdOutlineModeEditOutline className="field-logo" />
//           </div>
//           {this.formFieldTable()}
//         </div>
//       </div>
//     );
//   }
// }

// export default FormFieldPage;
import SideNavBar from "../SideNavBar";
import "./index.css";

import React from "react";

import ReactDataGrid from "@inovua/reactdatagrid-enterprise";
import "@inovua/reactdatagrid-enterprise/index.css";
import { MdOutlineDoubleArrow, MdOutlineModeEditOutline } from "react-icons/md";

const sourceData = [
  {
    fieldName: "Dhanunjay",
    fieldType: "Numeric",
    mandatory: "",
    visible: "",
    id: 1,
  },
  {
    fieldName: "Dhanunjay",
    fieldType: "Numeric",
    mandatory: "",
    visible: "",
    id: 1,
  },
  {
    fieldName: "Dhanunjay",
    fieldType: "Numeric",
    mandatory: "",
    visible: "",
    id: 1,
  },
];

const gridStyle = { minHeight: 350 };

const columns = [
  { name: "fieldName", header: "FIELD FORMS" },
  { name: "fieldType", header: "FIELD TYPE" },
  { fieldName: "mandatory", header: "MANDATORY?" },
  { fieldName: "visible", header: "VISIBLE?" },
  {
    fieldName: "editMode",
    render: () => <button className="edit-button">Edit</button>,
  },
];

const App = () => {
  return (
    <div className="form-fields-conatainer ">
      <SideNavBar />
      <div>
        <div className="field-header">
          <h1>Admin</h1>
          <MdOutlineDoubleArrow className="field-logo" />
          <h1>Form Fields</h1>
        </div>

        <div className="field-header">
          <h1>Form fileds</h1>
          <MdOutlineModeEditOutline className="field-logo" />
        </div>
        <div className="field-table">
          <ReactDataGrid
            idProperty="id"
            style={gridStyle}
            rowHeight={40}
            maxRowHeight={400}
            rowReorderColumn
            columns={columns}
            dataSource={sourceData}
            pagination
          />
        </div>
      </div>
    </div>
  );
};

export default () => <App />;
