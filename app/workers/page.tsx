"use client";

import { motion } from "framer-motion";
import { Sidebar } from "@/components/layout/sidebar";
import { StarField } from "@/components/effects/star-field";
import { ScanlineEffect, GridOverlay, VignetteEffect, HolographicGlow } from "@/components/effects/gaming-effects";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Cpu,
  Activity,
  Zap,
  MemoryStick,
  HardDrive,
  Server,
  TrendingUp,
  Clock,
} from "lucide-react";

const workers = [
  {
    id: "worker-001",
    name: "API Gateway Worker",
    status: "healthy",
    cpu: "23%",
    memory: "156 MB",
    requests: "1.2M/day",
    uptime: "15d 4h",
    region: "Global",
  },
  {
    id: "worker-002",
    name: "Image Processing",
    status: "healthy",
    cpu: "67%",
    memory: "384 MB",
    requests: "450K/day",
    uptime: "8d 12h",
    region: "US-EAST",
  },
  {
    id: "worker-003",
    name: "Auth Service",
    status: "warning",
    cpu: "89%",
    memory: "512 MB",
    requests: "2.1M/day",
    uptime: "22d 8h",
    region: "EU-WEST",
  },
  {
    id: "worker-004",
    name: "Data Sync Worker",
    status: "healthy",
    cpu: "34%",
    memory: "228 MB",
    requests: "890K/day",
    uptime: "5d 2h",
    region: "AP-SOUTH",
  },
];

const metrics = [
  { label: "Active Workers", value: "24", icon: Server, color: "primary" },
  { label: "Total Requests", value: "4.6M", icon: Activity, color: "success" },
  { label: "Avg CPU Usage", value: "34%", icon: Cpu, color: "warning" },
  { label: "Avg Memory", value: "245 MB", icon: MemoryStick, color: "primary" },
];

export default function WorkersPage() {
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
                <Cpu className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground tracking-tighter">
                  Worker Processes
                </h1>
                <p className="text-muted-foreground text-lg">
                  Monitor and manage your edge workers
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <Button variant="primary" size="lg">
                <Cpu className="w-4 h-4 mr-2" />
                Deploy Worker
              </Button>
              <Button variant="secondary" size="lg">
                <Activity className="w-4 h-4 mr-2" />
                View Metrics
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
                      <div className="p-2 rounded-sm bg-primary/10 border border-primary/20 w-fit mb-4">
                        <Icon className="w-5 h-5 text-primary" />
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

          {/* Workers List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Card hover={false}>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Server className="w-5 h-5 text-primary" />
                  Active Workers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {workers.map((worker, index) => (
                    <motion.div
                      key={worker.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="p-5 rounded-lg bg-surface-card/30 border border-border/30 hover:border-primary/40 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-foreground text-lg mb-1">
                            {worker.name}
                          </h3>
                          <p className="text-xs font-mono text-muted-foreground">{worker.id}</p>
                        </div>
                        {worker.status === "healthy" && (
                          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 border border-success/30">
                            <div className="w-2 h-2 rounded-full bg-success animate-pulse-cyan" />
                            <span className="text-xs font-semibold text-success uppercase">
                              Healthy
                            </span>
                          </div>
                        )}
                        {worker.status === "warning" && (
                          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-warning/10 border border-warning/30">
                            <div className="w-2 h-2 rounded-full bg-warning animate-pulse-cyan" />
                            <span className="text-xs font-semibold text-warning uppercase">
                              Warning
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground flex items-center gap-2">
                            <Cpu className="w-4 h-4" />
                            CPU Usage
                          </span>
                          <span className="text-sm font-bold text-foreground">{worker.cpu}</span>
                        </div>
                        <div className="h-1.5 bg-surface-card rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-primary-hover"
                            style={{ width: worker.cpu }}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground flex items-center gap-2">
                            <MemoryStick className="w-4 h-4" />
                            Memory
                          </span>
                          <span className="text-sm font-bold text-foreground">{worker.memory}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border/30">
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">Requests</div>
                            <div className="text-sm font-bold text-primary">{worker.requests}</div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">Uptime</div>
                            <div className="text-sm font-bold text-success">{worker.uptime}</div>
                          </div>
                        </div>
                      </div>
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
