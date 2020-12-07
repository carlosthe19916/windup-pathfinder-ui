import { formatPath, Paths } from "Paths";

describe("Paths", () => {
  it("Test correct formatPath", () => {
    const result = formatPath(Paths.executions, {
      execution: "myId",
    });
    expect(result).toEqual("/executions/myId");
  });

  it("Test incorrect formatPath", () => {
    const result = formatPath(Paths.executions, {
      incorrectVar: "myId",
    });
    expect(result).toEqual("/executions/:execution");
  });
});
