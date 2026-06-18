import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs - Personal Lab",
  description: "Documentation and guides for Personal Lab UI components.",
};

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
