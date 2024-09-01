import { PlusIcon } from "@/components/icons";

export default function Home() {
	return (
		<main className="my-4 max-w-[1400px] container">
			<div className="flex items-center gap-1.5 justify-between mb-5">
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
			</div>
			<div className="border border-[#EAECF0] rounded-xl">
				<div>
					{/* start table header */}
					<div className="flex items-center gap-[22px] pt-6 px-6">
						{/* date picker */}
						<div
							id="date-range-picker"
							date-rangepicker
							className="flex items-center"
						>
							<div className="relative">
								<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
									<svg
										className="w-4 h-4 text-gray-500 dark:text-gray-400"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
									</svg>
								</div>
								<input
									id="datepicker-range-start"
									name="start"
									type="date"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700"
									placeholder="Select date start"
								/>
							</div>
						</div>

						{/*  */}
						<div className="w-full grid grid-cols-4 divide-x divide-[#EAECF0] border border-[#EAECF0] h-[62px] rounded-lg">
							<div className="py-2.5 px-7">
								<p className="text-gray font-medium text-sm">Total Revenue</p>
								<p className="font-bold text-base">$12,084</p>
							</div>
							<div className="py-2.5 px-7">
								<p className="text-gray font-medium text-sm">Total Revenue</p>
								<p className="font-bold text-base">$12,084</p>
							</div>
							<div className="py-2.5 px-7">
								<p className="text-gray font-medium text-sm">Total Revenue</p>
								<p className="font-bold text-base">$12,084</p>
							</div>
							<div className="py-2.5 px-7">
								<p className="text-gray font-medium text-sm">Total Revenue</p>
								<p className="font-bold text-base">$12,084</p>
							</div>
						</div>
						{/*  */}
					</div>
					{/*  */}

					<div className="mt-6 mb-[17px] h-[1px] w-full bg-[#EAECF0]"></div>

					<div className="mb-[22px] flex item-center flex-wrap gap-4 px-6">
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
					</div>
					{/*  */}
					{/* end table header */}

					{/* table */}
					<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
						<div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
							<div>
								<button
									id="dropdownRadioButton"
									data-dropdown-toggle="dropdownRadio"
									className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
									type="button"
								>
									<svg
										className="w-3 h-3 text-gray-500 me-3"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
									</svg>
									Last 30 days
									<svg
										className="w-2.5 h-2.5 ms-2.5"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 10 6"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="m1 1 4 4 4-4"
										/>
									</svg>
								</button>
								{/* Dropdown menu  */}
								<div
									id="dropdownRadio"
									className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow"
									data-popper-reference-hidden=""
									data-popper-escaped=""
									data-popper-placement="top"
									style={{
										position: "absolute",
										inset: "auto auto 0px 0px",
										margin: "0px",
										transform: "translate3d(522.5px, 3847.5px, 0px)",
									}}
								>
									<ul
										className="p-3 space-y-1 text-sm text-gray-700"
										aria-labelledby="dropdownRadioButton"
									>
										<li>
											<div className="flex items-center p-2 rounded hover:bg-gray-100">
												<input
													id="filter-radio-example-1"
													type="radio"
													value=""
													name="filter-radio"
													className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
												/>
												<label
													htmlFor="filter-radio-example-1"
													className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
												>
													Last day
												</label>
											</div>
										</li>
										<li>
											<div className="flex items-center p-2 rounded hover:bg-gray-100">
												<input
													checked=""
													id="filter-radio-example-2"
													type="radio"
													value=""
													name="filter-radio"
													className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
												/>
												<label
													htmlFor="filter-radio-example-2"
													className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
												>
													Last 7 days
												</label>
											</div>
										</li>
										<li>
											<div className="flex items-center p-2 rounded hover:bg-gray-100">
												<input
													id="filter-radio-example-3"
													type="radio"
													value=""
													name="filter-radio"
													className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
												/>
												<label
													htmlFor="filter-radio-example-3"
													className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
												>
													Last 30 days
												</label>
											</div>
										</li>
										<li>
											<div className="flex items-center p-2 rounded hover:bg-gray-100">
												<input
													id="filter-radio-example-4"
													type="radio"
													value=""
													name="filter-radio"
													className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
												/>
												<label
													htmlFor="filter-radio-example-4"
													className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
												>
													Last month
												</label>
											</div>
										</li>
										<li>
											<div className="flex items-center p-2 rounded hover:bg-gray-100">
												<input
													id="filter-radio-example-5"
													type="radio"
													value=""
													name="filter-radio"
													className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
												/>
												<label
													htmlFor="filter-radio-example-5"
													className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
												>
													Last year
												</label>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<label htmlFor="table-search" className="sr-only">
								Search
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
									<svg
										className="w-5 h-5 text-gray-500 dark:text-gray-400"
										aria-hidden="true"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
											clip-rule="evenodd"
										></path>
									</svg>
								</div>
								<input
									type="text"
									id="table-search"
									className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Search for items"
								/>
							</div>
						</div>
						<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
							<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
								<tr>
									<th scope="col" className="p-4">
										<div className="flex items-center">
											<input
												id="checkbox-all-search"
												type="checkbox"
												className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
											/>
											<label htmlFor="checkbox-all-search" className="sr-only">
												checkbox
											</label>
										</div>
									</th>
									<th scope="col" className="px-6 py-3">
										Order Id
									</th>
									<th scope="col" className="px-6 py-3">
										Creating date
									</th>
									<th scope="col" className="px-6 py-3">
										Customer info
									</th>
									<th scope="col" className="px-6 py-3">
										Total
									</th>
									<th scope="col" className="px-6 py-3">
										Quantity
									</th>
									<th scope="col" className="px-6 py-3">
										Payment status
									</th>
									<th scope="col" className="px-6 py-3">
										Delivery method
									</th>
									<th scope="col" className="px-6 py-3">
										Status
									</th>
									<th scope="col" className="px-6 py-3">
										<button>
											<PlusIcon />
										</button>
									</th>
									<th scope="col" className="px-6 py-3">
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className="bg-white border-b hover:bg-gray-50">
									<td className="w-4 p-4">
										<div className="flex items-center">
											<input
												id="checkbox-table-search-1"
												type="checkbox"
												className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
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
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
									>
										#1043
									</th>
									<td className="px-6 py-4">Today at 9:30 a.m.</td>
									<td className="px-6 py-4">Laptop</td>
									<td className="px-6 py-4">৳ 121.00</td>
									<td className="px-6 py-4">4 items</td>
									<td className="px-6 py-4">Paid</td>
									<td className="px-6 py-4">Paid</td>
									<td className="px-6 py-4">Processing</td>
									<td className="px-6 py-4">Processing</td>
									<td className="px-6 py-4">
										<a
											href="#"
											className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
										>
											Edit
										</a>
									</td>
								</tr>
								{/* <tr className="bg-white hover:bg-gray-50">
									<td className="w-4 p-4">
										<div className="flex items-center">
											<input
												id="checkbox-table-3"
												type="checkbox"
												className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
											/>
											<label htmlFor="checkbox-table-3" className="sr-only">
												checkbox
											</label>
										</div>
									</td>
									<th
										scope="row"
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
									>
										Apple iMac 27"
									</th>
									<td className="px-6 py-4">Silver</td>
									<td className="px-6 py-4">PC Desktop</td>
									<td className="px-6 py-4">$3999</td>
									<td className="px-6 py-4">
										<a
											href="#"
											className="font-medium text-blue-600 hover:underline"
										>
											Edit
										</a>
									</td>
								</tr> */}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</main>
	);
}
