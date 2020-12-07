import React from "react";
import {
  EmptyState,
  Title,
  EmptyStateBody,
  EmptyStateVariant,
  EmptyStateIcon,
  Bullseye,
} from "@patternfly/react-core";
import { UserNinjaIcon } from "@patternfly/react-icons";

export const InvalidExecution: React.FC = () => {
  return (
    <Bullseye>
      <EmptyState variant={EmptyStateVariant.large}>
        <EmptyStateIcon icon={UserNinjaIcon} />
        <Title headingLevel="h4" size="lg">
          The execution you are trying to load is not valid
        </Title>
        <EmptyStateBody>
          The execution folder must have a{" "}
          <strong>TitanConfiguration.properties</strong> file and{" "}
          <strong>graphsearch</strong> and <strong>titangraph</strong> folders.
        </EmptyStateBody>
      </EmptyState>
    </Bullseye>
  );
};
