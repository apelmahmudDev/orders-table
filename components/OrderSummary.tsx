const OrderSummary = () => {
	return (
		<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-x divide-[#EAECF0] border border-[#EAECF0] rounded-lg">
			{[
				{ label: "Total Revenue", total: "12,089" },
				{ label: "Order item", total: "184" },
				{ label: "Return item", total: "12" },
				{ label: "Fulfilled orders", total: "84" },
			].map((item, idx) => (
				<div key={idx} className="py-2.5 px-6 h-[62px]">
					<p className="text-gray font-medium text-sm">{item?.label}</p>
					<p className="font-bold text-base">${item.total}</p>
				</div>
			))}
		</div>
	);
};

export default OrderSummary;
