import { render, screen } from '@testing-library/react';
import FilterContainer from './filterContainer';

describe('<FilterContainer/>', () => {

    test('should render component', () => {
        render(<FilterContainer></FilterContainer>);
        const buttonElement = screen.getByText(/Filter by:/i)
        expect(buttonElement).toBeInTheDocument();
        });

})