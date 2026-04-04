import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { vin } = body;

  if (!vin || typeof vin !== "string" || vin.length !== 17) {
    return NextResponse.json(
      { error: "A valid 17-character VIN is required." },
      { status: 400 },
    );
  }

  const res = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${encodeURIComponent(vin)}?format=json`,
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to decode VIN. Please try again." },
      { status: 502 },
    );
  }

  const data = await res.json();
  const result = data.Results?.[0];

  if (!result || result.ErrorCode !== "0") {
    return NextResponse.json(
      { error: result?.ErrorText || "Could not decode this VIN. Please check and try again." },
      { status: 422 },
    );
  }

  return NextResponse.json({ vehicle: result });
}
