import { render, screen } from '@testing-library/react';
import Header from './header';


describe('<Header/>', () => {
    test('renders header text', () => {
        render(<Header />);
        const headerTextElement = screen.getByText(/Bringing lost pets back to loving arms/i);
        expect(headerTextElement).toBeInTheDocument();
        });

})



