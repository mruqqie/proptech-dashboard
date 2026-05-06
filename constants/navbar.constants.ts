import {
	LogOut,
  ScrollIcon,
} from "lucide-react";

import type {
	NavTab,
	TopNavIcon,
	UserMenuItemEntry,
	BudgetingFeature,
	UserProfile,
} from "@/types/navbar.types";
import Budgeting from "@/components/icons/Budgeting";
import Calendar from "@/components/icons/Calendar";
import SearchActivity from "@/components/icons/SearchActivity";
import PayoutCenter from "@/components/icons/PayoutCenter";
import Marketplace from "@/components/icons/Marketplace";
import {
	ArticleIcon,
	chartIcon,
	FeedbackIcon,
	GeoBucketIcon,
	HomeActiveIcon,
	LockIcon,
	ProfileIcon,
	SettingIcon,
	SnaggingIcon,
	TaskSquareIcon,
	TeamsIcon,
	ToolBoxIcon,
	TrendUpIcon,
} from "@/components/icons/NavImageIcons";

export const BRAND_NAME = "Expert Listing";

export const NAV_TABS: NavTab[] = [
	{ id: "dashboard", label: "Dashboard", icon: HomeActiveIcon, href: "/" },
	{ id: "listings", label: "Listings", icon: ToolBoxIcon, href: "/listings" },
	{ id: "users", label: "Users", icon: ProfileIcon, href: "/users" },
	{ id: "request", label: "Request", icon: ArticleIcon, href: "/request" },
	{
		id: "applications",
		label: "Applications",
		icon: ScrollIcon,
		href: "/applications",
	},
	{ id: "tasks", label: "Tasks", icon: TaskSquareIcon, href: "/tasks" },
];

export const TOP_NAV_ICONS: TopNavIcon[] = [
	{
		id: "budgeting",
		tooltip: "Budgeting",
		icon: Budgeting,
		action: "budgeting",
	},
	{
		id: "calendar",
		tooltip: "Calendar",
		icon: Calendar,
		action: "calendar",
	},
	{
		id: "search-activity",
		tooltip: "Search Activity",
		icon: SearchActivity,
		action: "search",
	},
	{ id: "wallet", tooltip: "Wallet", icon: PayoutCenter, action: "payout" },
	{
		id: "grid",
		tooltip: "Overview",
		icon: Marketplace,
		action: "marketplace",
	},
];

export const BUDGETING_FEATURES: BudgetingFeature[] = [
	{
		id: "annual-budgets",
		title: "Set up annual budgets by account category",
		description:
			"Allocate funds across income and expense lines with full visibility.",
		icon: SettingIcon,
	},
	{
		id: "track-actuals",
		title: "Track actuals vs budget in real time",
		description:
			"See how your community is performing against plan, month by month.",
		icon: TrendUpIcon,
	},
	{
		id: "adjust-forecast",
		title: "Adjust figures and forecast with ease",
		description:
			"Edit amounts, apply percentage changes, or roll forward last year's data—all in one place.",
		icon: chartIcon,
	},
];

export const USER_MENU_ITEMS: UserMenuItemEntry[] = [
	{ id: "teams", label: "Teams", icon: TeamsIcon, action: "teams" },
	{
		id: "snagging",
		label: "Snagging",
		icon: SnaggingIcon,
		action: "snagging",
	},
	{
		id: "feedback",
		label: "Feedback",
		icon: FeedbackIcon,
		action: "feedback",
	},
	{
		id: "geo-bucket",
		label: "Geo-Bucket",
		icon: GeoBucketIcon,
		action: "geo-bucket",
	},
	{
		id: "change-password",
		label: "Change password",
		icon: LockIcon,
		action: "change-password",
	},
	{
		id: "logout",
		label: "Logout",
		icon: LogOut,
		variant: "danger",
		action: "logout",
	},
];

export const MOCK_USER: UserProfile = {
	id: "user-001",
	firstName: "Dylan",
	lastName: "Frank",
	email: "dylan96@mail.com",
	initials: "D",
};

export const MOCK_WELCOME_NAME = "Ahmed";

export const CALENDAR_DAYS_OF_WEEK = [
	"SUN",
	"MON",
	"TUE",
	"WED",
	"THU",
	"FRI",
	"SAT",
] as const;

export const CREATE_BUDGET_LABEL = "Create Budget";
export const ACTIVE_TAB_DEFAULT = "dashboard";
