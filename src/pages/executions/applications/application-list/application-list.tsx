import React, { useCallback, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { AxiosError } from "axios";

import { SimplePageSection } from "shared/components";

import { ApplicationRepresentation } from "api/models";
import { getApplications } from "api/rest";

import { ExecutionRoute } from "Paths";
import {
  DataList,
  DataListCell,
  DataListItem,
  DataListItemCells,
  DataListItemRow,
  DataListToggle,
  PageSection,
  Toolbar,
  ToolbarContent,
} from "@patternfly/react-core";
import { JavaIcon } from "@patternfly/react-icons";
import { FilterToolbarItem } from "./components/filter-toolbar-item";

export interface ApplicationListProps
  extends RouteComponentProps<ExecutionRoute> {}

export const ApplicationList: React.FC<ApplicationListProps> = ({ match }) => {
  const [applications, setApplications] = useState<
    ApplicationRepresentation[]
  >();
  const [, setIsFetching] = useState(false);
  const [, setFetchError] = useState<AxiosError>();

  const [filterText, setFilterText] = useState("");

  const loadApplications = useCallback((executionId: string) => {
    setIsFetching(true);

    getApplications(executionId)
      .then(({ data }) => {
        setApplications(data);
        setFetchError(undefined);
      })
      .catch((error) => {
        setFetchError(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  useEffect(() => {
    loadApplications(match.params.execution);
  }, [match, loadApplications]);

  return (
    <>
      <SimplePageSection title="Applications" />
      <PageSection>
        <Toolbar>
          <ToolbarContent>
            <FilterToolbarItem
              searchValue={filterText}
              onFilterChange={setFilterText}
              placeholder="Filter by name"
            />
          </ToolbarContent>
        </Toolbar>
        <DataList aria-label="Application list">
          {applications?.map((app, index) => (
            <DataListItem
              key={index}
              aria-labelledby={`application-${index}`}
              isExpanded={true}
            >
              <DataListItemRow>
                <DataListToggle
                  id={`toggle-${index}`}
                  isExpanded={true}
                  onClick={() => {}}
                  // aria-controls="ex-expand1"
                />
                <DataListItemCells
                  dataListCells={[
                    <DataListCell key="icon" isIcon>
                      <JavaIcon />
                    </DataListCell>,
                    <DataListCell key="primary content">
                      {app.applicationName}
                    </DataListCell>,
                  ]}
                />
              </DataListItemRow>
            </DataListItem>
          ))}
        </DataList>
      </PageSection>
    </>
  );
};
