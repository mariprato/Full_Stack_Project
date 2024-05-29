import { render, screen } from '@testing-library/react';
import FilterContainer from './filterContainer';

jest.mock('../../generic/button/ButtonComponent', () => ({ onClick, children, className }) => (
    <button className={className} onClick={onClick}>{children}</button>
));

describe('FilterContainer component', () => {
    test('renders without crashing', () => {
        render(<FilterContainer>Test Child</FilterContainer>);
    });

    test('renders the main filter button with correct text', () => {
        render(<FilterContainer>Test Child</FilterContainer>);
        const button = screen.getByText('Filter by:');
        expect(button).toBeInTheDocument();
    });

    test('renders children correctly', () => {
        render(<FilterContainer><div>Test Child</div></FilterContainer>);
        const child = screen.getByText('Test Child');
        expect(child).toBeInTheDocument();
    });

    test('has the correct class names applied', () => {
        const { container } = render(<FilterContainer><div>Test Child</div></FilterContainer>);
        expect(container.firstChild).toHaveClass('page-container');
        const filtersContainer = container.querySelector('.filters-container');
        expect(filtersContainer).toHaveClass('filters-container');
    });
});
