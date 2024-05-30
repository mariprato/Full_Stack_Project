import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './navbar';

const mockedUseNavigate = jest.fn();
const mockedUseLocation = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
  useLocation: () => mockedUseLocation,
}));

describe('<Navbar/>', () => {


    test('should render phone number', () => {
        render(<Navbar/>);
        const contactNumber = screen.getByText(/000 000/i)
        expect(contactNumber).toBeInTheDocument();
        });

    test('should call useNavigate when a page is clicked', () => {
      render(<Navbar/>);
      const aboutUsLink = screen.getByText(/About Us/i);
      fireEvent.click(aboutUsLink);
      expect(mockedUseNavigate).toHaveBeenCalled();
      });

})