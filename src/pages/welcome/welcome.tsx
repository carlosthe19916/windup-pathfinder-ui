import React from "react";
import {
  EmptyState,
  Title,
  EmptyStateBody,
  EmptyStateVariant,
  EmptyStateIcon,
  Bullseye,
} from "@patternfly/react-core";
import { RocketIcon } from "@patternfly/react-icons";

export const Welcome: React.FC = () => {
  return (
    <Bullseye>
      <EmptyState variant={EmptyStateVariant.large}>
        <EmptyStateIcon icon={RocketIcon} />
        <Title headingLevel="h4" size="lg">
          Welcome to the Migration Toolkit for Applications
        </Title>
        <EmptyStateBody>
          The Migration Toolkit for Applications helps you assess and perform
          large-scale application migrations and modernizations. Start by
          creating a project for your applications.
        </EmptyStateBody>
      </EmptyState>
    </Bullseye>
  );
};
