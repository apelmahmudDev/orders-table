"use client";

import { getVisiblePages } from "@/utils/pagination";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";

// type
interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

const Pagination = ({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) => {
	const pages = getVisiblePages(currentPage, totalPages);

	return (
		<nav className="flex justify-center mt-8">
			<ul className="pagination flex items-center gap-1">
				<li>
					<button
						disabled={currentPage === 1}
						onClick={() => onPageChange(currentPage - 1)}
						className={`flex items-center gap-2 text-sm text-gray-1 font-medium disabled:opacity-50 ${
							currentPage === 1 ? "mr-2" : ""
						}`}
					>
						<ArrowLeftIcon />
						<span>Prev</span>
					</button>
				</li>
				{pages.map((page, index) => (
					<li
						key={index}
						className={`page-item ${page === currentPage ? "active" : ""}`}
					>
						{page === "..." ? (
							<span className="page-link">...</span>
						) : (
							<button
								onClick={() => onPageChange(page)}
								className={`text-sm font-medium flex-shrink-0 flex items-center justify-center h-7 w-7 rounded-[6px] outline-none focus:outline-none transition ${
									page === currentPage
										? "bg-primary text-white border border-gray-light"
										: ""
								}`}
							>
								{page}
							</button>
						)}
					</li>
				))}
				<li
					className={`page-item ${
						currentPage === totalPages ? "disabled" : ""
					}`}
				>
					<button
						disabled={currentPage === totalPages}
						onClick={() => onPageChange(currentPage + 1)}
						className={`flex items-center gap-2 text-sm text-gray-1 font-medium disabled:opacity-50 ${
							currentPage === totalPages ? "ml-2" : ""
						}`}
					>
						<span>Next</span>
						<ArrowRightIcon />
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
