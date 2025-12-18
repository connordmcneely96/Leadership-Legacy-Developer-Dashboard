import { Card, CardContent } from "@/components/ui/card";
import { Loader2, CheckCircle2, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export type StageStatus = "uploading" | "verifying" | "awaiting" | "complete";

interface DeploymentStageProps {
  title: string;
  description: string;
  status: StageStatus;
}

export function DeploymentStage({ title, description, status }: DeploymentStageProps) {
  const getIcon = () => {
    switch (status) {
      case "uploading":
      case "verifying":
        return <Loader2 className="w-4 h-4 text-primary animate-spin" />;
      case "complete":
        return <CheckCircle2 className="w-4 h-4 text-success" />;
      case "awaiting":
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "uploading":
        return "Uploading...";
      case "verifying":
        return "Verifying...";
      case "complete":
        return "Complete";
      case "awaiting":
        return "Awaiting...";
    }
  };

  return (
    <Card
      className={cn(
        "transition-colors",
        status === "uploading" || status === "verifying"
          ? "border-primary/30"
          : ""
      )}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5">{getIcon()}</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-medium text-foreground">{title}</h4>
              <span className="text-xs text-muted-foreground">
                {getStatusText()}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
