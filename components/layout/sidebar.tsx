"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Layers,
  Cpu,
  Network,
  FolderKanban,
  Database,
  Settings,
  HelpCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const sidebarItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "App Library", href: "/overview", icon: Layers },
  { label: "Workers", href: "/workers", icon: Cpu },
  { label: "AI Gateway", href: "/ai-gateway", icon: Network },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Storage", href: "/storage", icon: Database, badge: "NEW" },
  { label: "Settings", href: "/settings", icon: Settings },
  { label: "Support", href: "/support", icon: HelpCircle },
];

export function Sidebar() {
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
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative flex items-center gap-3 px-3 py-2 text-sm rounded-sm transition-colors",
                    isActive
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-[hsl(var(--surface-2))]"
                  )}
                >
                  {/* Active indicator - left glow bar */}
                  {isActive && (
                    <div className="absolute left-0 top-1 bottom-1 w-0.5 bg-primary rounded-r-full shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
                  )}
                  <Icon className="w-4 h-4" />
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <Badge variant="primary" className="text-[10px] px-1.5 py-0.5">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom button */}
      <div className="p-4 border-t border-border">
        <Button
          variant="secondary"
          className="w-full justify-start gap-2 text-xs"
          size="sm"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          Meauxstack OS
        </Button>
      </div>
    </aside>
  );
}
