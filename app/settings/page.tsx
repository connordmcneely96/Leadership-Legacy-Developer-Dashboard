"use client";

import { motion } from "framer-motion";
import { Sidebar } from "@/components/layout/sidebar";
import { StarField } from "@/components/effects/star-field";
import { ScanlineEffect, GridOverlay, VignetteEffect, HolographicGlow } from "@/components/effects/gaming-effects";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Settings,
  User,
  Bell,
  Shield,
  Key,
  Palette,
  Globe,
  Zap,
} from "lucide-react";

const settingsSections = [
  {
    title: "Profile",
    icon: User,
    description: "Manage your account details and preferences",
    settings: [
      { label: "Display Name", value: "Admin User" },
      { label: "Email", value: "admin@devops.io" },
      { label: "Role", value: "Administrator" },
    ],
  },
  {
    title: "Notifications",
    icon: Bell,
    description: "Configure your notification preferences",
    settings: [
      { label: "Email Notifications", value: "Enabled" },
      { label: "Deployment Alerts", value: "Enabled" },
      { label: "Performance Warnings", value: "Enabled" },
    ],
  },
  {
    title: "Security",
    icon: Shield,
    description: "Manage security and authentication",
    settings: [
      { label: "Two-Factor Auth", value: "Enabled" },
      { label: "API Key Rotation", value: "30 days" },
      { label: "Session Timeout", value: "24 hours" },
    ],
  },
  {
    title: "Appearance",
    icon: Palette,
    description: "Customize your dashboard appearance",
    settings: [
      { label: "Theme", value: "Deep Space" },
      { label: "Accent Color", value: "Cyan" },
      { label: "Animations", value: "Enabled" },
    ],
  },
];

export default function SettingsPage() {
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
                <Settings className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground tracking-tighter">
                  Settings
                </h1>
                <p className="text-muted-foreground text-lg">
                  Configure your dashboard preferences
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {settingsSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                >
                  <Card hover={false}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-sm bg-primary/10 border border-primary/20">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{section.title}</CardTitle>
                          <p className="text-xs text-muted-foreground mt-1">
                            {section.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {section.settings.map((setting) => (
                          <div
                            key={setting.label}
                            className="flex items-center justify-between p-3 rounded-sm bg-surface-card/30 border border-border/30"
                          >
                            <span className="text-sm text-muted-foreground">
                              {setting.label}
                            </span>
                            <span className="text-sm font-semibold text-foreground">
                              {setting.value}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4">
                        <Button variant="secondary" size="sm" className="w-full">
                          Edit {section.title}
                        </Button>
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
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Card hover={false}>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Key className="w-5 h-5 text-primary" />
                  API Keys
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-surface-card/30 border border-border/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-foreground">
                        Production API Key
                      </span>
                      <span className="px-2 py-1 text-xs bg-success/10 text-success border border-success/30 rounded">
                        Active
                      </span>
                    </div>
                    <code className="text-xs font-mono text-muted-foreground">
                      sk_live_••••••••••••••••••••4a3f
                    </code>
                    <div className="flex items-center gap-2 mt-3">
                      <Button variant="secondary" size="sm">
                        Rotate Key
                      </Button>
                      <Button variant="ghost" size="sm">
                        Revoke
                      </Button>
                    </div>
                  </div>
                  <Button variant="primary" size="sm" className="w-full">
                    <Key className="w-3 h-3 mr-2" />
                    Generate New API Key
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
