import OverviewCards from "./OverviewCards";
import SalesOverview from "./SalesOverview";

const Overviews = () => {
	return (
		<div className="grid gap-4 px-16 grid-cols-3">
			<div className="col-span-2">
				<SalesOverview />
			</div>
			<div className="col-span-1"><OverviewCards/></div>
		</div>
	);
};

export default Overviews;
