import { render, screen, fireEvent } from '@testing-library/react';
import ButtonComponent from './ButtonComponent';

describe('ButtonComponent', () => {
    const variants = [
        { name: 'button-post-pink', expectedClass: 'button-standard medium pink-bg-white-text' },
        { name: 'button-post-blue', expectedClass: 'button-standard medium white-bg-blue-text' },
        { name: 'button-return-to-pets', expectedClass: 'button-standard large pink-bg-white-text' },
        { name: 'button-form-submit', expectedClass: 'button-standard medium white-bg-pink-text' },
        { name: 'button-newsletter-submit', expectedClass: 'button-standard pink-bg-white-text newsletter-button' },
        { name: 'button-filter', expectedClass: 'button-standard pink-bg-white-text filter-button' },
        { name: 'button-filter-options', expectedClass: 'button-standard white-bg-pink-text options-button' },
        { name: 'button-page-number', expectedClass: 'page-button' },
    ];

    test('renders without crashing', () => {
        render(<ButtonComponent>Test Button</ButtonComponent>);
    });

    variants.forEach(variant => {
        test(`applies correct classes for variant: ${variant.name}`, () => {
            render(<ButtonComponent variant={variant.name}>Test Button</ButtonComponent>);
            const button = screen.getByText('Test Button');
            expect(button).toHaveClass(variant.expectedClass);
        });
    });

    test('calls onClick handler when clicked', () => {
        const handleClick = jest.fn();
        render(<ButtonComponent onClick={handleClick}>Test Button</ButtonComponent>);
        const button = screen.getByText('Test Button');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('sets the correct button type', () => {
        render(<ButtonComponent type="submit">Submit Button</ButtonComponent>);
        const button = screen.getByText('Submit Button');
        expect(button).toHaveAttribute('type', 'submit');
    });

    test('renders children correctly', () => {
        render(<ButtonComponent>Child Text</ButtonComponent>);
        const button = screen.getByText('Child Text');
        expect(button).toBeInTheDocument();
    });

    test('should render component', () => {
        render(<ButtonComponent>Testing Button</ButtonComponent>);
        const buttonElement = screen.getByText(/Testing Button/i);
        expect(buttonElement).toBeInTheDocument();
    });

    test('should be assigned className by variant', () => {
        render(<ButtonComponent variant="button-post-pink">Testing Button</ButtonComponent>);
        const buttonElement = screen.getByText(/Testing Button/i);
        expect(buttonElement).toHaveClass('button-standard medium pink-bg-white-text');
    });

    test('should trigger onClick when clicked', () => {
        const onClick = jest.fn();
        render(<ButtonComponent onClick={onClick}>Testing Button</ButtonComponent>);
        const buttonElement = screen.getByText(/Testing Button/i);
        fireEvent.click(buttonElement);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
