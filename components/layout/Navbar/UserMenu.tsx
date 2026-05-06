"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { MOCK_USER, USER_MENU_ITEMS } from "@/constants/navbar.constants";
import { useClickOutside } from "@/hooks/useClickOutside";

interface UserMenuProps {
	onAction?: (action: string) => void;
}

export const UserMenu = ({ onAction }: UserMenuProps) => {
	const [showTooltip, setShowTooltip] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);

  const containerRef = useClickOutside<HTMLDivElement>(() => {
    setShowDropdown(false);
  });
	const handleMouseEnter = useCallback(() => {
		if (!showDropdown) setShowTooltip(true);
	}, [showDropdown]);

	const handleMouseLeave = useCallback(() => {
		setShowTooltip(false);
	}, []);

	const handleAvatarClick = useCallback(() => {
		setShowTooltip(false);
		setShowDropdown((prev) => !prev);
	}, []);

	const handleMenuItemClick = useCallback(
		(action: string) => {
			setShowDropdown(false);
			onAction?.(action);
		},
		[onAction],
	);


	return (
		<div className="relative w-10 h-10" ref={containerRef}>
			<button
				type="button"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onClick={handleAvatarClick}
				className={`
      w-10 h-10 rounded-full flex items-center justify-center
      bg-white font-euclid
      text-[#105B48] border border-white text-[23px] font-medium
      transition-colors duration-150 cursor-pointer
    `}
				aria-label="User menu"
				aria-expanded={showDropdown}
			>
				{MOCK_USER.initials}
			</button>

			<span
				className={`pointer-events-none absolute inset-px rounded-full outline-[6px]  outline-white transition-opacity duration-700 ${showTooltip || showDropdown ? "opacity-100" : "opacity-0"}`}
			/>

			{showTooltip && !showDropdown && (
				<div className="absolute top-12 right-0 bg-gray-100 rounded-lg border border-gray-100 px-4 py-3 min-w-50 z-50">
					<p className="text-sm font-semibold text-gray-900">
						{MOCK_USER.firstName} {MOCK_USER.lastName}
					</p>
					<p className="text-xs text-gray-500 mt-0.5">
						{MOCK_USER.email}
					</p>
				</div>
			)}

			{showDropdown && (
				<div className="absolute top-12 right-0 bg-white rounded-xl shadow-2xl border border-gray-100 w-65 z-50 overflow-hidden">
					<div className="flex items-center gap-3 px-3 py-3 bg-[#f5f7fad9] mx-4 rounded-xl my-4 border border-gray-200">
						<div className="w-10 h-10 rounded-full flex bg-[#105B48] text-white items-center justify-center shrink-0 text-[23px] font-medium">
							{MOCK_USER.initials}
						</div>
						<div className="min-w-0">
							<p className="text-sm font-bold text-gray-900 truncate">
								{MOCK_USER.firstName} {MOCK_USER.lastName}
							</p>
							<p className="text-xs text-gray-500 truncate">
								{MOCK_USER.email}
							</p>
						</div>
					</div>

					<div className="py-1.5 px-4">
						{USER_MENU_ITEMS.map((item) => {
							const Icon = item.icon;
							return (
								<button
									key={item.id}
									type="button"
									onClick={() =>
										handleMenuItemClick(item.action)
									}
									className={`
                    w-full flex items-center gap-3 py-4 border-b border-[#eeebebe9]
                    text-sm transition-colors duration-100 cursor-pointer
                    ${
						item.variant === "danger"
							? "text-red-500 hover:bg-red-50"
							: "text-gray-700 hover:bg-gray-50"
					}
                  `}
								>
									<Icon
										className={`w-4 h-4 shrink-0 ${
											item.variant === "danger"
												? "text-red-400"
												: "text-gray-500"
										}`}
										strokeWidth={1.75}
									/>
									{item.label}
								</button>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
};
