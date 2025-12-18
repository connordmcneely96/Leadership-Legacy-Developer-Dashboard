import { Progress } from "@/components/ui/progress";
import { Loader2 } from "lucide-react";

interface MiniProgressPillProps {
  progress: number;
  text: string;
}

export function MiniProgressPill({ progress, text }: MiniProgressPillProps) {
  return (
    <div className="fixed bottom-6 right-6 bg-[hsl(var(--surface-1))] border border-border rounded-sm px-4 py-3 shadow-lg min-w-[240px] z-50">
      <div className="flex items-center gap-2 mb-2">
        <Loader2 className="w-3 h-3 text-primary animate-spin" />
        <span className="text-xs font-medium text-foreground">{text}</span>
        <span className="ml-auto text-xs text-muted-foreground">{progress}%</span>
      </div>
      <Progress value={progress} className="h-1" />
    </div>
  );
}
