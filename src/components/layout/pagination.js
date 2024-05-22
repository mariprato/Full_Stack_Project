import ButtonComponent from '../ButtonComponent';
import './pagination.css';

const Pagination = ({pets, activePage, setActivePage}) => {


    function getPageNumbers(){
        const totalPages = Math.ceil(pets.length / 8)
        return Array.from({length: totalPages}, (_, index) => index + 1);
    }

    function getClass(pageNumber){
        if (pageNumber === activePage){
            return "page-button-active"
        } else {
            return "page-button-non-active"
        }
    }

    const pageNumbers = getPageNumbers();

    return ( 
        <div className = "page-button-container">
            {pageNumbers.map((pageNumber) => (
                <ButtonComponent className={getClass(pageNumber)} key={pageNumber} onClick={() => setActivePage(pageNumber)} variant="button-page-number">{pageNumber}</ButtonComponent>
            ))}

        </div> 
    );
}
 
export default Pagination;