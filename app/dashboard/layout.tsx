import { DashboardLayout } from "@/components/layouts";
import { FC, ReactNode } from "react";

interface IDashboardLayoutProps {
  children: ReactNode;
}

const Layout: FC<IDashboardLayoutProps> = ({ children }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Layout;
