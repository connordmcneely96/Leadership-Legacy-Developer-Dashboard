import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const deployment = {
    id,
    buildId: "build-001",
    server: "Production",
    status: "deploying",
    progress: 45,
    steps: [
      {
        id: "step-1",
        name: "Transferring build files",
        status: "complete",
        description: "Uploading build artifacts to edge locations",
      },
      {
        id: "step-2",
        name: "Validating configuration",
        status: "verifying",
        description: "Checking deployment settings and environment",
      },
      {
        id: "step-3",
        name: "Starting worker process",
        status: "awaiting",
        description: "Initializing worker and health checks",
      },
    ],
  };

  return NextResponse.json({ deployment });
}
