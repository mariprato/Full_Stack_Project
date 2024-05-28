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
        expect(petLostHeader).toBeInTheDocument;
        expect(foundPetHeader).toBeInTheDocument;
        });

    test('should call useNavigate when button clicked', () => {
      render(<HowTo/>);
      const postNowButton = screen.getByRole('button', { name: "Lost Pets"})
      fireEvent.click(postNowButton);
      expect(mockedUseNavigate).toHaveBeenCalled();
      });

})