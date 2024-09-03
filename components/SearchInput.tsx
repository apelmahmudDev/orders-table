import { Fragment } from "react";
import SearchIcon from "./icons/SearchIcon";

interface SearchInputProps {
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ onInputChange }: SearchInputProps) => {
	return (
		<Fragment>
			<label htmlFor="table-search" className="sr-only">
				Search
			</label>
			<div className="relative">
				<div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
					<SearchIcon />
				</div>
				<input
					onChange={onInputChange}
					type="text"
					id="table-search"
					className="block p-2 ps-10 text-sm text-gray border border-gray-light rounded-lg w-full focus:ring-blue-500 focus:border-blue-500"
					placeholder="Searching order..."
				/>
			</div>
		</Fragment>
	);
};

export default SearchInput;
