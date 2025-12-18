"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Activity } from "lucide-react";

interface Session {
  id: string;
  name: string;
  status: "active" | "idle";
  duration: string;
}

interface RightRailProps {
  sessions?: Session[];
  onQuickAction?: (action: string) => void;
}

const defaultSessions: Session[] = [
  { id: "1", name: "Production", status: "active", duration: "2h 14m" },
  { id: "2", name: "Staging", status: "idle", duration: "45m" },
  { id: "3", name: "Development", status: "active", duration: "1h 32m" },
  { id: "4", name: "Testing", status: "idle", duration: "12m" },
];

export function RightRail({ sessions = defaultSessions, onQuickAction }: RightRailProps) {
  return (
    <aside className="w-72 h-screen bg-[hsl(var(--surface-1))] border-l border-border overflow-y-auto scrollbar-thin">
      <div className="p-6 space-y-6">
        {/* Active Sessions */}
        <section>
          <h3 className="text-sm font-semibold text-foreground mb-4">Active Sessions</h3>
          <div className="space-y-2">
            {sessions.map((session) => (
              <div
                key={session.id}
                className="p-3 rounded-sm bg-[hsl(var(--surface-2))] border border-border"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Activity className="w-3 h-3 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {session.name}
                    </span>
                  </div>
                  <Badge
                    variant={session.status === "active" ? "primary" : "default"}
                    className="text-[10px] px-1.5 py-0.5"
                  >
                    {session.status.toUpperCase()}
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground">{session.duration}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h3 className="text-sm font-semibold text-foreground mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <Button
              variant="primary"
              className="w-full justify-start text-sm"
              size="sm"
              onClick={() => onQuickAction?.("open-flagship")}
            >
              Open flagship build
            </Button>
            <Button
              variant="secondary"
              className="w-full justify-start text-sm"
              size="sm"
              asChild
            >
              <Link href="/overview/deploy/new">Deploy new build</Link>
            </Button>
            <Button
              variant="secondary"
              className="w-full justify-start text-sm"
              size="sm"
              onClick={() => onQuickAction?.("restart-worker")}
            >
              Restart worker
            </Button>
            <Button
              variant="secondary"
              className="w-full justify-start text-sm"
              size="sm"
              onClick={() => onQuickAction?.("build-logs")}
            >
              Open build logs
            </Button>
          </div>
        </section>
      </div>
    </aside>
  );
}
