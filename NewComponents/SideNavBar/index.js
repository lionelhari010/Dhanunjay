import { Component } from "react";

import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

import { BiListCheck } from "react-icons/bi";
import { MdFileCopy, MdOutlineAdminPanelSettings } from "react-icons/md";
import { HiChartPie } from "react-icons/hi";
import { GiHealthNormal } from "react-icons/gi";
// import { GrGallery } from "react-icons/gr";
import { BsCardImage } from "react-icons/bs";
// import { IoSettingsSharp } from "react-icons/io5";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import ButtonToggle from "../../Context/ButtonToggle";

import "./index.css";

class SideNavBar extends Component {
  initialNavBar = () => (
    <ButtonToggle.Consumer>
      {(value) => {
        const { navBarClick, onClickNavBar } = value;
        const clickNavBar = () => {
          onClickNavBar(navBarClick);
          console.log(navBarClick);
        };
        return (
          <div className="side-nav-bar ">
            <div className="nav-header">
              <img
                src="https://res.cloudinary.com/ddsej2ff9/image/upload/v1665393077/MicrosoftTeams-image_tejvle.png"
                className="art-image"
                alt="logo"
              />

              <FaBars onClick={clickNavBar} className="bar-logo" />
            </div>
            <div>
              <div className="nav-item">
                <AiOutlineHome className="nav-icons" />
                <p className="nav-name">Inbox</p>
              </div>

              <div className="nav-item">
                <BsCardImage className="nav-icons" />
                <p className="nav-name">Assets</p>
              </div>

              <div className="nav-item">
                <MdFileCopy className="nav-icons" />
                <p className="nav-name">Pack Copy</p>
              </div>
              <div className="nav-item">
                <BiListCheck className="nav-icons" />
                <p className="nav-name">Specifications</p>
              </div>

              <div className="nav-item">
                <HiChartPie className="nav-icons" />
                <p className="nav-name">Reporting</p>
              </div>
              <div className="nav-item">
                <GiHealthNormal className="nav-icons" />
                <p className="nav-name">New Request</p>
              </div>
              <hr className="hr-line" />
              <Link to="/admin" className="nav-link">
                <div className="nav-item">
                  <MdOutlineAdminPanelSettings className="nav-icons" />
                  <p className="nav-name">Admin</p>
                </div>
              </Link>
            </div>
          </div>
        );
      }}
    </ButtonToggle.Consumer>
  );

  minimiseNavBar = () => (
    <ButtonToggle.Consumer>
      {(value) => {
        const { navBarClick, onClickNavBar } = value;
        const clickNavBar = () => {
          onClickNavBar(navBarClick);
          console.log(navBarClick);
        };

        return (
          <div className="minimise-side-nav-bar ">
            <div className="nav-header">
              <img
                src="https://res.cloudinary.com/ddsej2ff9/image/upload/v1665395008/logo2_x90dle.png"
                alt="minimise-logo"
                className="art-image"
              />
              <FaBars onClick={clickNavBar} className="bar-logo" />
            </div>
            <div>
              <div className="nav-item">
                <AiOutlineHome className="nav-icons" />
              </div>
              <div className="nav-item">
                <BsCardImage className="nav-icons" />
              </div>

              <div className="nav-item">
                <MdFileCopy className="nav-icons" />
              </div>

              <div className="nav-item">
                <BiListCheck className="nav-icons" />
              </div>

              <div className="nav-item">
                <HiChartPie className="nav-icons" />
              </div>

              <div className="nav-item">
                <GiHealthNormal className="nav-icons" />
              </div>
              <Link to="/admin">
                <div className="nav-item">
                  <MdOutlineAdminPanelSettings className="nav-icons" />
                </div>
              </Link>
            </div>
          </div>
        );
      }}
    </ButtonToggle.Consumer>
  );

  render() {
    return (
      <ButtonToggle.Consumer>
        {(value) => {
          const { navBarClick } = value;
          return navBarClick ? this.minimiseNavBar() : this.initialNavBar();
        }}
      </ButtonToggle.Consumer>
    );
  }
}

export default SideNavBar;
