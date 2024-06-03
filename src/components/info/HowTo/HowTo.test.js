import { render, screen, fireEvent } from '@testing-library/react';
import HowTo from './HowTo';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('<HowTo/>', () => {


    test('should render the header', () => {
      render(<HowTo/>);
      const petLostHeader = screen.getByText(/My Pet Is Lost/i);
      const foundPetHeader = screen.getByText(/I Have Seen a Lost Pet/i);
      expect(petLostHeader).toBeInTheDocument();
      expect(foundPetHeader).toBeInTheDocument();
      });

    test('should call useNavigate when Post Now button is clicked', () => {
      render(<HowTo/>);
      const postNowButton = screen.getByRole('button', { name: "Post Now"})
      fireEvent.click(postNowButton);
      expect(mockedUseNavigate).toHaveBeenCalled();
      });

    test('should call useNavigate when Lost Pets button is clicked', () => {
      render(<HowTo/>);
      const LostPetsButton = screen.getByRole('button', { name: "Lost Pets"})
      fireEvent.click(LostPetsButton);
      expect(mockedUseNavigate).toHaveBeenCalled();
      });

    test('should render images with correct alt text', () => {
      render(<HowTo/>);
      const lostPetImg = screen.getByAltText(/Sequential cartoon-style depiction of the lost pet website process. Includes a person submitting pet details, a team of moderators reviewing submissions, a webpage displaying shared pet information, and a smartphone notification for found pets./i);
      const seenPetImg = screen.getByAltText(/Sequential cartoon-style depiction of the process for reporting a lost pet sighting. Includes a person spotting a lost pet, visiting the website to click the 'Contact Us' button, and the team quickly notifying the pet's owner./i);
      expect(lostPetImg).toBeInTheDocument();
      expect(seenPetImg).toBeInTheDocument();
      });

})