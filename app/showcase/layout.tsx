import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Showcase - Personal Lab",
  description: "Interactive showcase of beautifully designed and animated UI components.",
};

export default function ShowcaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
