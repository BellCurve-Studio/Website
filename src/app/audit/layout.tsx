import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Operational Audit | BellCurve Studio",
  description:
    "Find out what's costing your organisation time, leads, or money — a free, no-obligation audit.",
  keywords: [
    "Free Operational Audit",
    "Website Diagnosis",
    "Intake Workflow Audit",
    "Lead Flow Analysis",
    "BellCurve Studio Audit",
  ],
};

export default function AuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
