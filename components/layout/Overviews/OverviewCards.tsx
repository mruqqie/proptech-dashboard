import { ChevronRight } from "lucide-react";
import {
	LISTINGS_OVERVIEW,
	USERS_OVERVIEW,
} from "@/constants/overviews.constants";
import BlueHome from "@/components/icons/BlueHome";
import BlueUsers from "@/components/icons/BlueUsers";

const OverviewCard = ({
	title,
	icon,
	stats,
}: {
	title: string;
	icon: React.ReactNode;
	stats: { label: string; value: string }[];
}) => (
	<div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 flex flex-col gap-5">
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-2.5">
				<div className="text-[#4F46E5]">{icon}</div>
				<p className="text-sm font-medium text-[#292929]">{title}</p>
			</div>
			<button className="flex items-center gap-0.5 text-xs font-medium text-[#4F46E5] hover:opacity-80 transition-opacity">
				View all <ChevronRight size={15} />
			</button>
		</div>

		<div className="h-px bg-[#F3F4F6]" />

		<div className="flex justify-between gap-8">
			{stats.map((s) => (
				<div key={s.label} className="flex flex-col gap-1">
					<p className="text-xs text-[#525252]">{s.label}</p>
					<p className="text-2xl font-bold text-[#141414]">
						{s.value}
					</p>
				</div>
			))}
		</div>
	</div>
);

const OverviewCards = () => (
	<div className="flex flex-col gap-4">
		<OverviewCard
			title={LISTINGS_OVERVIEW.title}
			icon={<BlueHome />}
			stats={LISTINGS_OVERVIEW.stats}
		/>
		<OverviewCard
			title={USERS_OVERVIEW.title}
			icon={<BlueUsers />}
			stats={USERS_OVERVIEW.stats}
		/>
	</div>
);

export default OverviewCards;
