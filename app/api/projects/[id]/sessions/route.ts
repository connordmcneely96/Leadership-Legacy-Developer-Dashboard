import { NextRequest, NextResponse } from "next/server";

const mockSessions = [
  { id: "1", name: "Production", status: "active", duration: "2h 14m" },
  { id: "2", name: "Staging", status: "idle", duration: "45m" },
  { id: "3", name: "Development", status: "active", duration: "1h 32m" },
  { id: "4", name: "Testing", status: "idle", duration: "12m" },
];

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return NextResponse.json({ sessions: mockSessions });
}
