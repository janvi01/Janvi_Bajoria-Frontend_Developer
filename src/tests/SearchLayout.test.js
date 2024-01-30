import { render, screen } from "@testing-library/react";
import SearchLayout from "../components/SearchLayout";

describe("SearchLayout component", () => {
  test("renders SpaceX heading", () => {
    render(<SearchLayout />);
    const spacexHeading = screen.getByText("SpaceX");
    expect(spacexHeading).toBeInTheDocument();
  });

  test("renders main heading with correct text", () => {
    render(<SearchLayout />);
    const mainHeading = screen.getByText("Wide Range of Rockets and Capsules");
    expect(mainHeading).toBeInTheDocument();
  });

  test("renders description text", () => {
    render(<SearchLayout />);
    const descriptionText = screen.getByText(
      /SpaceX has gained worldwide attention/
    );
    expect(descriptionText).toBeInTheDocument();
  });
});
