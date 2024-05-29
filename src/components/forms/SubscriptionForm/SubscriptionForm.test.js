import { render, screen, fireEvent } from '@testing-library/react';
import SubscriptionForm from './SubscriptionForm';

describe('<SubscriptionForm/>', () => {

    test('should render email input', () => {
      render(<SubscriptionForm/>);
      const enterEmail = screen.getByPlaceholderText(/Enter your email/i)
      expect(enterEmail).toBeInTheDocument();
      });

    test('should change input as user types', () => {
    render(<SubscriptionForm/>);
    const enterEmail = screen.getByPlaceholderText(/Enter your email/i)
    fireEvent.change(enterEmail, { target: { value: "example@email.com"}})
    expect(enterEmail.value).toBe("example@email.com");
    });

})