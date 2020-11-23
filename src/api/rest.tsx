import { AxiosPromise } from "axios";
import { APIClient } from "axios-config";

import { ApplicationRepresentation } from "./models";

const APPLICATIONS = "/reports/{reportId}/applications";

export const getApplications = (reportId: string) => {
  return APIClient.get<ApplicationRepresentation>(
    APPLICATIONS.replace("{reportId}", reportId)
  );
};
