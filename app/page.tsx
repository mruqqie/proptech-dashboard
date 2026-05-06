import ChatIcon from "@/components/icons/ChatIcon";
import ListingCarousels from "@/components/layout/Listings/ListingCarousels";
import { Navbar } from "@/components/layout/Navbar";
import Overviews from "@/components/layout/Overviews/Overviews";

export default function Home() {
	return (
		<div className="flex flex-col gap-3">
			<Navbar />
			<Overviews />
			<ListingCarousels />
			<button className="fixed bottom-20 right-20 z-50 p-4 bg-[#242526] rounded-full flex items-center justify-center shadow-lg hover:bg-[#242526/50] transition-colors cursor-pointer">
				<ChatIcon/>
			</button>
		</div>
	);
}
