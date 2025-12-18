"use client";

import { Bell, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="h-16 border-b border-border bg-background flex items-center justify-between px-6">
      {/* Left - Usage chips */}
      <div className="flex items-center gap-2">
        <Badge variant="default" className="text-[10px] px-2 py-1">
          $0.05
        </Badge>
        <Badge variant="default" className="text-[10px] px-2 py-1">
          E4G
        </Badge>
        <Badge variant="default" className="text-[10px] px-2 py-1">
          T86
        </Badge>
      </div>

      {/* Right - Icon cluster */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-danger rounded-full"></span>
        </Button>
        <Button variant="ghost" size="icon">
          <User className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
}
