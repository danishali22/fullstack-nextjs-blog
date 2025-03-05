import LeftSidebar from "@/components/dashboard/left-sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex">
      <div className="flex">
        <LeftSidebar />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default DashboardLayout;
