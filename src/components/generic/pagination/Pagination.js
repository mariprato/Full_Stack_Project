import ButtonComponent from '../button/ButtonComponent';
import './Pagination.css';
import { useNavigate } from 'react-router-dom';

const Pagination = ({pets, activePage, setActivePage}) => {
    const navigate = useNavigate();

    function getPageNumbers(){
        const totalPages = Math.ceil(pets.length / 8)
        return Array.from({length: totalPages}, (_, index) => index + 1);
    }

    function getClass(pageNumber){
        return pageNumber === activePage ? "page-button-active" : "page-button-non-active";
    }

    function handlePageChange(pageNumber){
        setActivePage(pageNumber);
        navigate(`/lostPets?page=${pageNumber}`);
    }

    const pageNumbers = getPageNumbers();

    return ( 
        <div className="page-button-container">
            {pageNumbers.map((pageNumber) => (
                <ButtonComponent className={getClass(pageNumber)} key={pageNumber} onClick={() => handlePageChange(pageNumber)} variant="button-page-number">{pageNumber}</ButtonComponent>
            ))}
        </div> 
    );
}

export default Pagination;
