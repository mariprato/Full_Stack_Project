import { render, screen, fireEvent } from "@testing-library/react";
import FooterCom from "./footer";

describe("<Footer/>", () => {
  test("should render phone number", () => {
    render(<FooterCom />);
    const contactNumber = screen.getByText(/000 000/i);
    expect(contactNumber).toBeInTheDocument;
  });

  test("should render email address", () => {
    render(<FooterCom />);
    const emailAddress = screen.getByText(/enquiry@fur-everfound.com/i);
    expect(emailAddress).toBeInTheDocument();
  });

  test("displays correct text and elements", () => {
    render(<FooterCom />);
    expect(screen.getByText("Fur-Ever Found")).toBeInTheDocument();
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
    expect(screen.getByText("Terms and Conditions")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByText("Newsletter")).toBeInTheDocument();
    expect(screen.getByText("Subscribe for updates")).toBeInTheDocument();
    expect(
      screen.getByText("© 2024 Fur-Ever Found. All Rights Reserved.")
    ).toBeInTheDocument();
  });
});
