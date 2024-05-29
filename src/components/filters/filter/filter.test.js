import { render, screen } from '@testing-library/react';
import Filter from './filter';

describe('<Filter/>', () => {

    test('should render component', () => {
        render(<Filter filterMethod="testing-method"/>);
        const filterElement = screen.getByText(/testing-method/i)
        expect(filterElement).toBeInTheDocument();
        });

})