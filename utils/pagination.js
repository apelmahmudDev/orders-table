export const getVisiblePages = (currentPage, totalPages) => {
	const pages = [];
	if (totalPages <= 5) {
		// Show all pages if there are 5 or less
		for (let i = 1; i <= totalPages; i++) {
			pages.push(i);
		}
	} else {
		// Show the first page
		pages.push(1);

		// Show pages around the current page
		if (currentPage > 3) pages.push("...");
		if (currentPage > 2) pages.push(currentPage - 1);
		if (currentPage !== 1 && currentPage !== totalPages)
			pages.push(currentPage);
		if (currentPage < totalPages - 1) pages.push(currentPage + 1);
		if (currentPage < totalPages - 2) pages.push("...");

		// Show the last page
		pages.push(totalPages);
	}
	return pages;
};
