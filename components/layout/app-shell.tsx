"use client";

import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { RightRail } from "./right-rail";

interface AppShellProps {
  children: React.ReactNode;
  showRightRail?: boolean;
}

export function AppShell({ children, showRightRail = false }: AppShellProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto scrollbar-thin bg-background">
          {children}
        </main>
      </div>
      {showRightRail && <RightRail />}
    </div>
  );
}
