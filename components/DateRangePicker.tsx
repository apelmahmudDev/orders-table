import { useState } from "react";

interface DateRangePickerProps {
	onDateChange: (startDate: string, endDate: string) => void;
}

const DateRangePicker = ({ onDateChange }: DateRangePickerProps) => {
	const [startDate, setStartDate] = useState<string>("");
	const [endDate, setEndDate] = useState<string>("");

	const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newStartDate = e.target.value;
		setStartDate(newStartDate);
		onDateChange(newStartDate, endDate);
	};

	const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newEndDate = e.target.value;
		setEndDate(newEndDate);
		onDateChange(startDate, newEndDate);
	};

	return (
		<div className="flex flex-col sm:flex-row items-center space-x-4 pb-6">
			<input
				type="date"
				value={startDate}
				onChange={handleStartDateChange}
				className="w-full px-4 py-2 border border-gray-light rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
				placeholder="Start Date"
			/>
			<span className="text-gray-500">to</span>
			<input
				type="date"
				value={endDate}
				onChange={handleEndDateChange}
				className="w-full px-4 py-2 border border-gray-light rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
				placeholder="End Date"
			/>
		</div>
	);
};

export default DateRangePicker;
