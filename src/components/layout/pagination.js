import './pagination.css';

const Pagination = ({pets, activePage, setActivePage}) => {


    function getPageNumbers(){
        const totalPages = Math.ceil(pets.length / 8)
        return Array.from({length: totalPages}, (_, index) => index + 1);
    }

    function getClass(pageNumber){
        if (pageNumber === activePage){
            return "active-page"
        } else {
            return "non-active-page"
        }
    }

    const pageNumbers = getPageNumbers();

    return ( 
        <div className = "button-container">
            {pageNumbers.map((pageNumber) => (
                <button className={getClass(pageNumber)} key={pageNumber * 100} onClick={() => setActivePage(pageNumber)}>{pageNumber}</button>
            ))}

        </div> 
    );
}
 
export default Pagination;