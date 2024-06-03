// This function navigates to a given page and scrolls to the top of the page
export const goToTopOfPage = (navigate, pageRoute) => {
    navigate(pageRoute);
    window.scrollTo(0, 0);
}