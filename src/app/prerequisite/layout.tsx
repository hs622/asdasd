import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prerequisites",
  description: "Prerequisites for the course",
};

export default async function PrerequisiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
