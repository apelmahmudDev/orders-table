import Filter from "./Filter";
import SearchInput from "./SearchInput";
import { FilterState } from "@/app/page";

interface FilterNSearchProps {
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
	onFilterApply: (filters: FilterState) => void;
}

const FilterNSearch = ({
	setSearchTerm,
	onFilterApply,
}: FilterNSearchProps) => {
	return (
		<div className="flex items-center gap-4 max-w-[416px]">
			<SearchInput onInputChange={(e) => setSearchTerm(e.target.value)} />
			<Filter onFilterApply={onFilterApply} />
		</div>
	);
};

export default FilterNSearch;
