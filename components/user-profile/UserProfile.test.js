import { UserProfile } from "./UserProfile";
import { render, screen } from "@testing-library/react-native";

describe("User profile -rendering", () => {
  it("should  have text Email verified when isEmailVerifeid is  true", () => {
    render(
      <UserProfile
        displayName="Kiko the developer"
        username="kikaccc"
        email="kiko.kiko@gmail.con"
        isEmailVerified={true}
      />,
    );

    expect(screen.getByText("Verified : Email Verified")).toBeTruthy();
  });

  it("should not have text email is verified when isEmailVerifeid is false", () => {
    render(
      <UserProfile
        displayName="Kiko the developer"
        username="kikaccc"
        email="kiko.kiko@gmail.con"
        isEmailVerified={false}
      />,
    );
    expect(screen.queryByText("Verified : Email Verified")).not.toBeTruthy();
    expect(screen.getByText("Verified : Email not Verified")).toBeTruthy();
  });
});
