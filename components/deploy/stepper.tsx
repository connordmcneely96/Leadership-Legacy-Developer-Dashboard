import { CheckCircle2, Circle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type StepStatus = "complete" | "active" | "pending";

interface Step {
  title: string;
  status: StepStatus;
}

interface StepperProps {
  steps: Step[];
}

export function Stepper({ steps }: StepperProps) {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={step.title} className="flex items-center flex-1">
          <div className="flex flex-col items-center">
            <div
              className={cn(
                "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors",
                step.status === "complete" &&
                  "border-primary bg-primary/10 text-primary",
                step.status === "active" &&
                  "border-primary bg-primary/10 text-primary",
                step.status === "pending" &&
                  "border-border bg-[hsl(var(--surface-2))] text-muted-foreground"
              )}
            >
              {step.status === "complete" && <CheckCircle2 className="w-4 h-4" />}
              {step.status === "active" && (
                <Loader2 className="w-4 h-4 animate-spin" />
              )}
              {step.status === "pending" && <Circle className="w-4 h-4" />}
            </div>
            <span
              className={cn(
                "text-xs mt-2 font-medium",
                step.status === "complete" && "text-primary",
                step.status === "active" && "text-primary",
                step.status === "pending" && "text-muted-foreground"
              )}
            >
              {step.title}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={cn(
                "flex-1 h-0.5 mx-4 transition-colors",
                step.status === "complete" ? "bg-primary" : "bg-border"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}
