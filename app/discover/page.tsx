"use client";

import { SidebarDiscover } from "@/components/layout/sidebar-discover";
import { Header } from "@/components/layout/header";
import { BottomNav } from "@/components/layout/bottom-nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, FileText, Cpu, Database } from "lucide-react";

const featuredBuilds = [
  {
    id: "1",
    title: "E-Commerce API",
    description: "Full-featured REST API with Stripe integration",
    icon: Rocket,
    tags: ["API", "Stripe", "Production"],
  },
  {
    id: "2",
    title: "Content Delivery",
    description: "CDN edge workers with caching layer",
    icon: FileText,
    tags: ["CDN", "Cache", "Edge"],
  },
  {
    id: "3",
    title: "AI Processing",
    description: "ML model inference at the edge",
    icon: Cpu,
    tags: ["AI", "ML", "Edge"],
  },
];

const workerApps = [
  {
    id: "1",
    title: "Image Optimizer",
    description: "Resize and optimize images on-the-fly",
    deploys: "1.2k",
  },
  {
    id: "2",
    title: "Auth Service",
    description: "JWT authentication and authorization",
    deploys: "856",
  },
  {
    id: "3",
    title: "Rate Limiter",
    description: "Distributed rate limiting service",
    deploys: "623",
  },
  {
    id: "4",
    title: "Analytics Collector",
    description: "Real-time event tracking",
    deploys: "412",
  },
];

export default function DiscoverPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <SidebarDiscover />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto scrollbar-thin bg-background pb-20 md:pb-0">
          <div className="p-6 space-y-8 max-w-[1400px]">
            {/* Hero Section */}
            <div className="space-y-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Discover & Deploy
                </h1>
                <p className="text-muted-foreground">
                  Browse templates, featured builds, and deploy with one click
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="primary">Start a Build</Button>
                <Button variant="secondary">View Docs</Button>
              </div>
            </div>

            {/* Featured Builds */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Featured Builds
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {featuredBuilds.map((build) => {
                  const Icon = build.icon;
                  return (
                    <Card key={build.id} className="hover:border-primary/30 transition-colors cursor-pointer">
                      <CardHeader>
                        <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">{build.title}</CardTitle>
                        <CardDescription>{build.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-1 flex-wrap">
                          {build.tags.map((tag) => (
                            <Badge key={tag} variant="default" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>

            {/* Workers App Library */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Workers App Library
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {workerApps.map((app) => (
                  <Card key={app.id} className="hover:border-primary/30 transition-colors cursor-pointer">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">{app.title}</CardTitle>
                      <CardDescription className="text-xs">
                        {app.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <Database className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {app.deploys} deploys
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
