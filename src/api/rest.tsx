import { APIClient } from "axios-config";

import { ApplicationRepresentation } from "./models";

const APPLICATIONS = "/execution/{executionId}/applications";

export const getApplications = (executionId: string) => {
  return APIClient.get<ApplicationRepresentation[]>(
    APPLICATIONS.replace("{executionId}", executionId)
  );
};
