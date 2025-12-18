"use client";

import { motion } from "framer-motion";
import { Sidebar } from "@/components/layout/sidebar";
import { StarField } from "@/components/effects/star-field";
import { ScanlineEffect, GridOverlay, VignetteEffect, HolographicGlow } from "@/components/effects/gaming-effects";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Network,
  Brain,
  Sparkles,
  Zap,
  TrendingUp,
  Clock,
  Server,
  Eye,
} from "lucide-react";

const aiModels = [
  {
    id: "model-001",
    name: "GPT-4 Vision API",
    status: "active",
    requests: "45.2K",
    latency: "1.2s",
    cost: "$12.45",
    accuracy: "98.7%",
  },
  {
    id: "model-002",
    name: "Claude 3 Opus",
    status: "active",
    requests: "32.8K",
    latency: "0.8s",
    cost: "$8.90",
    accuracy: "99.1%",
  },
  {
    id: "model-003",
    name: "Stable Diffusion XL",
    status: "idle",
    requests: "12.5K",
    latency: "3.4s",
    cost: "$5.20",
    accuracy: "96.3%",
  },
];

const metrics = [
  { label: "API Requests", value: "90.5K", icon: Network, change: "+23%" },
  { label: "Avg Latency", value: "1.8s", icon: Clock, change: "-12%" },
  { label: "Total Cost", value: "$26.55", icon: Sparkles, change: "+$4.12" },
  { label: "Accuracy", value: "98.2%", icon: Brain, change: "+1.2%" },
];

export default function AIPage() {
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 shadow-cyan-glow">
                <Brain className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground tracking-tighter">
                  AI Gateway
                </h1>
                <p className="text-muted-foreground text-lg">
                  Manage your AI model integrations
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <Button variant="primary" size="lg">
                <Sparkles className="w-4 h-4 mr-2" />
                Add Model
              </Button>
              <Button variant="secondary" size="lg">
                <Eye className="w-4 h-4 mr-2" />
                View Analytics
              </Button>
            </div>
          </motion.div>

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
                          {metric.change}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Card hover={false}>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Server className="w-5 h-5 text-primary" />
                  Active AI Models
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiModels.map((model, index) => (
                    <motion.div
                      key={model.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="p-5 rounded-lg bg-surface-card/30 border border-border/30 hover:border-primary/40 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-foreground text-lg mb-1">
                            {model.name}
                          </h3>
                          <p className="text-xs font-mono text-muted-foreground">{model.id}</p>
                        </div>
                        {model.status === "active" && (
                          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 border border-success/30">
                            <div className="w-2 h-2 rounded-full bg-success animate-pulse-cyan" />
                            <span className="text-xs font-semibold text-success uppercase">
                              Active
                            </span>
                          </div>
                        )}
                        {model.status === "idle" && (
                          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted/10 border border-muted/30">
                            <div className="w-2 h-2 rounded-full bg-muted" />
                            <span className="text-xs font-semibold text-muted uppercase">
                              Idle
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-4 gap-4">
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Requests</div>
                          <div className="text-lg font-bold text-primary">{model.requests}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Latency</div>
                          <div className="text-lg font-bold text-foreground">{model.latency}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Cost</div>
                          <div className="text-lg font-bold text-warning">{model.cost}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Accuracy</div>
                          <div className="text-lg font-bold text-success">{model.accuracy}</div>
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
