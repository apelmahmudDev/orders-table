const OrderStatus = () => {
	return (
		<div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
			<button className="px-2 py-2.5 text-primary bg-[#F3F8FF] rounded-[6px] h-[37px] flex items-center font-medium">
				<span>All orders</span>
				<span className="ml-[5px] bg-primary text-white font-bold text-[11px] px-2 py-[6px] rounded-[3px]">
					340
				</span>
			</button>
			<button className="px-2 py-2.5 text-gray bg-white rounded-[6px] h-[37px] flex items-center border border-[#EAECF0] font-medium">
				<span>Processing</span>
				<span className="ml-[5px] bg-[#F3F8FF] text-primary font-bold text-[11px] px-2 py-[6px] rounded-[3px]">
					340
				</span>
			</button>
			<button className="px-2 py-2.5 text-gray bg-white rounded-[6px] h-[37px] flex items-center border border-[#EAECF0] font-medium">
				<span>Processing</span>
				<span className="ml-[5px] bg-[#F3F8FF] text-primary font-bold text-[11px] px-2 py-[6px] rounded-[3px]">
					340
				</span>
			</button>
			<button className="px-2 py-2.5 text-gray bg-white rounded-[6px] h-[37px] flex items-center border border-[#EAECF0] font-medium">
				<span>Processing</span>
				<span className="ml-[5px] bg-[#F3F8FF] text-primary font-bold text-[11px] px-2 py-[6px] rounded-[3px]">
					340
				</span>
			</button>
			<button className="px-2 py-2.5 text-gray bg-white rounded-[6px] h-[37px] flex items-center border border-[#EAECF0] font-medium">
				<span>Processing</span>
				<span className="ml-[5px] bg-[#F3F8FF] text-primary font-bold text-[11px] px-2 py-[6px] rounded-[3px]">
					340
				</span>
			</button>
		</div>
	);
};

export default OrderStatus;
