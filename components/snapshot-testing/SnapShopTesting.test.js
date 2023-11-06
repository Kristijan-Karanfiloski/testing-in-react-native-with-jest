import renderer from "react-test-renderer";
import SnapShotTesting from "./SnapShotTesting";

describe("Snapshot Testing", () => {
  it("should make a snap shot of the component", () => {
    const snapshot = renderer.create(<SnapShotTesting />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it("should check the matchers and fail", () => {
    const user = {
      createdAt: new Date(),
      id: Math.floor(Math.random() * 20),
      name: "LeBron James",
    };

    expect(user).toMatchSnapshot();
  });
  it("should check the matchers and pass", () => {
    const user = {
      createdAt: new Date(),
      id: Math.floor(Math.random() * 20),
      name: "LeBron James",
    };

    expect(user).toMatchSnapshot({
      createdAt: expect.any(Date),
      id: expect.any(Number),
      name: expect.any(String),
    });
  });
});
