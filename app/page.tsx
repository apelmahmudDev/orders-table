"use client";

import Image from "next/image";

import { useState, useEffect } from "react";

import orders from "@/public/assets/data/orders.json";

// components
import Modal from "@/components/Modal";
import TableHead from "@/components/TableHead";
import Pagination from "@/components/Pagination";
import TableNoData from "@/components/TableNoData";
import OrderStatus from "@/components/OrderStatus";
import OrderSummary from "@/components/OrderSummary";
import FilterNSearch from "@/components/FilterNSearch";
import DateRangePicker from "@/components/DateRangePicker";

// icons
import RiderIcon from "@/public/assets/images/rider-icon.png";
import { CalenderIcon, CopyIcon, ThreeDotsIcon } from "@/components/icons";

export default function Home() {
	const [isModalOpen, setModalOpen] = useState(false);
	const [filteredOrders, setFilteredOrders] = useState(orders);
	const [searchTerm, setSearchTerm] = useState("");
	const [statusFilter, setStatusFilter] = useState("");
	const [paymentStatusFilter, setPaymentStatusFilter] = useState("");
	const [dateRange, setDateRange] = useState<{
		startDate: string;
		endDate: string;
	}>({
		startDate: "",
		endDate: "",
	});
	const [currentPage, setCurrentPage] = useState(1);
	const ordersPerPage = 5;

	// Filtering Logic
	useEffect(() => {
		let results = orders;

		// Search Filter
		if (searchTerm) {
			results = results.filter(
				(order) =>
					order.user.firstName
						.toLowerCase()
						.includes(searchTerm.toLowerCase()) ||
					order.user.lastName
						.toLowerCase()
						.includes(searchTerm.toLowerCase()) ||
					order._id.$oid.toLowerCase().includes(searchTerm.toLowerCase())
			);
		}

		// Status Filter
		if (statusFilter) {
			results = results.filter((order) => order.status === statusFilter);
		}

		// Payment Status Filter
		if (paymentStatusFilter) {
			results = results.filter(
				(order) => order.payment.status === paymentStatusFilter
			);
		}

		// Date Range Filter
		if (dateRange.startDate && dateRange.endDate) {
			results = results.filter((order) => {
				const orderDate = new Date(order.createdAt.$date);
				return (
					orderDate >= new Date(dateRange.startDate) &&
					orderDate <= new Date(dateRange.endDate)
				);
			});
		}

		setFilteredOrders(results);
		setCurrentPage(1); // Reset to first page when filters change
	}, [searchTerm, statusFilter, paymentStatusFilter, dateRange]);

	// Pagination Logic
	const indexOfLastOrder = currentPage * ordersPerPage;
	const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
	const currentOrders = filteredOrders.slice(
		indexOfFirstOrder,
		indexOfLastOrder
	);
	const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

	console.log("totalPages", totalPages);
	console.log("currentPage", currentPage);
	console.log("indexOfFirstOrder", indexOfFirstOrder);
	console.log("indexOfLastOrder", indexOfLastOrder);
	console.log("currentOrders", currentOrders);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const handleOpenModal = () => setModalOpen(true);
	const handleCloseModal = () => setModalOpen(false);

	const handleDateChange = (startDate: string, endDate: string) => {
		setDateRange({ startDate, endDate });
	};

	return (
		<main className="my-4 max-w-[1400px] container">
			{/* <div className="flex items-center gap-1.5 justify-between mb-5">
				<h4 className="text-[22px] leading-[26.63px] text-dark font-medium">
					Orders
				</h4>
				<div className="flex items-center gap-2.5">
					<button className="bg-white text-gray flex items-center justify-center w-fit h-10 min-w-[143px] px-[15px] py-[11px] rounded-md border border-[#e6e6e7]">
						Export
					</button>
					<button className="bg-primary text-white flex items-center justify-center w-fit h-10 min-w-[143px] px-[15px] py-[11px] rounded-md">
						Create order
					</button>
				</div>
			</div> */}
			<div className="border border-[#EAECF0] rounded-xl shadow-table overflow-hidden">
				<div>
					{/* table summary */}
					<div className="flex flex-col sm:flex-row gap-[22px] pt-6 px-6">
						{/* date picker */}
						<button
							onClick={handleOpenModal}
							className="font-medium text-sm text-secondary-light flex flex-shrink-0 items-center gap-2 h-[62px] border border-gray-light rounded-lg px-[14px]"
						>
							<CalenderIcon />
							<span>Select Date</span>
						</button>
						<Modal
							isOpen={isModalOpen}
							onClose={handleCloseModal}
							title="Select Date"
						>
							<DateRangePicker onDateChange={handleDateChange} />
						</Modal>
						<OrderSummary />
					</div>

					{/* divider */}
					<div className="mt-6 mb-[17px] h-[1px] w-full bg-[#EAECF0]" />

					{/* search & filter */}
					<div className="mb-[22px] px-6 flex gap-4 flex-wrap justify-between items-start">
						<OrderStatus />
						<FilterNSearch setSearchTerm={setSearchTerm} />
					</div>

					{/* table */}
					<div className="relative overflow-x-auto max-h-[692px]">
						<table className="w-full text-sm text-left">
							<TableHead />
							<tbody>
								{currentOrders.map((item, idx) => (
									<tr
										key={idx}
										className={`bg-white hover:bg-[#F9FAFB] ${"border-b"} border-b-gray-light`}
									>
										<td className="w-4 p-4">
											<div className="flex items-center">
												<input
													id="checkbox-table-search-1"
													type="checkbox"
													className="w-4 h-4 text-blue-600 bg-gray-100 border-b-[#EAECF0] rounded focus:ring-blue-500 focus:ring-2"
												/>
												<label
													htmlFor="checkbox-table-search-1"
													className="sr-only"
												>
													checkbox
												</label>
											</div>
										</td>
										<th
											scope="row"
											className="px-6 py-4 font-medium whitespace-nowrap"
										>
											<div className="flex items-center">
												<span className="uppercase">
													#{item?._id?.$oid.slice(item?._id?.$oid.length - 5)}
												</span>
												<button className="ml-[5px]">
													<CopyIcon />
												</button>
											</div>
										</th>
										<td className="px-6 py-4">{item?.createdAt?.$date}</td>
										<td className="px-6 py-4">
											<span>{`${item?.user?.firstName} ${item?.user?.lastName}`}</span>
											<div className="flex items-center gap-1">
												<span className="text-orange">{item?.user?.phone}</span>
												<button className="ml-[5px]">
													<CopyIcon />
												</button>
											</div>
											<span>{item?.shipping?.address}</span>
										</td>
										<td className="px-6 py-4 text-secondary">
											৳ {item?.totalAmount?.grandTotal}
										</td>
										<td className="px-6 py-4 text-secondary">
											{item?.products?.length} items
										</td>
										<td className="px-6 py-4">
											<span className="py-1 px-3 rounded-[30px] bg-[#E5F5EB] text-[#0D894F]">
												{item?.payment?.status}
											</span>
										</td>
										<td className="px-6 py-4">
											<div>
												<Image src={RiderIcon} alt="rider-icon" />
												<span>{item?.delivery?.deliveryMethod}</span>
											</div>
										</td>
										<td className="px-6 py-4">
											<span className="py-1 px-3 rounded-[30px] bg-[#E5F5EB] text-[#667085]">
												{item?.status}
											</span>
										</td>
										<td className="px-6 py-4">
											<button className="h-9 w-9 rounded-full bg-[#E5EFFF] flex items-center justify-center">
												<ThreeDotsIcon />
											</button>
										</td>
									</tr>
								))}
								{currentOrders.length === 0 && (
									<tr>
										<td colSpan={10}>
											<TableNoData
												title="No orders found"
												message="No orders found for the selected filters"
											/>
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			{/* table pagination */}
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</main>
	);
}
