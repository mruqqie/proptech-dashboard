"use client";

import { useState } from "react";
import { X, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { FilledArrowLeft, FilledArrowRight } from "@/components/icons/Arrows";

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const CalendarPanel = ({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) => {
	const today = new Date();
	const [current, setCurrent] = useState(
		new Date(today.getFullYear(), today.getMonth(), 1),
	);

	const year = current.getFullYear();
	const month = current.getMonth();
	const monthName = current.toLocaleString("default", { month: "long" });

	const firstDayOfMonth = new Date(year, month, 1).getDay();
	const daysInMonth = new Date(year, month + 1, 0).getDate();
	const daysInPrevMonth = new Date(year, month, 0).getDate();

	const nextMonthAbbr = new Date(year, month + 1, 1)
		.toLocaleString("default", { month: "short" })
		.toUpperCase();
	const prevMonthAbbr = new Date(year, month - 1, 1)
		.toLocaleString("default", { month: "short" })
		.toUpperCase();

	const prevMonth = () => setCurrent(new Date(year, month - 1, 1));
	const nextMonth = () => setCurrent(new Date(year, month + 1, 1));

	const cells: { day: number; type: "prev" | "current" | "next" }[] = [];
	for (let i = firstDayOfMonth - 1; i >= 0; i--)
		cells.push({ day: daysInPrevMonth - i, type: "prev" });
	for (let d = 1; d <= daysInMonth; d++)
		cells.push({ day: d, type: "current" });
	const remaining = 42 - cells.length;
	for (let d = 1; d <= remaining; d++) cells.push({ day: d, type: "next" });

	const isToday = (day: number, type: string) =>
		type === "current" &&
		day === today.getDate() &&
		month === today.getMonth() &&
		year === today.getFullYear();

	const weeks: (typeof cells)[] = [];
	for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

	const getLabel = (cell: { day: number; type: string }) => {
		if (cell.type === "next" && cell.day === 1) return `${nextMonthAbbr} 1`;
		if (cell.type === "prev" && cell.day === 1) return `${prevMonthAbbr} 1`;
		return `${cell.day}`;
	};

	if (!isOpen) return null;

	return (
		<>
			<div className="fixed inset-0 z-40" onClick={onClose} />
			<div className="fixed right-0 top-15 bottom-0 z-50 w-105 flex flex-col overflow-y-auto bg-[#000000]">
				<div className="flex bg-[#1f1e1ed6] items-center justify-between px-6 py-3 shrink-0">
					<div className="flex items-center gap-4 shrink-0 ">
						<button
							onClick={onClose}
							className="text-white/60 cursor-pointer hover:text-white transition-colors"
						>
							<ArrowLeft size={20} />
						</button>
						<span className="text-white font-semibold text-sm">
							Calendar
						</span>
					</div>
					<button
						onClick={onClose}
						className="text-white/60 cursor-pointer hover:text-white transition-colors"
					>
						<X size={20} />
					</button>
				</div>

				<div className="flex justify-center items-center gap-10 px-10 py-2 shrink-0">
					<button
						onClick={prevMonth}
						className="text-white/50 hover:text-white transition-colors"
					>
						<FilledArrowLeft />
					</button>
					<span className="text-white font-semibold text-sm">
						{monthName} {year}
					</span>
					<button
						onClick={nextMonth}
						className="text-white/50 hover:text-white transition-colors"
					>
						<FilledArrowRight />
					</button>
				</div>

				<div className="flex-1 mt-3">
					<div className="grid grid-cols-7 border-t border-b border-white/10">
						{DAYS.map((d, i) => (
							<div
								key={d}
								className={`px-3 text-[6px] font-medium text-white/65 tracking-widest py-2 ${i < 6 ? "border-r border-white/10" : ""}`}
							>
								{d}
							</div>
						))}
					</div>

					{weeks.map((week, wi) => (
						<div
							key={wi}
							className="grid grid-cols-7 border-b border-white/10 min-h-20"
						>
							{week.map((cell, ci) => {
								const today_ = isToday(cell.day, cell.type);
								const isCurrentMonth = cell.type === "current";

								return (
									<div
										key={ci}
										className={`flex flex-col pt-2 px-2 ${ci < 6 ? "border-r border-white/10" : ""}`}
									>
										<button
											className={`w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-medium transition-colors self-start ${
												today_
													? "bg-[#4C4CFF] text-white"
													: isCurrentMonth
														? "text-white/80 hover:bg-white/10"
														: "text-white/25"
											}`}
										>
											{getLabel(cell)}
										</button>
									</div>
								);
							})}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default CalendarPanel;
