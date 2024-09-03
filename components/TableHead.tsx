import { PlusIcon } from "./icons";

const columns: {
	id: number;
	label: string;
	minWidth: number;
}[] = [
	{ id: 1, label: "Order ID", minWidth: 50 },
	{ id: 2, label: "Creating date", minWidth: 100 },
	{ id: 3, label: "Customer info", minWidth: 260 },
	{ id: 4, label: "Total", minWidth: 100 },
	{ id: 5, label: "Quantity", minWidth: 100 },
	{ id: 6, label: "Payment status", minWidth: 100 },
	{ id: 7, label: "Delivery method", minWidth: 150 },
	{ id: 8, label: "Status", minWidth: 100 },
];

const TableHead = () => {
	return (
		<thead className="text-xs">
			<tr className="bg-[#F9FAFB] border-t border-t-[#EAECF0]">
				<th scope="col" className="p-4">
					<div className="flex items-center">
						<input
							id="checkbox-all-search"
							type="checkbox"
							className="w-4 h-4 rounded"
						/>
						<label htmlFor="checkbox-all-search" className="sr-only">
							checkbox
						</label>
					</div>
				</th>
				{columns.map((column) => (
					<th
						scope="col"
						className="px-6 py-3 text-gray"
						key={column.id}
						style={{ minWidth: column.minWidth }}
					>
						{column.label}
					</th>
				))}
				<th scope="col" className="px-6 py-3">
					<button>
						<PlusIcon />
					</button>
				</th>
			</tr>
		</thead>
	);
};

export default TableHead;
