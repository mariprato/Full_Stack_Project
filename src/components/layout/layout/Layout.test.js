import { render, screen, fireEvent } from '@testing-library/react';
import Layout from './Layout';

const mockedUseLocation = jest.fn();
const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useLocation: () => mockedUseLocation,
  useNavigate: () => mockedUseNavigate,
}));

describe('<Layout/>', () => {


    test('should render header', () => {
        render(<Layout></Layout>);
        const contactNumber = screen.getByText(/Home/i)
        expect(contactNumber).toBeInTheDocument();
        });

    test('should render footer', () => {
      render(<Layout></Layout>);
      const enterEmail = screen.getByPlaceholderText(/Enter your email/i)
      expect(enterEmail).toBeInTheDocument();
      });

    test('should render children', () => {
    render(<Layout>Testing Layout</Layout>);
    const layoutChildren = screen.getByText(/Testing Layout/i);
    expect(layoutChildren).toBeInTheDocument();
    });

})