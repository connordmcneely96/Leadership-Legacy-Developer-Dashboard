import { NextRequest, NextResponse } from "next/server";

// Mock data for builds
const mockBuilds = [
  {
    id: "build-001",
    version: "v2.3.1",
    status: "Succeeded",
    timestamp: "2024-01-15 14:32",
    duration: "2m 14s",
  },
  {
    id: "build-002",
    version: "v2.3.0",
    status: "Succeeded",
    timestamp: "2024-01-15 12:18",
    duration: "2m 08s",
  },
  {
    id: "build-003",
    version: "v2.2.9",
    status: "Failed",
    timestamp: "2024-01-14 16:45",
    duration: "1m 52s",
  },
  {
    id: "build-004",
    version: "v2.2.8",
    status: "Succeeded",
    timestamp: "2024-01-14 09:22",
    duration: "2m 19s",
  },
];

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return NextResponse.json({ builds: mockBuilds });
}
