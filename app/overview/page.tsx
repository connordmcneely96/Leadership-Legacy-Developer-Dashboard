"use client";

import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/data-table";
import { Activity, Clock, Tag, CheckCircle2, XCircle } from "lucide-react";

const builds = [
  {
    id: "build-001",
    version: "v2.3.1",
    status: "Succeeded",
    timestamp: "2024-01-15 14:32",
    duration: "2m 14s",
  },
  {
    id: "build-002",
    version: "v2.3.0",
    status: "Succeeded",
    timestamp: "2024-01-15 12:18",
    duration: "2m 08s",
  },
  {
    id: "build-003",
    version: "v2.2.9",
    status: "Failed",
    timestamp: "2024-01-14 16:45",
    duration: "1m 52s",
  },
  {
    id: "build-004",
    version: "v2.2.8",
    status: "Succeeded",
    timestamp: "2024-01-14 09:22",
    duration: "2m 19s",
  },
];

const metrics = [
  { label: "Requests", value: "1.2M", change: "+12%" },
  { label: "Errors", value: "0.02%", change: "-5%" },
  { label: "Avg Response", value: "45ms", change: "-8%" },
  { label: "CPU Usage", value: "23%", change: "+3%" },
];

export default function OverviewPage() {
  return (
    <AppShell showRightRail>
      <div className="p-6 space-y-6 max-w-[1400px]">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">3D-dev-hero</h1>
          <p className="text-sm text-muted-foreground mb-4">
            Connected • Ready to become interactive
          </p>
          <div className="flex items-center gap-3">
            <Button variant="primary">Open flagship build</Button>
            <Button variant="secondary">Open build logs</Button>
          </div>
        </div>

        {/* Info Card */}
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-xs text-muted-foreground mb-1">Status</div>
                <div className="flex items-center gap-2">
                  <Badge variant="default">IDLE</Badge>
                </div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Last build</div>
                <div className="text-sm text-foreground">2024-01-15 14:32</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Tags</div>
                <div className="flex items-center gap-1">
                  <Badge variant="default" className="text-xs">
                    production
                  </Badge>
                  <Badge variant="default" className="text-xs">
                    stable
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="build-history">Build History</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="server-metrics">Server Metrics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            {/* Metrics Grid */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {metrics.map((metric) => (
                <Card key={metric.label}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xs text-muted-foreground font-medium">
                      {metric.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-foreground">
                      {metric.value}
                    </div>
                    <div
                      className={`text-xs ${
                        metric.change.startsWith("+")
                          ? "text-success"
                          : "text-danger"
                      }`}
                    >
                      {metric.change}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Build History Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Recent Builds</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Build ID</TableHead>
                      <TableHead>Version</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Duration</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {builds.map((build) => (
                      <TableRow key={build.id}>
                        <TableCell className="font-mono text-xs">
                          {build.id}
                        </TableCell>
                        <TableCell>{build.version}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              build.status === "Succeeded" ? "success" : "danger"
                            }
                            className="gap-1"
                          >
                            {build.status === "Succeeded" ? (
                              <CheckCircle2 className="w-3 h-3" />
                            ) : (
                              <XCircle className="w-3 h-3" />
                            )}
                            {build.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {build.timestamp}
                        </TableCell>
                        <TableCell>{build.duration}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="build-history">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Build history view</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Performance metrics</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="server-metrics">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Server metrics view</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppShell>
  );
}
