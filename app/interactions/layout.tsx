import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactions - Personal Lab",
  description: "Explore interactive UI micro-interactions and motion designs.",
};

export default function InteractionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
