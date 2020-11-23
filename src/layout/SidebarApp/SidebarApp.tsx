import React from "react";
import { Nav, NavItem, PageSidebar, NavGroup } from "@patternfly/react-core";
import { LayoutTheme } from "../LayoutUtils";

export const SidebarApp: React.FC = () => {
  const renderPageNav = () => {
    return (
      <Nav id="nav-primary-simple" aria-label="Nav" theme={LayoutTheme}>
        <NavGroup title="Global">
          <NavItem>Applications</NavItem>
          <NavItem>Technologies</NavItem>
        </NavGroup>
        <NavGroup title="Application">
          <NavItem>Dashboard</NavItem>
          <NavItem>Details</NavItem>
          <NavItem>Issues</NavItem>
          <NavItem>Technologies</NavItem>
          <NavItem>Dependencies</NavItem>
          <NavItem>Ignored files</NavItem>
        </NavGroup>
      </Nav>
    );
  };

  return <PageSidebar nav={renderPageNav()} theme={LayoutTheme} />;
};
