import { render, screen } from '@testing-library/react';
import UsCard from './UsCard';

describe('<PetCard/>', () => {

    const testPerson = {id: 1, name: "TestName", image: "../images/testing.png", details: "Testing details"}

    test('should render component', () => {
        render(<UsCard colleague={testPerson}/>);
        const colleagueName = screen.getByText(/TestName/i)
        expect(colleagueName).toBeInTheDocument();
        });

})