import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./navbar";

const mockedUseNavigate = jest.fn();
const mockedUseLocation = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
  useLocation: () => mockedUseLocation,
}));

describe("<Navbar />", () => {
  test("should render phone number", () => {
    render(<Navbar />);
    const contactNumber = screen.getByText(/000 000/i);
    expect(contactNumber).toBeInTheDocument();
  });

  test("should call useNavigate when a page is clicked", () => {
    render(<Navbar />);
    const aboutUsLink = screen.getByText(/About Us/i);
    fireEvent.click(aboutUsLink);
    expect(mockedUseNavigate).toHaveBeenCalled();
  });

  test('clicking on "Post Now" button navigates to submission form page and reloads window', () => {
    const reloadMock = jest.fn();
    Object.defineProperty(window, "location", {
      value: { reload: reloadMock },
      writable: true,
    });
    render(<Navbar />);
    const postButton = screen.getByText(/Post Now/i);
    fireEvent.click(postButton);
    expect(mockedUseNavigate).toHaveBeenCalledWith("/submissionForm");
    expect(reloadMock).toHaveBeenCalled();
  });
});
