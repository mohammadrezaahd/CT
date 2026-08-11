import {
  DashboardOutlined,
  PeopleOutlined,
  PersonOutlined,
  FitnessCenterOutlined,
  MessageOutlined,
  DescriptionOutlined,
} from "@mui/icons-material";

export const dashboardRouteParams = {
  role: "coach",
  id: "jsdsflinfvb",
} as const;

export const dashboardBaseRoute = `/dashboard/${dashboardRouteParams.role}/${dashboardRouteParams.id}`;

export const navigationItems = [
  {
    label: "Dashboard",
    icon: DashboardOutlined,
    route: dashboardBaseRoute,
  },
  {
    label: "Profile",
    icon: PersonOutlined,
    route: `${dashboardBaseRoute}/profile`,
  },
  {
    label: "Courses",
    icon: FitnessCenterOutlined,
    route: `${dashboardBaseRoute}/courses`,
  },
  {
    label: "Trainees",
    icon: PeopleOutlined,
    route: `${dashboardBaseRoute}/trainees`,
  },
  {
    label: "Messages",
    icon: MessageOutlined,
    route: `${dashboardBaseRoute}/messages`,
  },
  {
    label: "Templates",
    icon: DescriptionOutlined,
    route: `${dashboardBaseRoute}/templates`,
  },
];
