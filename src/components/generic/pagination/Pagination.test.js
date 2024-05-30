import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './pagination';
import pets from '../../../databases/petDatabase';

const mockedUseNavigate = jest.fn();
const setActivePage = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('<Pagination/>', () => {


    test('should render 4 buttons', () => {
        render(<Pagination pets={pets}/>);
        const paginationElement = screen.queryAllByRole('button');
        expect(paginationElement).toHaveLength(4);
        });

    test('should call setActivePage when a page button is clicked', () => {
      render(<Pagination pets={pets} activePage={1} setActivePage={setActivePage}/>);
      const pageTwoElement= screen.getByText(2);
      fireEvent.click(pageTwoElement);
      expect(setActivePage).toHaveBeenCalled();
      });

})