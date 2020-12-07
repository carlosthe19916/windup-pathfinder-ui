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

  welcome = "/welcome",
  invalidExecution = "/invalid-execution",
  executions = "/executions/:execution",

  applications = "/executions/:execution/applications",
  technologies = "/executions/:execution/technologies",
}

export interface ExecutionRoute {
  execution: string;
}
