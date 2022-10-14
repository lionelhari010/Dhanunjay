import { Component } from "react";
import SideNavBar from "../SideNavBar";
import { MdOutlineDoubleArrow, MdOutlineModeEditOutline } from "react-icons/md";
// import { Link } from "react-router-dom";
import ButtonToggle from "../../Context/ButtonToggle";
import { Dropdown } from "rsuite";
import "./index.css";
import "../../App.css";
class WorkflowTemplate extends Component {
  // TEMPLATE TABLE
  templateTable = () => (
    <ButtonToggle.Consumer>
      {(value) => {
        const { navBarClick } = value;
        const tableWidth = navBarClick ? "table-width" : "table-width-sm";

        return (
          <div>
            <table className={`${tableWidth}`}>
              <thead>
                <tr>
                  <th>ACTIVE NAME</th>
                  <th>USERS</th>
                  <th>ALL OR ANYONE?</th>
                  <th>DURATION (DAYS)</th>
                  <th>BUTTON-1 NAME</th>
                  <th>BUTTON-1 ACTION</th>
                  <th>BUTTON-1 GOES TO</th>
                  <th>BUTTON-2 NAME</th>
                  <th>BUTTON-2 ACTION</th>
                  <th>BUTTON-2 GOES TO</th>
                  <th>STATUS</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Start</th>
                  <th>User1</th>
                  <th>All</th>
                  <th>2</th>
                  <th>Submit</th>
                  <th>Breif uploaded</th>
                  <th>Print proof uploaded</th>
                  <th>Reject</th>
                  <th>Artwork Rejected</th>
                  <th>Artwork uploaded</th>
                  <th>{"pending with {users} for {activity}"}</th>
                  <th>Edit</th>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }}
    </ButtonToggle.Consumer>
  );

  render() {
    return (
      <div className="templates-bg">
        <SideNavBar />
        <div className="temp-content-bg">
          <div className="templates-header">
            <h1>Admin</h1>
            <MdOutlineDoubleArrow />
            <h1>Workflow Templates</h1>
          </div>
          <div className="table-header-content">
            <div className="templates-header-btn">
              <div className="templates-header-edit">
                <h1>New Template</h1>
                <MdOutlineModeEditOutline className="temp-logo" />
              </div>
              <Dropdown title="Add a task" className="drop-down-list">
                <Dropdown.Item>Normal Task</Dropdown.Item>
                <Dropdown.Item>Approval Task</Dropdown.Item>
              </Dropdown>
            </div>

            {this.templateTable()}
          </div>
        </div>
      </div>
    );
  }
}

export default WorkflowTemplate;
