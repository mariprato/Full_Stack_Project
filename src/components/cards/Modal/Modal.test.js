import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('<Modal/>', () => {
    onClose = jest.fn()

    const testPerson = {id: 1, name: "TestName", image: "../images/testing.png", details: "Testing details"}

    test('renders without crashing', () => {
        render(<Modal show onClose={onClose}/>);
        });

    test('modal is displayed when show is true', () => {
        render(<Modal show onClose={onClose}/>);
        const modal = screen.getByText('We have received your form');
        expect(modal).toBeInTheDocument();
    });

    test('modal is not displayed when show is false', () => {
        render(<Modal show={false} onClose={onClose}/>);
        const modal = screen.queryByText('We have received your form');
        expect(modal).not.toBeInTheDocument();
    });

    test('onClose is called when close button is pressed', () => {
        render(<Modal show onClose={onClose}/>);
        const button = screen.getByText('CLOSE');
        fireEvent.click(button);
        expect(onClose).toHaveBeenCalledTimes(1);
    });


})