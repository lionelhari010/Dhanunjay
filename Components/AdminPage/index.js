import { AiOutlineBell } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import SideNavBar from "../SideNavBar";

import "./index.css";
const AdminPage = () => (
  <div className="admin-page">
    <SideNavBar />

    <div className="admin-page-bg">
      <div className="page-nav">
        <h1 className="admin-side-headings">Admin</h1>

        <div>
          <AiOutlineBell />
          <BiHelpCircle />
        </div>
      </div>
      <div className="admin-page-constent-bg ">
        <div>
          <h1 className="admin-side-headings">Teams</h1>

          <div className="team-cards-container">
            <Link to="/admin-users" className="admin-card-link">
              <div className="admin-page-card">
                <h2 className="admin-card-heading">Users</h2>
                <p className="admin-card-text">Add And Manage User</p>
              </div>
            </Link>

            <div className="admin-page-card">
              <h2 className="admin-card-heading">Roles</h2>
              <p className="admin-card-text">Add And Manage Roles</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="admin-side-headings">Workflow</h1>

          <div className="team-cards-container">
            <Link to="/admin-formfield" className="admin-card-link">
              <div className="admin-page-card">
                <h2 className="admin-card-heading">Form Fields</h2>
                <p className="admin-card-text">
                  Custemize your data capture fields used in workflow request
                </p>
              </div>
            </Link>

            <Link to="/admin-wf-template" className="admin-card-link">
              <div className="admin-page-card">
                <h2 className="admin-card-heading">Workflow Templates</h2>
                <p className="admin-card-text">
                  Build your own workflow Templates
                </p>
              </div>
            </Link>
            <Link to="/admin-wf-views" className="admin-card-link">
              <div className="admin-page-card">
                <h2 className="admin-card-heading">Views</h2>
                <p className="admin-card-text">
                  Custemized what fields to be used for tracking the workflow
                  status
                </p>
              </div>
            </Link>

            <div className="admin-page-card">
              <h2 className="admin-card-heading">Security</h2>
              <p className="admin-card-text">
                Specify who should see what data
              </p>
            </div>

            <div className="admin-page-card">
              <h2 className="admin-card-heading">EmailTempletes</h2>
              <p className="admin-card-text">
                Custemize when, what and who will recive mail alerts
              </p>
            </div>

            <div className="admin-page-card">
              <h2 className="admin-card-heading">Checklists</h2>
              <p className="admin-card-text">
                Custemize the checklists used by reviewers{" "}
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="admin-side-headings">Master Lists</h1>

          <div className="team-cards-container">
            <div className="admin-page-card">
              <h2 className="admin-card-heading">File Types</h2>
              <p className="admin-card-text">Manage the List of Types</p>
            </div>

            <div className="admin-page-card">
              <h2 className="admin-card-heading">Departments</h2>
              <p className="admin-card-text">
                Manage the list of dpartment users
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="admin-side-headings">Accounts</h1>

          <div className="team-cards-container">
            <div className="admin-page-card">
              <h2 className="admin-card-heading">General Settings</h2>
              <p className="admin-card-text">
                Manage Default settings for all users-timezone ,etc.
              </p>
            </div>

            <div className="admin-page-card">
              <h2 className="admin-card-heading">Account Details</h2>
              <p className="admin-card-text">
                View Account Status and storage information
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AdminPage;
