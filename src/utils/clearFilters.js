// Resets all of the filters so that all of the pets are displayed
export const clearFilters = (setTypeFilter, setLocationFilter, setStatusFilter) => {
    setTypeFilter('All');
    setLocationFilter('All');
    setStatusFilter('All');
  };