import Image from "next/image";
import teams from "@/public/icons/teams.svg";
import chart from "@/public/icons/chart.svg";
import setting from "@/public/icons/setting.svg";
import trendUp from "@/public/icons/trend-up.svg";
import HomeActive from "@/public/icons/home-active.svg";
import article from "@/public/icons/article.svg";
import toolbox from "@/public/icons/toolbox.svg";
import profile from "@/public/icons/profile.svg";
import taskSquare from "@/public/icons/task-square.svg";
import { LockKeyhole, MapPinnedIcon, MessageSquareDot, PieChart } from "lucide-react";

export const TeamsIcon = () => (
	<Image src={teams} alt="Teams icon" width={16} height={16} />
);
export const FeedbackIcon = () => (
	<MessageSquareDot fill="#000" color="#fff" width={16} height={16} />
);
export const GeoBucketIcon = () => (
	<MapPinnedIcon fill="#000" color="#fff" width={16} height={16} />
);
export const SnaggingIcon = () => (
	<PieChart fill="#000" color="#fff" width={16} height={16} />
);
export const LockIcon = () => (
	<LockKeyhole fill="#000" color="#fff" width={16} height={16} />
);
export const chartIcon = () => (
	<Image src={chart} alt="chart icon" width={16} height={16} />
);
export const SettingIcon = () => (
	<Image src={setting} alt="lock icon" width={16} height={16} />
);
export const TrendUpIcon = () => (
	<Image src={trendUp} alt="trend icon" width={16} height={16} />
);
export const HomeActiveIcon = () => (
	<Image src={HomeActive} alt="Home icon" width={16} height={16} />
);
export const ToolBoxIcon = () => (
	<Image src={toolbox} alt="toolbox icon" width={16} height={16} />
);
export const ProfileIcon = () => (
	<Image src={profile} alt="profile icon" width={16} height={16} />
);
export const ArticleIcon = () => (
	<Image src={article} alt="article icon" width={16} height={16} />
);
export const ScrollIcon = () => (
	<Image src={trendUp} alt="trend icon" width={16} height={16} />
);
export const TaskSquareIcon = () => (
	<Image src={taskSquare} alt="task square icon" width={16} height={16} />
);

