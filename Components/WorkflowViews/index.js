// import { Component } from "react";
import SideNavBar from "../SideNavBar";
import { MdOutlineDoubleArrow, MdOutlineModeEditOutline } from "react-icons/md";
import ButtonToggle from "../../Context/ButtonToggle";
import "./index.css";
import "../../App.css";
const WorkflowViews = () => (
  <ButtonToggle.Consumer>
    {(value) => {
      const { navBarClick } = value;
      const tableWidth = navBarClick ? "table-width" : "table-width-sm";

      return (
        <div className="views-bg">
          <SideNavBar />

          <div className={`views-content-bg ${tableWidth}`}>
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

              <table className={`${tableWidth}`}>
                <thead>
                  <tr>
                    <th>VIEW NAME</th>
                    <th>VIEW DESCRIPTION</th>
                    <th>LAST EDITED BY</th>
                    <th>LAST EDITED ON</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>In Progress</td>
                    <td>All Request In Progress</td>
                    <td>Peter Townsend</td>
                    <td>8-June-22</td>

                    <td>
                      <button className="views-edit-btn">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>In Progress</td>
                    <td>All Request In Progress</td>
                    <td>Peter Townsend</td>
                    <td>8-June-22</td>

                    <td>
                      <button className="views-edit-btn">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>In Progress</td>
                    <td>All Request In Progress</td>
                    <td>Peter Townsend</td>
                    <td>8-June-22</td>

                    <td>
                      <button className="views-edit-btn">Edit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }}
  </ButtonToggle.Consumer>
);

export default WorkflowViews;
