import { Component } from "react";
import SideNavBar from "../SideNavBar";
import { MdOutlineDoubleArrow, MdOutlineModeEditOutline } from "react-icons/md";
import { Dropdown } from "rsuite";
import "./index.css";
class WorkflowTemplate extends Component {
  // TEMPLATE TABLE
  templateTable = () => (
   <p>Welcome</p>
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
