"use client";

import { motion } from "framer-motion";
import { Sidebar } from "@/components/layout/sidebar";
import { StarField } from "@/components/effects/star-field";
import { ScanlineEffect, GridOverlay, VignetteEffect, HolographicGlow } from "@/components/effects/gaming-effects";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Database,
  HardDrive,
  Upload,
  Download,
  FileText,
  Image,
  Video,
  Archive,
} from "lucide-react";

const storageMetrics = [
  { label: "Total Storage", value: "2.4 TB", icon: HardDrive, usage: "68%" },
  { label: "Files Stored", value: "145K", icon: FileText, change: "+2.3K" },
  { label: "Bandwidth", value: "8.9 TB", icon: Upload, change: "+450 GB" },
  { label: "Requests", value: "3.2M", icon: Download, change: "+120K" },
];

const buckets = [
  {
    id: "bucket-001",
    name: "production-assets",
    size: "845 GB",
    files: "42.5K",
    region: "US-EAST",
    type: "public",
  },
  {
    id: "bucket-002",
    name: "user-uploads",
    size: "1.2 TB",
    files: "89.2K",
    region: "EU-WEST",
    type: "private",
  },
  {
    id: "bucket-003",
    name: "backup-storage",
    size: "345 GB",
    files: "12.8K",
    region: "AP-SOUTH",
    type: "private",
  },
];

export default function StoragePage() {
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
                <Database className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground tracking-tighter">
                  Storage
                </h1>
                <p className="text-muted-foreground text-lg">
                  Manage your R2 storage buckets
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <Button variant="primary" size="lg">
                <Upload className="w-4 h-4 mr-2" />
                Upload Files
              </Button>
              <Button variant="secondary" size="lg">
                <Database className="w-4 h-4 mr-2" />
                Create Bucket
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
            {storageMetrics.map((metric) => {
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
                        {metric.usage && (
                          <span className="text-xs text-warning font-semibold">
                            {metric.usage}
                          </span>
                        )}
                        {metric.change && (
                          <span className="text-xs text-success font-semibold">
                            {metric.change}
                          </span>
                        )}
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
                  <HardDrive className="w-5 h-5 text-primary" />
                  Storage Buckets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {buckets.map((bucket, index) => (
                    <motion.div
                      key={bucket.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="p-5 rounded-lg bg-surface-card/30 border border-border/30 hover:border-primary/40 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-foreground text-lg mb-1">
                            {bucket.name}
                          </h3>
                          <p className="text-xs font-mono text-muted-foreground">{bucket.id}</p>
                        </div>
                        <div className={`px-3 py-1 rounded-full ${
                          bucket.type === "public"
                            ? "bg-primary/10 border border-primary/30"
                            : "bg-warning/10 border border-warning/30"
                        }`}>
                          <span className={`text-xs font-semibold uppercase ${
                            bucket.type === "public" ? "text-primary" : "text-warning"
                          }`}>
                            {bucket.type}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Size</div>
                          <div className="text-lg font-bold text-primary">{bucket.size}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Files</div>
                          <div className="text-lg font-bold text-foreground">{bucket.files}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Region</div>
                          <div className="text-lg font-bold text-success">{bucket.region}</div>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-border/30">
                        <div className="flex items-center gap-2">
                          <Button variant="primary" size="sm" className="flex-1">
                            <Upload className="w-3 h-3 mr-1" />
                            Upload
                          </Button>
                          <Button variant="secondary" size="sm" className="flex-1">
                            <Download className="w-3 h-3 mr-1" />
                            Download
                          </Button>
                          <Button variant="ghost" size="sm">
                            Manage
                          </Button>
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
