import { fireEvent, render, screen } from "@testing-library/react-native";

import DownloadOnTheAppStoreButton, {
  googleLink,
} from "./DownloadOnTheAppStoreButton";
import { Linking } from "react-native";

describe("DownloadOnTheAppStoreButton", () => {
  describe("when clicking the button", () => {
    it("should open the App store button", () => {
      render(<DownloadOnTheAppStoreButton />);

      fireEvent.press(screen.getByLabelText("Download on the App Store"));

      // screen.debug();

      //!confirm something

      expect(Linking.openURL).toHaveBeenCalledWith(googleLink);
      // expect(Linking.openURL).toHaveBeenCalledWith("Bad Value");
    });
  });
});
