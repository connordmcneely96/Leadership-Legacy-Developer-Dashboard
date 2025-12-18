import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const deployment = {
    id: `deploy-${Date.now()}`,
    buildId: body.buildId,
    server: body.server,
    tags: body.tags || [],
    status: "deploying",
    progress: 0,
    startedAt: new Date().toISOString(),
  };

  return NextResponse.json({ deployment });
}
