import { render, screen, fireEvent } from '@testing-library/react';
import FooterCom from './footer';

describe('<Footer/>', () => {


    test('should render phone number', () => {
        render(<FooterCom/>);
        const contactNumber = screen.getByText(/000 000/i)
        expect(contactNumber).toBeInTheDocument;
        });
    
    test('should render email address', () => {
        render(<FooterCom/>);
        const emailAddress = screen.getByText(/enquiry@fur-everfound.com/i)
        expect(emailAddress).toBeInTheDocument;
        });
    


})