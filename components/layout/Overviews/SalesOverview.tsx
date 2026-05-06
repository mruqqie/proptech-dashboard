"use client";

import { useState } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	ResponsiveContainer,
	CartesianGrid,
} from "recharts";
import {
	ChevronLeft,
	ChevronRight,
	ArrowBigUp,
	ArrowBigDown,
} from "lucide-react";
import {
	CHART_DATA,
	STAT_CARDS,
	TIME_FILTERS,
	TimeFilter,
} from "@/constants/overviews.constants";

const StatCard = ({
	label,
	value,
	change,
	positive,
	color,
}: {
	label: string;
	value: string;
	change: number;
	positive: boolean;
	color: string;
}) => (
	<div className="rounded-2xl border border-[#E5E7EB] bg-white px-5 py-4 flex flex-col gap-2">
		<p className="text-lg font-bold" style={{ color }}>
			{value}
		</p>
		<div className="flex items-center gap-2">
			<p className="text-[10px] font-medium text-[#3D3D3D]">{label}</p>
			<div
				className={`flex items-center gap-1 text-[10px] rounded-full px-1.5 py-0.5 ${
					positive
						? "text-[#12B76A]"
						: "text-[#F04438]"
				}`}
			>
				<div
					className={`flex items-center gap-0.5 font-semibold rounded-full p-1 ${
						positive
							? "bg-[#12B76A] text-white"
							: "bg-[#F04438] text-white"
					}`}
				>
					{positive ? (
						<ArrowBigUp fill="#fff" size={8} />
					) : (
						<ArrowBigDown fill="#fff" size={8} />
					)}
				</div>
				{change}%
			</div>
		</div>
	</div>
);

const formatY = (v: number) => {
	if (v >= 1000) return `${v / 1000}b`;
	if (v >= 1) return `${v}m`;
	return `${v}`;
};

const SalesOverview = () => {
	const [activeFilter, setActiveFilter] = useState<TimeFilter>("1Y");

	return (
		<div className="rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 flex flex-col gap-3">
			<div className="flex items-start justify-between">
				<div className="flex flex-col gap-0.5">
					<h2 className="text-[20px] font-bold text-[#191919]">
						Sales Overview
					</h2>
					<p className="text-xs text-[#606060]">
						Showing overview Jan 2022 - Sep 2022
					</p>
				</div>
				<button className="rounded-full border border-[#D6D6D6] px-5 py-2 text-xs font-medium text-[#191919] hover:bg-[#F9FAFB] transition-colors">
					View Transactions
				</button>
			</div>

			<div className="flex items-center justify-end gap-1">
				{TIME_FILTERS.map((f) => (
					<button
						key={f.value}
						onClick={() => setActiveFilter(f.value)}
						className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
							activeFilter === f.value
								? "bg-[#F5F5F5] text-[#3D3D3D] font-semibold"
								: "text-[#3D3D3D] hover:text-[#111827]"
						}`}
					>
						{f.label}
					</button>
				))}
			</div>

			<div className="flex gap-4 items-stretch">
				<div className="flex-1 relative flex items-center">
					<button className="absolute -left-2 z-10 bg-white border border-[#E5E7EB] rounded-full p-1 shadow-sm hover:bg-[#F9FAFB] transition-colors">
						<ChevronLeft size={14} className="text-[#6B7280]" />
					</button>

					<ResponsiveContainer width="100%" height={180}>
						<BarChart
							data={CHART_DATA}
							barCategoryGap="30%"
							barGap={2}
							margin={{ top: 8, right: 8, left: -10, bottom: 0 }}
						>
							<CartesianGrid vertical={false} stroke="#F3F4F6" />
							<XAxis
								dataKey="month"
								axisLine={false}
								tickLine={false}
								tick={{ fontSize: 11, fill: "#9CA3AF" }}
							/>
							<YAxis
								tickFormatter={formatY}
								axisLine={false}
								tickLine={false}
								tick={{ fontSize: 11, fill: "#9CA3AF" }}
							/>
							<Bar
								dataKey="inflow"
								fill="#3B5BDB"
								radius={[2, 2, 0, 0]}
								maxBarSize={10}
							/>
							<Bar
								dataKey="gmv"
								fill="#16A34A"
								radius={[2, 2, 0, 0]}
								maxBarSize={10}
							/>
							<Bar
								dataKey="revenue"
								fill="#DC2626"
								radius={[2, 2, 0, 0]}
								maxBarSize={10}
							/>
						</BarChart>
					</ResponsiveContainer>

					<button className="absolute -right-2 z-10 bg-white border border-[#E5E7EB] rounded-full p-1 shadow-sm hover:bg-[#F9FAFB] transition-colors">
						<ChevronRight size={14} className="text-[#6B7280]" />
					</button>
				</div>

				<div className="grid grid-cols-2 gap-3 w-95 shrink-0">
					{STAT_CARDS.map((card) => (
						<StatCard key={card.id} {...card} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SalesOverview;
