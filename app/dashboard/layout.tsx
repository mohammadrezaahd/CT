import { MiniDrawer } from "@/components/layouts";
import { FC, ReactNode } from "react";

interface IDashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<IDashboardLayoutProps> = ({ children }) => {
  return <MiniDrawer>{children}</MiniDrawer>;
};

export default DashboardLayout;
