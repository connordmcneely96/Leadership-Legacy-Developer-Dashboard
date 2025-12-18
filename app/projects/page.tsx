"use client";

import { motion } from "framer-motion";
import { Sidebar } from "@/components/layout/sidebar";
import { StarField } from "@/components/effects/star-field";
import { ScanlineEffect, GridOverlay, VignetteEffect, HolographicGlow } from "@/components/effects/gaming-effects";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FolderKanban,
  Plus,
  GitBranch,
  Users,
  Clock,
  Star,
  TrendingUp,
} from "lucide-react";

const projects = [
  {
    id: "proj-001",
    name: "E-Commerce Platform",
    description: "Full-stack e-commerce with payments",
    status: "active",
    members: 8,
    commits: 1247,
    stars: 342,
    updated: "2h ago",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: "proj-002",
    name: "AI Content Generator",
    description: "GPT-powered content creation tool",
    status: "active",
    members: 5,
    commits: 892,
    stars: 567,
    updated: "5h ago",
    tech: ["Python", "FastAPI", "Redis"],
  },
  {
    id: "proj-003",
    name: "Mobile Analytics SDK",
    description: "Cross-platform analytics library",
    status: "maintenance",
    members: 3,
    commits: 456,
    stars: 234,
    updated: "2d ago",
    tech: ["Swift", "Kotlin", "TypeScript"],
  },
  {
    id: "proj-004",
    name: "DevOps Dashboard",
    description: "Real-time infrastructure monitoring",
    status: "active",
    members: 12,
    commits: 2145,
    stars: 891,
    updated: "1h ago",
    tech: ["Next.js", "Go", "Prometheus"],
  },
];

export default function ProjectsPage() {
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
                <FolderKanban className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground tracking-tighter">
                  Projects
                </h1>
                <p className="text-muted-foreground text-lg">
                  Manage your development projects
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <Button variant="primary" size="lg">
                <Plus className="w-4 h-4 mr-2" />
                New Project
              </Button>
              <Button variant="secondary" size="lg">
                <GitBranch className="w-4 h-4 mr-2" />
                View Repositories
              </Button>
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
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground text-xl mb-2">
                          {project.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {project.description}
                        </p>
                      </div>
                      {project.status === "active" && (
                        <div className="px-3 py-1 rounded-full bg-success/10 border border-success/30">
                          <span className="text-xs font-semibold text-success uppercase">
                            Active
                          </span>
                        </div>
                      )}
                      {project.status === "maintenance" && (
                        <div className="px-3 py-1 rounded-full bg-warning/10 border border-warning/30">
                          <span className="text-xs font-semibold text-warning uppercase">
                            Maintenance
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/30 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-4 gap-3 pt-4 border-t border-border/30">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                          <Users className="w-3 h-3" />
                        </div>
                        <div className="text-lg font-bold text-foreground">{project.members}</div>
                        <div className="text-[10px] text-muted-foreground uppercase">Members</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                          <GitBranch className="w-3 h-3" />
                        </div>
                        <div className="text-lg font-bold text-foreground">{project.commits}</div>
                        <div className="text-[10px] text-muted-foreground uppercase">Commits</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                          <Star className="w-3 h-3" />
                        </div>
                        <div className="text-lg font-bold text-primary">{project.stars}</div>
                        <div className="text-[10px] text-muted-foreground uppercase">Stars</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                          <Clock className="w-3 h-3" />
                        </div>
                        <div className="text-xs font-bold text-foreground">{project.updated}</div>
                        <div className="text-[10px] text-muted-foreground uppercase">Updated</div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border/30">
                      <div className="flex items-center gap-2">
                        <Button variant="primary" size="sm" className="flex-1">
                          Open Project
                        </Button>
                        <Button variant="secondary" size="sm" className="flex-1">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
