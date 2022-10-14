// import { Component } from "react";
// import SideNavBar from "../SideNavBar";
// import { MdOutlineModeEditOutline, MdOutlineDoubleArrow } from "react-icons/md";
// import Popup from "reactjs-popup";
// import { AiOutlineClose } from "react-icons/ai";
// import { v4 as uuidv4 } from "uuid";

// import "../../App.css";
import "./index.css";
// class UserRoute extends Component {
//   state = {
//     userDetails: [],
//     userName: "",
//     userMail: "",
//     department: "AAAAAAA",
//     security: "1111111",
//     validate: false,
//   };

//   onChangeName = (e) => {
//     this.setState({ userName: e.target.value });
//   };

//   onChangeMail = (e) => {
//     this.setState({ userMail: e.target.value });
//   };

//   onChnageDepartment = (e) => {
//     this.setState({ department: e.target.value });
//     console.log(e.target.value);
//   };

//   onChangeSecurity = (e) => {
//     this.setState({ security: e.target.value });
//   };

//   createNewUser = (event) => {
//     event.preventDefault();

//     const { userName, userMail, department, security } = this.state;

//     const newUserObj = {
//       id: uuidv4(),
//       userName,
//       userMail,
//       department,
//       security,
//     };

//     this.setState((prevState) => ({
//       userDetails: [...prevState.userDetails, newUserObj],
//     }));
//   };
//   // POPUP IN USER PAGE
//   popUpModel = () => {
//     const { userName, userMail } = this.state;

//     return (
//       <Popup
//         modal
//         trigger={
//           <button type="button" className="add-button">
//             Add New User
//           </button>
//         }
//       >
//         {(close) => (
//           <form className="pop-up-bg" onSubmit={this.createNewUser}>
//             <div className="pop-header">
//               <h1>Add New User</h1>
//               <MdOutlineModeEditOutline />
//               <AiOutlineClose />
//             </div>
//             <div className="pop-label-input-field">
//               <label className="pop-label">Full Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter user Name"
//                 onChange={this.onChangeName}
//                 value={userName}
//                 required
//                 className="pop-up-inputs"
//               />
//             </div>
//             <div className="pop-label-input-field">
//               <label className="pop-label">Email</label>
//               <input
//                 type="text"
//                 placeholder="Enter Mail"
//                 onChange={this.onChangeMail}
//                 value={userMail}
//                 required
//                 className="pop-up-inputs"
//               />
//             </div>
//             <div className="depart-sec-bg">
//               <div className="label-option-container">
//                 <label className="pop-label">Department</label>
//                 <select
//                   onChange={this.onChnageDepartment}
//                   className="pop-up-drop-down"
//                 >
//                   <option>AAAAAA</option>
//                   <option>BBBBBB</option>
//                   <option>CCCCCC</option>
//                 </select>
//               </div>
//               <div className="label-option-container">
//                 <label className="pop-label">Security</label>
//                 <select
//                   onChange={this.onChangeSecurity}
//                   className="pop-up-drop-down"
//                 >
//                   <option defaultValue="1111111">1111111</option>
//                   <option>2222222</option>
//                   <option>3333333</option>
//                 </select>
//               </div>
//             </div>

//             <button
//               type="button"
//               className="pop-up-button"
//               onClick={() => close()}
//             >
//               Close
//             </button>

//             <button type="submit" className="pop-up-button pop-create">
//               Create
//             </button>
//           </form>
//         )}
//       </Popup>
//     );
//   };

