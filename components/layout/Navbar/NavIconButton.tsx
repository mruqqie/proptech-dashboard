"use client";

import { useState, useCallback } from "react";
import { NavTooltip } from "./NavTooltip";

interface NavIconButtonProps {
	icon: React.ComponentType;
	tooltip: string;
	isActive?: boolean;
	onClick: () => void;
}

export const NavIconButton = ({
	icon: Icon,
	tooltip,
	isActive = false,
	onClick,
}: NavIconButtonProps) => {
	const [showTooltip, setShowTooltip] = useState(false);

	const handleMouseEnter = useCallback(() => setShowTooltip(true), []);
	const handleMouseLeave = useCallback(() => setShowTooltip(false), []);

	return (
		<div className="relative">
			<button
				type="button"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onClick={onClick}
				className={`
          w-10 h-10 flex items-center justify-center rounded-full
          transition-colors duration-150 cursor-pointer
        `}
				aria-label={tooltip}
			>
				<Icon />
			</button>
			<NavTooltip label={tooltip} visible={showTooltip} />
		</div>
	);
};
