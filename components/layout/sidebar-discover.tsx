"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Layers,
  Database,
  Code,
  HardDrive,
  Key,
  Table as TableIcon,
  ListOrdered,
  Workflow,
  Network,
  Settings,
} from "lucide-react";

const sidebarItems = [
  { label: "Overview", href: "/discover", icon: LayoutDashboard },
  { label: "Apps", href: "/discover", icon: Layers },
  { label: "SQL Editor", href: "/discover/sql", icon: Code },
  { label: "Dev Tools", href: "/discover/dev", icon: Database },
  { label: "R2 Storage", href: "/discover/r2", icon: HardDrive },
  { label: "KV", href: "/discover/kv", icon: Key },
  { label: "D1", href: "/discover/d1", icon: TableIcon },
  { label: "Queues", href: "/discover/queues", icon: ListOrdered },
  { label: "Workflows", href: "/discover/workflows", icon: Workflow },
  { label: "Vectorize", href: "/discover/vectorize", icon: Network },
  { label: "Settings", href: "/discover/settings", icon: Settings },
];

export function SidebarDiscover() {
  const pathname = usePathname();

  return (
    <aside className="w-60 h-screen bg-[hsl(var(--surface-1))] border-r border-border flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-4 border-b border-border">
        <div className="w-8 h-8 rounded-sm bg-primary/20 border border-primary/30 flex items-center justify-center">
          <div className="w-4 h-4 rounded-sm bg-primary"></div>
        </div>
        <span className="ml-3 font-semibold text-foreground">Dashboard</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto scrollbar-thin py-4">
        <ul className="space-y-1 px-2">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative flex items-center gap-3 px-3 py-2 text-sm rounded-sm transition-colors",
                    isActive
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-[hsl(var(--surface-2))]"
                  )}
                >
                  {isActive && (
                    <div className="absolute left-0 top-1 bottom-1 w-0.5 bg-primary rounded-r-full shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
                  )}
                  <Icon className="w-4 h-4" />
                  <span className="flex-1">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
