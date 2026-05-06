"use client";

import { useCallback, useEffect } from "react";
import {
	BUDGETING_FEATURES,
	CREATE_BUDGET_LABEL,
} from "@/constants/navbar.constants";
import { useClickOutside } from "@/hooks/useClickOutside";
import Image from "next/image";
import budgetingMedia from "@/public/images/budgeting-media.svg";

interface BudgetingModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const BudgetingModal = ({ isOpen, onClose }: BudgetingModalProps) => {
	const modalRef = useClickOutside<HTMLDivElement>(onClose);

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		},
		[onClose],
	);

	useEffect(() => {
		if (isOpen) {
			document.addEventListener("keydown", handleKeyDown);
		}
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, handleKeyDown]);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
			<div
				ref={modalRef}
				className="w-109.5 rounded-2xl overflow-hidden shadow-2xl"
			>
				<Image src={budgetingMedia} alt="Budgeting Media" />
				<div className="bg-white px-10 pt-6 pb-6">
					<div className="space-y-5">
						{BUDGETING_FEATURES.map((feature) => {
							const Icon = feature.icon;
							return (
								<div
									key={feature.id}
									className="flex items-start gap-4"
								>
									<div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-lg bg-gray-100 mt-0.5">
										<Icon
											className="w-4 h-4 text-gray-600"
											strokeWidth={1.75}
										/>
									</div>
									<div>
										<p className="text-sm font-semibold text-gray-900 leading-snug">
											{feature.title}
										</p>
										<p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
											{feature.description}
										</p>
									</div>
								</div>
							);
						})}
					</div>

					<button
						type="button"
						className="
              w-full mt-6 py-3.5 rounded-full
              bg-gray-900 hover:bg-gray-800
              text-white text-sm font-semibold
              transition-colors duration-150 cursor-pointer
            "
					>
						{CREATE_BUDGET_LABEL}
					</button>
				</div>
			</div>
		</div>
	);
};
