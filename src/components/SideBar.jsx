/** @format */

import React from "react";
import LoggedInUser from "./LoggedInUser";
import MenuHeading from "./MenuHeading";
import ResourcesSubMenu from "./ResourcesSubMenu";
import SubMenu from "./SubMenu";

const SideBar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100">
      <LoggedInUser image="G" title="Gopal Sharma" />
      <hr className="mb-10 border border-gray-400" />
      <MenuHeading title="Projects" />
      <SubMenu image="P" classType="active" title="My Projects" />
      <MenuHeading title="Campaigns" />
      <SubMenu image="C" title="My Campaigns" />
      <SubMenu image="R" title="Campaigns Reports" />
      <MenuHeading title="Resources" />
      <ResourcesSubMenu title="Product Demo Video" />
      <ResourcesSubMenu title="Knowledge Based" />
      <ResourcesSubMenu title="Support" />
    </div>
  );
};

export default SideBar;
