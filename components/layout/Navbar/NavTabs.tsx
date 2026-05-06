"use client";

import { NAV_TABS } from "@/constants/navbar.constants";

interface NavTabsProps {
	activeTab: string;
	onTabChange: (tabId: string) => void;
}

export const NavTabs = ({ activeTab, onTabChange }: NavTabsProps) => {
	return (
		<nav className="bg-white border-b border-gray-200 px-16 pb-3">
			<ul
				className="flex items-center justify-between gap-1"
				role="tablist"
			>
				{NAV_TABS.map((tab) => {
					const Icon = tab.icon;
					const isActive = activeTab === tab.id;

					return (
						<li key={tab.id} role="presentation">
							<button
								type="button"
								role="tab"
								aria-selected={isActive}
								disabled={tab.id !== "dashboard"}
								onClick={() => onTabChange(tab.id)}
								className={`
                  flex items-center gap-2 px-8 py-3.5 text-sm font-medium
                  rounded-lg my-1 transition-all duration-150 cursor-pointer
                  ${
						isActive
							? "bg-[#176D5826] font-semibold text-[#176D58]"
							: "text-[#3D3D3D] hover:text-gray-900 hover:bg-gray-50"
					}
                `}
							>
								<Icon
									className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-500"}`}
									strokeWidth={1.75}
								/>
								{tab.label}
							</button>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
