import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authorization",
  description: "Healthdesk - Authorization",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {children}
    </div>
  );
}
