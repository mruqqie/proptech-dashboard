"use client";

import { useState, useCallback } from "react";
import { NavIconButton } from "./NavIconButton";
import { NavTabs } from "./NavTabs";
import { BudgetingModal } from "./BudgetingModal";
import CalendarPanel from "./CalendarPanel";
import { UserMenu } from "./UserMenu";
import {
	BRAND_NAME,
	TOP_NAV_ICONS,
	ACTIVE_TAB_DEFAULT,
	MOCK_USER,
} from "@/constants/navbar.constants";
import type { NavAction } from "@/types/navbar.types";
import logo from "@/public/logo/Logo.svg";
import Image from "next/image";

export const Navbar = () => {
	const [activePanel, setActivePanel] = useState<NavAction>(null);
	const [activeTab, setActiveTab] = useState(ACTIVE_TAB_DEFAULT);

	const handleIconClick = useCallback((action: NavAction) => {
		setActivePanel((prev) => (prev === action ? null : action));
	}, []);

	const handleClose = useCallback(() => {
		setActivePanel(null);
	}, []);

	const handleTabChange = useCallback((tabId: string) => {
		setActiveTab(tabId);
	}, []);

	return (
		<>
			<header className="bg-[#105B48] h-16 flex items-center justify-between px-16 fixed top-0 left-0 right-0 z-50">
				<Image alt="Logo" src={logo} />

				<div className="flex items-center gap-6">
					{TOP_NAV_ICONS.map((navIcon) => (
						<div key={navIcon.id} className="relative">
							<NavIconButton
								icon={navIcon.icon}
								tooltip={navIcon.tooltip}
								isActive={activePanel === navIcon.action}
								onClick={() => handleIconClick(navIcon.action)}
							/>
							{navIcon.action === "calendar" &&
								activePanel === "calendar" && (
									<>
										<div className="absolute left-1/2 -translate-x-1/2 top-full z-51 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-10 border-b-[#161616]" />

										<CalendarPanel
											isOpen={activePanel === "calendar"}
											onClose={handleClose}
										/>
									</>
								)}
						</div>
					))}

					<UserMenu />
				</div>
			</header>

			<NavTabs activeTab={activeTab} onTabChange={handleTabChange} />
			<h2 className="font-semibold px-16 text-[20px]">
				Welcome, {MOCK_USER.firstName}
			</h2>
			<BudgetingModal
				isOpen={activePanel === "budgeting"}
				onClose={handleClose}
			/>
		</>
	);
};