//   // // USER TABLE CONTENT
//   // renderUserDetailsTable = () => (
//   //   <ButtonToggle.Consumer>
//   //     {(value) => {
//   //       const { navBarClick } = value;
//   //       const { userDetails } = this.state;
//   //       const tableWidth = navBarClick ? "table-width" : "table-width-sm";
//   //       return (
//   //         <table className={`${tableWidth}`}>
//   //           <thead>
//   //             <tr>
//   //               <th>
//   //                 <input type="checkbox" />
//   //               </th>
//   //               <th>NAME</th>
//   //               <th>MAIL</th>
//   //               <th>DEPARTMENT</th>
//   //               <th>SECURITY</th>
//   //               <th></th>
//   //             </tr>
//   //           </thead>
//   //           <tbody>
//   //             <tr className="user-table-row">
//   //               <td>
//   //                 <input type="checkbox" />
//   //               </td>
//   //               <td>Dhanunjay</td>
//   //               <td>1234656@gmail.com</td>
//   //               <td>Developer</td>
//   //               <td>Narmal</td>
//   //               <td>Edit</td>
//   //             </tr>
//   //             <tr className="user-table-row">
//   //               <td>
//   //                 <input type="checkbox" />
//   //               </td>
//   //               <td>Dhanunjay</td>
//   //               <td>1234656@gmail.com</td>
//   //               <td>Developer</td>
//   //               <td>Narmal</td>
//   //               <td>Edit</td>
//   //             </tr>
//   //             <tr className="user-table-row">
//   //               <td>
//   //                 <input type="checkbox" />
//   //               </td>
//   //               <td>Dhanunjay</td>
//   //               <td>1234656@gmail.com</td>
//   //               <td>Developer</td>
//   //               <td>Narmal</td>
//   //               <td>Edit</td>
//   //             </tr>
//   //             <tr className="user-table-row">
//   //               <td>
//   //                 <input type="checkbox" />
//   //               </td>
//   //               <td>Dhanunjay</td>
//   //               <td>1234656@gmail.com</td>
//   //               <td>Developer</td>
//   //               <td>Narmal</td>
//   //               <td>Edit</td>
//   //             </tr>
//   //             {userDetails.map((each) => (
//   //               <tr className="user-table-row" key={each.id}>
//   //                 <td>
//   //                   <input type="checkbox" />
//   //                 </td>
//   //                 <td>{each.userName}</td>
//   //                 <td>{each.userMail}</td>
//   //                 <td>{each.department}</td>
//   //                 <td>{each.security}</td>
//   //                 <td>Edit</td>
//   //               </tr>
//   //             ))}
//   //           </tbody>
//   //         </table>
//   //       );
//   //     }}
//   //   </ButtonToggle.Consumer>
//   // );
//   renderUserDetailsTable = ()=>{

//   }

//   render() {
//     return (
//       <div className="user-page-bg">
//         <SideNavBar />
//         <div className="user-content-page">
//           <div>
//             <div className="user-page-header">
//               <h1 style={{ color: "DodgerBlue" }}>Admin</h1>
//               <MdOutlineDoubleArrow className="header-icon" />
//               <h1>Users</h1>
//             </div>

//             <div className="user-header-btn-con">
//               <div className="user-header">
//                 <h1>Users</h1>
//                 <MdOutlineModeEditOutline className="header-icon" />
//               </div>
//               {this.popUpModel()}
//             </div>
//             {this.renderUserDetailsTable()}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default UserRoute;

import React, { useState } from "react";
import SideNavBar from "../SideNavBar";

import ReactDataGrid from "@inovua/reactdatagrid-enterprise";
import "@inovua/reactdatagrid-enterprise/index.css";

const defaultSelected = { 1: true, 3: true };

const columns = [
  {
    name: "img_url",
    defaultFlex: 1,
    header: "Image",

    render: ({ value, data }) => {
      return (
        <div style={{}}>
          <img
            style={{ borderRadius: "50%", height: "30px", marginRight: "10px" }}
            src={value}
            alt=""
          />
          <span style={{ marginTop: "-100px" }}>
            {data.firstName + " " + data.lastName}
          </span>
        </div>
      );
    },
  },
  { name: "lastName", defaultFlex: 1, header: "Last Name" },
  {
    id: "fullName",
    header: "Full Name",
    minWidth: 50,
    defaultFlex: 1,
    render: ({ data }) => data.firstName + " " + data.lastName,
  },
  {
    name: "age",
    header: "Age",
    defaultWidth: 80,
    render: ({ value }) => <span>{value}</span>,
  },
];

