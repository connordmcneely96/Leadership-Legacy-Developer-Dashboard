"use client";

import { motion } from "framer-motion";
import { Sidebar } from "@/components/layout/sidebar";
import { StarField } from "@/components/effects/star-field";
import { ScanlineEffect, GridOverlay, VignetteEffect, HolographicGlow } from "@/components/effects/gaming-effects";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Rocket,
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Zap,
  Package,
  Globe,
} from "lucide-react";

const deployments = [
  {
    id: "dep-001",
    name: "Production API v2.3.1",
    status: "active",
    region: "US-EAST",
    uptime: "99.98%",
    requests: "1.2M",
    latency: "42ms",
    time: "2h ago",
  },
  {
    id: "dep-002",
    name: "Edge Workers Beta",
    status: "deploying",
    region: "EU-WEST",
    uptime: "—",
    requests: "—",
    latency: "—",
    time: "Now",
    progress: 67,
  },
  {
    id: "dep-003",
    name: "Staging Environment",
    status: "active",
    region: "AP-SOUTH",
    uptime: "98.5%",
    requests: "342K",
    latency: "38ms",
    time: "12h ago",
  },
  {
    id: "dep-004",
    name: "Dev Testing Suite",
    status: "failed",
    region: "US-WEST",
    uptime: "—",
    requests: "—",
    latency: "—",
    time: "1d ago",
  },
];

const metrics = [
  { label: "Active Deployments", value: "12", icon: Rocket, trend: "+3" },
  { label: "Success Rate", value: "99.2%", icon: CheckCircle2, trend: "+2.1%" },
  { label: "Avg Deploy Time", value: "2m 14s", icon: Clock, trend: "-18s" },
  { label: "Total Requests", value: "3.8M", icon: TrendingUp, trend: "+450K" },
];

export default function DeploymentsPage() {
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
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 shadow-cyan-glow">
                <Rocket className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground tracking-tighter">
                  Deployments
                </h1>
                <p className="text-muted-foreground text-lg">
                  Manage and monitor your live deployments
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <Button variant="primary" size="lg">
                <Rocket className="w-4 h-4 mr-2" />
                New Deployment
              </Button>
              <Button variant="secondary" size="lg">
                <Package className="w-4 h-4 mr-2" />
                View History
              </Button>
            </div>
          </motion.div>

          {/* Metrics */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                >
                  <Card hover={false}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2 rounded-sm bg-primary/10 border border-primary/20">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-xs text-success font-semibold">
                          {metric.trend}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        {metric.label}
                      </div>
                      <div className="text-5xl font-bold text-foreground tracking-tighter">
                        {metric.value}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Deployments List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Card hover={false}>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Active Deployments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {deployments.map((deployment, index) => (
                    <motion.div
                      key={deployment.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="p-5 rounded-lg bg-surface-card/30 border border-border/30 hover:border-primary/40 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-bold text-foreground text-lg">
                              {deployment.name}
                            </h3>
                            {deployment.status === "active" && (
                              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 border border-success/30">
                                <div className="w-2 h-2 rounded-full bg-success animate-pulse-cyan" />
                                <span className="text-xs font-semibold text-success uppercase tracking-wider">
                                  Active
                                </span>
                              </div>
                            )}
                            {deployment.status === "deploying" && (
                              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-warning/10 border border-warning/30">
                                <div className="w-2 h-2 rounded-full bg-warning animate-pulse-cyan" />
                                <span className="text-xs font-semibold text-warning uppercase tracking-wider">
                                  Deploying
                                </span>
                              </div>
                            )}
                            {deployment.status === "failed" && (
                              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-danger/10 border border-danger/30">
                                <AlertCircle className="w-3 h-3 text-danger" />
                                <span className="text-xs font-semibold text-danger uppercase tracking-wider">
                                  Failed
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Globe className="w-3 h-3" />
                              {deployment.region}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {deployment.time}
                            </span>
                            <span className="font-mono text-xs">{deployment.id}</span>
                          </div>
                        </div>
                      </div>

                      {deployment.status === "deploying" && (
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-xs mb-2">
                            <span className="text-muted-foreground">Deployment Progress</span>
                            <span className="font-semibold text-primary">{deployment.progress}%</span>
                          </div>
                          <div className="h-2 bg-surface-card rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary via-primary-hover to-primary"
                              initial={{ width: "0%" }}
                              animate={{ width: `${deployment.progress}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      )}

                      {deployment.status === "active" && (
                        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/30">
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">Uptime</div>
                            <div className="text-lg font-bold text-success">{deployment.uptime}</div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">Requests</div>
                            <div className="text-lg font-bold text-foreground">{deployment.requests}</div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">Latency</div>
                            <div className="text-lg font-bold text-primary">{deployment.latency}</div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
