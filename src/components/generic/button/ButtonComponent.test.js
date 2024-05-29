import { render, screen, fireEvent } from '@testing-library/react';
import ButtonComponent from './ButtonComponent';

const onClick = jest.fn();

describe('<ButtonComponent/>', () => {

    test('should render component', () => {
        render(<ButtonComponent>Testing Button</ButtonComponent>);
        const buttonElement = screen.getByText(/Testing Button/i)
        expect(buttonElement).toBeInTheDocument();
        });
    
    test('should be assigned className by variant', () => {
      render(<ButtonComponent variant="button-post-pink">Testing Button</ButtonComponent>);
      const buttonElement = screen.getByText(/Testing Button/i)
      expect(buttonElement).toHaveClass('button-standard medium pink-bg-white-text');
      });

      test('should trigger onClick when clicked', () => {
        render(<ButtonComponent onClick={onClick}>Testing Button</ButtonComponent>);
        const buttonElement = screen.getByText(/Testing Button/i)
        fireEvent.click(buttonElement);
        expect(onClick).toHaveBeenCalled();
        });

})