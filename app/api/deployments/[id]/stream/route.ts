import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      // Simulate deployment progress
      const steps = [
        { progress: 10, step: "Transferring build files", status: "uploading" },
        { progress: 25, step: "Transferring build files", status: "uploading" },
        { progress: 35, step: "Transferring build files", status: "complete" },
        { progress: 40, step: "Validating configuration", status: "verifying" },
        { progress: 55, step: "Validating configuration", status: "verifying" },
        { progress: 65, step: "Validating configuration", status: "complete" },
        { progress: 70, step: "Starting worker process", status: "verifying" },
        { progress: 85, step: "Starting worker process", status: "verifying" },
        { progress: 95, step: "Starting worker process", status: "complete" },
        { progress: 100, step: "Deployment complete", status: "success" },
      ];

      for (const update of steps) {
        const data = `data: ${JSON.stringify(update)}\n\n`;
        controller.enqueue(encoder.encode(data));

        // Wait 1 second between updates
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    },
  });
}
