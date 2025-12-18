"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Stepper, StepStatus } from "@/components/deploy/stepper";
import { DeploymentStage } from "@/components/deploy/deployment-stage";
import { MiniProgressPill } from "@/components/deploy/mini-progress-pill";

export default function DeployNewModal() {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const [progress, setProgress] = useState(28);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    // Simulate deployment progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      title: "Confirm Build",
      status: "complete" as StepStatus,
    },
    {
      title: "Deploying",
      status: "active" as StepStatus,
    },
    {
      title: "Deployment Complete",
      status: "pending" as StepStatus,
    },
  ];

  const handleClose = () => {
    setOpen(false);
    router.back();
  };

  return (
    <>
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Deploy New Build</DialogTitle>
            <DialogDescription>
              Select server, build version, and tags for deployment
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            {/* Stepper */}
            <Stepper steps={steps} />

            {/* Progress */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Deploying, please wait...
                </span>
                <span className="text-sm font-medium text-foreground">
                  {progress}%
                </span>
              </div>
              <Progress value={progress} />
            </div>

            {/* Deployment Stages */}
            <div className="grid grid-cols-1 gap-3">
              <DeploymentStage
                title="Transferring build files"
                description="Uploading build artifacts to edge locations"
                status={progress > 30 ? "complete" : "uploading"}
              />
              <DeploymentStage
                title="Validating configuration"
                description="Checking deployment settings and environment"
                status={
                  progress > 60
                    ? "complete"
                    : progress > 30
                    ? "verifying"
                    : "awaiting"
                }
              />
              <DeploymentStage
                title="Starting worker process"
                description="Initializing worker and health checks"
                status={
                  progress > 90
                    ? "complete"
                    : progress > 60
                    ? "verifying"
                    : "awaiting"
                }
              />
            </div>

            {/* Deployment Info Panel */}
            <Card className="bg-[hsl(var(--surface-2))]">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Build</div>
                    <div className="text-sm font-medium text-foreground">
                      v2.3.1
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Server</div>
                    <div className="text-sm font-medium text-foreground">
                      Production
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Tags</div>
                    <div className="flex gap-1">
                      <Badge variant="default" className="text-xs">
                        stable
                      </Badge>
                      <Badge variant="default" className="text-xs">
                        prod
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button variant="secondary" className="w-full" size="sm">
                  View Active Sessions
                </Button>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex justify-end gap-2">
              <Button variant="secondary" onClick={handleClose}>
                Cancel Deployment
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Mini progress pill */}
      <MiniProgressPill progress={progress} text="Deploying build..." />
    </>
  );
}
