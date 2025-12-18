"use client";

import { motion } from "framer-motion";
import { Sidebar } from "@/components/layout/sidebar";
import { StarField } from "@/components/effects/star-field";
import { ScanlineEffect, GridOverlay, VignetteEffect, HolographicGlow } from "@/components/effects/gaming-effects";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Activity,
  TrendingUp,
  TrendingDown,
  Server,
  Zap,
  Database,
  CheckCircle2,
  XCircle,
  Clock,
  Play,
} from "lucide-react";

const metrics = [
  {
    label: "Total Requests",
    value: "1.2M",
    change: "+12%",
    trend: "up",
    icon: Activity,
  },
  {
    label: "Error Rate",
    value: "0.02%",
    change: "-5%",
    trend: "down",
    icon: XCircle,
  },
  {
    label: "Avg Response",
    value: "45ms",
    change: "-8%",
    trend: "down",
    icon: Zap,
  },
  {
    label: "Active Workers",
    value: "23",
    change: "+3",
    trend: "up",
    icon: Server,
  },
];

const builds = [
  {
    id: "build-001",
    version: "v2.3.1",
    status: "success",
    timestamp: "2 hours ago",
    duration: "2m 14s",
  },
  {
    id: "build-002",
    version: "v2.3.0",
    status: "success",
    timestamp: "5 hours ago",
    duration: "2m 08s",
  },
  {
    id: "build-003",
    version: "v2.2.9",
    status: "failed",
    timestamp: "1 day ago",
    duration: "1m 52s",
  },
  {
    id: "build-004",
    version: "v2.2.8",
    status: "success",
    timestamp: "2 days ago",
    duration: "2m 19s",
  },
];

const deployments = [
  { id: 1, name: "Production API", status: "active", uptime: "99.9%" },
  { id: 2, name: "Staging Environment", status: "deploying", uptime: "—" },
  { id: 3, name: "Beta Testing", status: "active", uptime: "98.7%" },
];

export default function OverviewPage() {
  return (
    <div className="min-h-screen cosmic-bg">
      <StarField />
      <ScanlineEffect />
      <GridOverlay />
      <VignetteEffect />
      <HolographicGlow />
      <Sidebar />

      <main className="ml-60 relative z-10">
        <div className="p-12 space-y-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-foreground mb-2 tracking-tighter">
              Production Dashboard
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              Real-time monitoring and deployment management
            </p>
            <div className="flex items-center gap-4">
              <Button variant="primary" size="lg">
                <Play className="w-4 h-4 mr-2" />
                Deploy New Build
              </Button>
              <Button variant="secondary" size="lg">
                View Logs
              </Button>
            </div>
          </motion.div>

          {/* Metrics Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Card hover={false}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-2 rounded-sm bg-primary/10 border border-primary/20">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        {metric.trend === "up" ? (
                          <TrendingUp className="w-5 h-5 text-success" />
                        ) : (
                          <TrendingDown className="w-5 h-5 text-success" />
                        )}
                      </div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        {metric.label}
                      </div>
                      <div className="text-5xl font-bold text-foreground mb-2 tracking-tighter">
                        {metric.value}
                      </div>
                      <div className={`text-sm font-semibold ${
                        metric.trend === "down" && metric.label.includes("Error") || metric.label.includes("Response")
                          ? "text-success"
                          : "text-success"
                      }`}>
                        {metric.change} from last week
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Builds */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Card hover={false}>
                <CardHeader>
                  <CardTitle className="text-xl">Recent Builds</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {builds.map((build, index) => (
                      <motion.div
                        key={build.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-sm bg-surface-card/30 border border-border/30 hover:border-primary/30 transition-all duration-300"
                      >
                        <div className={`p-2 rounded-full ${
                          build.status === "success"
                            ? "bg-success/10"
                            : build.status === "failed"
                            ? "bg-danger/10"
                            : "bg-warning/10"
                        }`}>
                          {build.status === "success" ? (
                            <CheckCircle2 className="w-4 h-4 text-success" />
                          ) : build.status === "failed" ? (
                            <XCircle className="w-4 h-4 text-danger" />
                          ) : (
                            <Clock className="w-4 h-4 text-warning animate-pulse" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-foreground">{build.version}</span>
                            <span className="text-xs font-mono text-muted-foreground">{build.id}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {build.timestamp} · {build.duration}
                          </div>
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                          {build.status}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Active Deployments */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Card hover={false}>
                <CardHeader>
                  <CardTitle className="text-xl">Active Deployments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {deployments.map((deployment, index) => (
                      <motion.div
                        key={deployment.id}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="p-4 rounded-sm bg-surface-card/30 border border-border/30 hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="font-semibold text-foreground">{deployment.name}</div>
                          {deployment.status === "active" ? (
                            <div className="flex items-center gap-2 text-xs">
                              <div className="w-2 h-2 rounded-full bg-success animate-pulse-cyan"></div>
                              <span className="text-success font-semibold uppercase tracking-wider">
                                Active
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 text-xs">
                              <div className="w-2 h-2 rounded-full bg-warning animate-pulse-cyan"></div>
                              <span className="text-warning font-semibold uppercase tracking-wider">
                                Deploying
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Uptime</span>
                          <span className="font-semibold text-foreground">{deployment.uptime}</span>
                        </div>
                        {deployment.status === "deploying" && (
                          <div className="mt-3">
                            <div className="h-1 bg-surface-card rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-primary to-primary-hover"
                                initial={{ width: "0%" }}
                                animate={{ width: "65%" }}
                                transition={{ duration: 2, ease: "easeOut" }}
                              />
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">Deploying... 65%</div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
