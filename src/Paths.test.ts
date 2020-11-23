import { formatPath, Paths } from "Paths";

describe("Paths", () => {
  it("Test correct formatPath", () => {
    const result = formatPath(Paths.applicationList, {
      report: "myId",
    });
    expect(result).toEqual("/reports/myId/applications");
  });

  it("Test incorrect formatPath", () => {
    const result = formatPath(Paths.applicationList, {
      incorrectVar: "myId",
    });
    expect(result).toEqual("/reports/:report/applications");
  });
});
