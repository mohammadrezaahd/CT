import {
  DashboardOutlined,
  PeopleOutlined,
  PersonOutlined,
  FitnessCenterOutlined,
  MessageOutlined,
  DescriptionOutlined,
} from "@mui/icons-material";

export const navigationItems = [
  {
    label: "Dashboard",
    icon: DashboardOutlined,
    route: "/dashboard/[role]/[id]",
  },
  {
    label: "Profile (view / edit)",
    icon: PersonOutlined,
    route: "/dashboard/[role]/[id]/profile",
  },
  {
    label: "Courses (manage / add new)",
    icon: FitnessCenterOutlined,
    route: "/dashboard/[role]/[id]/courses",
  },
  {
    label: "Trainees",
    icon: PeopleOutlined,
    route: "/dashboard/[role]/[id]/trainees",
  },
  {
    label: "Messages",
    icon: MessageOutlined,
    route: "/dashboard/[role]/[id]/messages",
  },
  {
    label: "Templates",
    icon: DescriptionOutlined,
    route: "/dashboard/[role]/[id]/templates",
  },
];
