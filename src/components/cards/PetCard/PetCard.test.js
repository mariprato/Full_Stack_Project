import { render, screen } from '@testing-library/react';
import PetCard from './PetCard';
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

describe('<PetCard/>', () => {

    const testPet = {id: 1, found: false, name: "Rory", type: "Dog", location: "Birmingham", dateLastSeen: "27/03/24", description: "Rory is an adult male German Shepherd last seen wearing a red collar.", additionalInformation: "Rory is friendly with people and is safe to approach if spotted. He is frightened of cars and may run when near busy roads. His favourite food is chicken."}

    test('should render component', () => {
        render(<BrowserRouter><PetCard pet={testPet}/></BrowserRouter>);
        const petName = screen.getByText(/Rory, Birmingham/i)
        expect(petName).toBeInTheDocument();
        });

})