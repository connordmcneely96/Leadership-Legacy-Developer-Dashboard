"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Layers, Database, Code, Settings } from "lucide-react";

const navItems = [
  { label: "Overview", href: "/discover", icon: LayoutDashboard },
  { label: "Apps", href: "/discover/apps", icon: Layers },
  { label: "Data", href: "/discover/data", icon: Database },
  { label: "Tools", href: "/discover/tools", icon: Code },
  { label: "Settings", href: "/discover/settings", icon: Settings },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-[hsl(var(--surface-1))] border-t border-border flex items-center justify-around px-4 md:hidden z-50">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-1 py-2 px-3 rounded-sm transition-colors min-w-[64px]",
              isActive
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{item.label}</span>
            {isActive && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-primary"></div>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
