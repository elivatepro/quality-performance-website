import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free VIN Decoder",
  description:
    "Decode any Vehicle Identification Number instantly. Get your vehicle's year, make, model, engine specs, and more — completely free.",
};

export default function VinDecoderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
