export type TimeFilter = "1W" | "1M" | "1Y";

export const TIME_FILTERS: { label: string; value: TimeFilter }[] = [
  { label: "1 Week", value: "1W" },
  { label: "1 Month", value: "1M" },
  { label: "1 Year", value: "1Y" },
];

export const CHART_DATA = [
  { month: "Jan", inflow: 40, gmv: 28, revenue: 10 },
  { month: "Feb", inflow: 18, gmv: 12, revenue: 8 },
  { month: "Mar", inflow: 22, gmv: 15, revenue: 9 },
  { month: "Apr", inflow: 16, gmv: 26, revenue: 7 },
  { month: "May", inflow: 14, gmv: 10, revenue: 6 },
  { month: "Jun", inflow: 48, gmv: 38, revenue: 12 },
  { month: "Jul", inflow: 36, gmv: 30, revenue: 22 },
  { month: "Aug", inflow: 24, gmv: 22, revenue: 18 },
  { month: "Sep", inflow: 32, gmv: 10, revenue: 5 },
];

export const STAT_CARDS = [
  {
    id: "total-inflow",
    label: "Total Inflow",
    value: "₦120,000,000.00",
    change: 2.5,
    positive: true,
    color: "#4545FE",
  },
  {
    id: "mrr",
    label: "MRR",
    value: "₦50,000,000.00",
    change: 2.5,
    positive: true,
		color: "#12B76A",
  },
  {
		id: "commission",
    label: "Commission Revenue",
    value: "₦200,000,000.00",
    change: 0.5,
    positive: true,
		color: "#14B8A6",
  },
  {
    id: "gmv",
    label: "GMV",
    value: "₦100,000,000.00",
    change: 0.5,
    positive: false,
    color: "#F04438",
  },
];

export const LISTINGS_OVERVIEW = {
  title: "Listings Overview",
  stats: [
    { label: "Total", value: "1.8k" },
    { label: "Active", value: "80" },
    { label: "Archived", value: "1k" },
  ],
};

export const USERS_OVERVIEW = {
  title: "Users Overview",
  stats: [
    { label: "Total", value: "20.7k" },
    { label: "Riders", value: "8.5k" },
    { label: "Subscribers", value: "7.5k" },
  ],
};