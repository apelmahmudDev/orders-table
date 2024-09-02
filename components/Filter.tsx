import { useState } from "react";
import { ChevronIcon, CrossIcon, HamburgerIcon } from "./icons";
import Button from "./Button";

const Filter = () => {
	const [filterOpen, setFilterOpen] = useState(false);
	const [dateOpen, setDateOpen] = useState(false);
	const [statusOpen, setStatusOpen] = useState(false);
	const [paymentOpen, setPaymentOpen] = useState(false);

	return (
		<div className="relative">
			<button
				onClick={() => setFilterOpen(true)}
				id="dropdownButton"
				data-dropdown-toggle="dropdown"
				className="inline-flex gap-1 items-center text-gray bg-white border border-[#EAECF0] font-medium rounded-lg text-sm px-3 py-1.5"
				type="button"
			>
				<HamburgerIcon />
				Filter
			</button>

			{filterOpen && (
				<div
					id="dropdown"
					className="z-10 w-[320px] sm:w-[400px] max-h-[692px] bg-white rounded-lg shadow-filter border border-gray-light"
					style={{
						position: "absolute",
						right: "0px",
						top: "calc(100% + 5px)",
					}}
				>
					<button
						onClick={() => setFilterOpen(false)}
						className="absolute right-3 top-3 "
					>
						<CrossIcon />
					</button>
					<div className="w-full">
						<div className="flex items-center gap-2 mb-4 px-5 pt-5">
							<p className="font-medium text-base text-[#333843]">
								Filter your orders
							</p>
							<button className="font-medium text-sm underline text-gray">
								Reset
							</button>
						</div>

						<div className="max-h-[400px] overflow-y-auto px-5">
							{/* filter by date */}
							<div className="w-full rounded-lg border border-gray-light">
								<button
									onClick={() => setDateOpen(!dateOpen)}
									className="bg-[#F9FAFB] h-[36px] w-full flex items-center justify-between px-3 font-medium text-sm text-[#333843]"
								>
									<span>Date Created</span>
									<span
										style={{
											transform: dateOpen ? "rotate(0deg)" : "rotate(180deg)",
										}}
									>
										<ChevronIcon />
									</span>
								</button>
								{dateOpen && (
									<div className="p-3">
										<div className="mb-4 flex items-center">
											<input
												checked
												id="default-radio-1"
												type="radio"
												value=""
												name="default-radio"
												className="w-4 h-4 cursor-pointer"
											/>
											<label
												htmlFor="default-radio-1"
												className="ms-2 font-medium text-sm text-[#696a6f] cursor-pointer select-none"
											>
												All
											</label>
										</div>
										<div className="mt-4 flex items-center">
											<input
												checked
												id="default-radio-2"
												type="radio"
												value=""
												name="default-radio"
												className="w-4 h-4 cursor-pointer"
											/>
											<label
												htmlFor="default-radio-2"
												className="ms-2 font-medium text-sm text-[#696a6f] cursor-pointer select-none"
											>
												Last week
											</label>
										</div>
									</div>
								)}
							</div>
							{/* filter by status */}
							<div className="mt-4 w-full rounded-lg border border-gray-light">
								<button
									onClick={() => setStatusOpen(!statusOpen)}
									className="bg-[#F9FAFB] h-[36px] w-full flex items-center justify-between px-3 font-medium text-sm text-[#333843]"
								>
									<span>Status</span>
									<span
										style={{
											transform: statusOpen ? "rotate(0deg)" : "rotate(180deg)",
										}}
									>
										<ChevronIcon />
									</span>
								</button>
								{statusOpen && (
									<div className="p-3">
										<div className="mb-4 flex items-center">
											<div className="flex items-center">
												<input
													id="link-checkbox"
													type="checkbox"
													value=""
													className="w-4 h-4 cursor-pointer"
												/>
												<label
													htmlFor="link-checkbox"
													className="ms-2 font-medium text-sm text-[#696a6f] cursor-pointer select-none"
												>
													Processing
												</label>
											</div>
										</div>
									</div>
								)}
							</div>
							{/* filter by  payment status */}
							<div className="mt-4 w-full rounded-lg border border-gray-light">
								<button
									onClick={() => setPaymentOpen(!paymentOpen)}
									className="bg-[#F9FAFB] h-[36px] w-full flex items-center justify-between px-3 font-medium text-sm text-[#333843]"
								>
									<span>Payment Status</span>
									<span
										style={{
											transform: paymentOpen
												? "rotate(0deg)"
												: "rotate(180deg)",
										}}
									>
										<ChevronIcon />
									</span>
								</button>
								{paymentOpen && (
									<div className="p-3">
										{[...Array(2)].map((_, i) => (
											<div key={i} className="mb-4 flex items-center">
												<div className="flex items-center">
													<input
														id="link-checkbox-2"
														type="checkbox"
														value=""
														className="w-4 h-4 cursor-pointer"
													/>
													<label
														htmlFor="link-checkbox-2"
														className="ms-2 font-medium text-sm text-[#696a6f] cursor-pointer select-none"
													>
														Processing
													</label>
												</div>
											</div>
										))}
									</div>
								)}
							</div>
						</div>

						<div className="mt-6 mb-4 flex items-center gap-[14px] justify-end px-5">
							<button className="text-secondary-light font-medium text-[15px] h-10 flex items-center px-3 rounded-md border border-gray-light bg-white">
								Cancel
							</button>
							<button className="text-white font-medium text-[15px] h-10 flex items-center px-3 rounded-md border border-gray-light bg-primary">
								Apply Filter
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Filter;
