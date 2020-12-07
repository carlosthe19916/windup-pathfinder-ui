import React from "react";
import {
  EmptyState,
  EmptyStateIcon,
  Title,
  EmptyStateBody,
  EmptyStateVariant,
  Bullseye,
} from "@patternfly/react-core";
import { BatteryEmptyIcon } from "@patternfly/react-icons";

export const EmptyContent: React.FC = () => {
  return (
    <Bullseye>
      <EmptyState variant={EmptyStateVariant.small}>
        <EmptyStateIcon icon={BatteryEmptyIcon} />
        <Title headingLevel="h4" size="lg">
          No data to show
        </Title>
        <EmptyStateBody>
          There is nothing to show. Make sure you selected a Graph database to
          read from.
        </EmptyStateBody>
      </EmptyState>
    </Bullseye>
  );
};
