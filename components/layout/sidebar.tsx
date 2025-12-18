"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Layers,
  Cpu,
  Network,
  FolderKanban,
  Database,
  Settings,
  User,
} from "lucide-react";

const sidebarItems = [
  { label: "Dashboard", href: "/overview", icon: LayoutDashboard },
  { label: "Deployments", href: "/deployments", icon: Layers },
  { label: "Workers", href: "/workers", icon: Cpu },
  { label: "AI Gateway", href: "/ai", icon: Network },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Storage", href: "/storage", icon: Database },
  { label: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-60 bg-surface-dark border-r border-border/50 flex flex-col z-40">
      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b border-border/50">
        <div className="relative">
          <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center shadow-cyan-glow">
            <div className="w-5 h-5 rounded-sm bg-background"></div>
          </div>
          <div className="absolute inset-0 bg-primary rounded-sm blur-md opacity-30"></div>
        </div>
        <span className="ml-3 font-bold text-lg gradient-text">DevOps</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto scrollbar-cosmic py-6 px-3">
        <ul className="space-y-2">
          {sidebarItems.map((item, index) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-sm transition-all duration-300 group",
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface-card/30"
                  )}
                >
                  {/* Active indicator - left cyan glow bar */}
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-indicator"
                      className="absolute left-0 top-2 bottom-2 w-1 bg-primary rounded-r-full cyan-glow"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <Icon className={cn(
                    "w-5 h-5 transition-colors",
                    isActive && "text-primary"
                  )} />
                  <span className="flex-1">{item.label}</span>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-cyan"
                    />
                  )}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-border/50">
        <div className="flex items-center gap-3 px-4 py-3 rounded-sm bg-surface-card/30 border border-border/50">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center">
            <User className="w-4 h-4 text-background" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-foreground truncate">Admin User</div>
            <div className="text-xs text-muted-foreground">admin@devops.io</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
