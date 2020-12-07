import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { executionContextSelectors } from "store/executionContext";
import { RootState } from "store/rootReducer";

import { Nav, NavItem, PageSidebar, NavGroup } from "@patternfly/react-core";

import { formatPath, Paths } from "Paths";
import { LayoutTheme } from "../LayoutUtils";

export const SidebarApp: React.FC = () => {
  const selectedExecution = useSelector((state: RootState) =>
    executionContextSelectors.selectedExecution(state)
  );

  const renderPageNav = () => {
    return (
      <Nav id="nav-primary" aria-label="Nav" theme={LayoutTheme}>
        <NavGroup
          title={`Global${
            process.env.NODE_ENV === "development"
              ? "-" + selectedExecution
              : ""
          }`}
        >
          <NavItem>
            <NavLink
              to={formatPath(Paths.applications, {
                execution: selectedExecution,
              })}
              activeClassName="pf-m-current"
            >
              Applications
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to={formatPath(Paths.technologies, {
                execution: selectedExecution,
              })}
              activeClassName="pf-m-current"
            >
              Technologies
            </NavLink>
          </NavItem>
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