const dataSource = [
  {
    firstName: "John",
    lastName: "Grayner",
    age: 35,
    id: 0,
    img_url: "https://randomuser.me/api/portraits/thumb/men/90.jpg",
  },
  {
    firstName: "Mary",
    lastName: "Stones",
    age: 25,
    id: 1,
    img_url: "https://randomuser.me/api/portraits/thumb/men/19.jpg",
  },
  {
    firstName: "Robert",
    lastName: "Fil",
    age: 27,
    id: 2,
    img_url: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
  },
  {
    firstName: "Bob",
    lastName: "Fisher",
    age: 72,
    id: 3,
    img_url: "https://randomuser.me/api/portraits/thumb/women/30.jpg",
  },
  {
    firstName: "Michael",
    lastName: "Rogers",
    age: 45,
    id: 4,
    img_url: "https://randomuser.me/api/portraits/thumb/men/45.jpg",
  },
  {
    firstName: "Hilly",
    lastName: "Bobson",
    age: 5,
    id: 5,
    img_url: "https://randomuser.me/api/portraits/thumb/women/18.jpg",
  },
  {
    firstName: "Mike",
    lastName: "Brind",
    age: 15,
    id: 6,
    img_url: "https://randomuser.me/api/portraits/thumb/men/40.jpg",
  },
  {
    firstName: "Carl",
    lastName: "Phancer",
    age: 56,
    id: 7,
    img_url: "https://randomuser.me/api/portraits/thumb/men/96.jpg",
  },
  {
    firstName: "Victory",
    lastName: "Hope",
    age: 52,
    id: 8,
    img_url: "https://randomuser.me/api/portraits/thumb/men/44.jpg",
  },
  {
    firstName: "Bharath ",
    lastName: "Boyapati",
    age: 23,
    id: 9,
    img_url: "https://randomuser.me/api/portraits/thumb/women/55.jpg",
  },
  {
    firstName: "Dhanunjay ",
    lastName: "Teledu",
    age: 22,
    id: 10,
    img_url: "https://randomuser.me/api/portraits/thumb/men/31.jpg",
  },
  {
    firstName: "Kathleen",
    lastName: "Hill",
    age: 35,
    id: 11,
    img_url: "https://randomuser.me/api/portraits/thumb/women/79.jpg",
  },
  {
    firstName: "Kathleen",
    lastName: "Hellli",
    age: 35,
    id: 12,
    img_url: "https://randomuser.me/api/portraits/thumb/men/89.jpg",
  },
];

const gridStyle = { minHeight: 550 };

const filterValue = [
  { name: "firstName", operator: "startsWith", type: "string", value: "" },
  { name: "lastName", operator: "gte", type: "number", value: "" },
  { name: "age", operator: "startsWith", type: "string", value: "" },
];

const UserRoute = () => {
  const [checkboxOnlyRowSelect, setCheckboxOnlyRowSelect] = useState(true);
  const [checkboxColumn, setCheckboxColumn] = useState(true);
  const [enableColumnFilterContextMenu, setEnableColumnFilterContextMenu] =
    useState(true);

  return (
    <div className="user-page-bg">
      <SideNavBar />
      <ReactDataGrid
        idProperty="id"
        columns={columns}
        style={gridStyle}
        dataSource={dataSource}
        key={"grid-" + checkboxOnlyRowSelect}
        checkboxColumn={checkboxColumn}
        checkboxOnlyRowSelect={checkboxOnlyRowSelect}
        defaultSelected={defaultSelected}
        defaultFilterValue={filterValue}
        pagination
        enableColumnFilterContextMenu={enableColumnFilterContextMenu}
      />
    </div>
  );
};

export default UserRoute;
