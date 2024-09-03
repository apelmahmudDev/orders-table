interface TableNoDataProps {
	title: string;
	message: string;
}

const TableNoData = ({ title, message }: TableNoDataProps) => {
	return (
		<div className="my-[58px]">
			<p className="font-semibold text-xl text-center text-dark-1 mb-3">
				{title}
			</p>
			<p className="font-semibold text-[15px] text-center text-gray">
				{message}
			</p>
		</div>
	);
};

export default TableNoData;
