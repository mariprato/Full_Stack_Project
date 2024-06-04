import { render, screen, fireEvent } from '@testing-library/react';
import Filter from './Filter';
import ButtonComponent from '../../generic/button/ButtonComponent';

jest.mock('../../generic/button/ButtonComponent', () => ({ onClick, children, className }) => (
    <button className={className} onClick={onClick}>{children}</button>
));

describe('Filter component', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const filterMethod = 'Filter By';
    const currentlySelected = 'Option 2';
    const onClick = jest.fn();

    beforeEach(() => {
        onClick.mockClear();
    });

    test('renders without crashing', () => {
        render(<Filter options={options} onClick={onClick} currentlySelected={currentlySelected} filterMethod={filterMethod} />);
    });

    test('renders the main button with correct text', () => {
        render(<Filter options={options} onClick={onClick} currentlySelected={currentlySelected} filterMethod={filterMethod} />);
        const button = screen.getByText(`${filterMethod}:`);
        expect(button).toBeInTheDocument();
    });

    test('toggles options menu when main button is clicked', () => {
        render(<Filter options={options} onClick={onClick} currentlySelected={currentlySelected} filterMethod={filterMethod} />);
        const button = screen.getByText(`${filterMethod}:`);
        options.forEach(option => {
            expect(screen.queryByText(option)).not.toBeInTheDocument();
        });

        fireEvent.click(button);
        options.forEach(option => {
            expect(screen.getByText(option)).toBeInTheDocument();
        });

        fireEvent.click(button);
        options.forEach(option => {
            expect(screen.queryByText(option)).not.toBeInTheDocument();
        });
    });

    test('calls onClick with correct option and closes menu', () => {
        render(<Filter options={options} onClick={onClick} currentlySelected={currentlySelected} filterMethod={filterMethod} />);
        const mainButton = screen.getByText(`${filterMethod}:`);
        
        fireEvent.click(mainButton);
        
        const optionButton = screen.getByText('Option 1');
        
        fireEvent.click(optionButton);

        expect(onClick).toHaveBeenCalledWith('Option 1');

        options.forEach(option => {
            expect(screen.queryByText(option)).not.toBeInTheDocument();
        });
    });

    test('highlights the currently selected option', () => {
        render(<Filter options={options} onClick={onClick} currentlySelected={currentlySelected} filterMethod={filterMethod} />);
        const mainButton = screen.getByText(`${filterMethod}:`);
        
        fireEvent.click(mainButton);

        const currentOptionButton = screen.getByText(currentlySelected);
        expect(currentOptionButton).toHaveClass('current-option');
    });
});
