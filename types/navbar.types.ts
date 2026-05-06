import type { LucideIcon } from "lucide-react";

export interface NavTab {
	id: string;
	label: string;
	icon: LucideIcon | React.ComponentType<any>;
	href: string;
}

export interface TopNavIcon {
	id: string;
	tooltip: string;
	icon: React.ComponentType;
	action: "budgeting" | "calendar" | "search" | "payout" | "marketplace";
}

export interface UserMenuItemEntry {
	id: string;
	label: string;
	icon: LucideIcon | React.ComponentType<any>;
	variant?: "default" | "danger";
	action: string;
}

export interface BudgetingFeature {
	id: string;
	title: string;
	description: string;
	icon: LucideIcon | React.ComponentType<any>;
}

export interface UserProfile {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	initials: string;
}

export type NavAction =
	| "budgeting"
	| "calendar"
	| "search"
	| "payout"
	| "marketplace"
	| null;
