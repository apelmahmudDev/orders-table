import Filter from "./Filter";
import SearchInput from "./SearchInput";

type FilterNSearchProps = {
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const FilterNSearch = ({ setSearchTerm }: FilterNSearchProps) => {
	return (
		<div className="flex items-center gap-4 max-w-[416px] w-full">
			<SearchInput onInputChange={(e) => setSearchTerm(e.target.value)} />
			<Filter />
		</div>
	);
};

export default FilterNSearch;
