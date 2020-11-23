export const formatPath = (path: Paths, data: any) => {
  let url = path as string;

  for (const k of Object.keys(data)) {
    url = url.replace(":" + k, data[k]);
  }

  return url;
};

export enum Paths {
  base = "/",
  notFound = "/not-found",

  applicationList = "/reports/:report/applications",
}

export interface OptionalCompanyRoute {
  company?: string;
}

export interface CompanytRoute {
  company: string;
}
