import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { permanentRedirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Authorization",
  description: "Healthdesk - Authorization",
};

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const response = await getServerSession(authOptions);
  if(response != null)
    permanentRedirect('/healthboard');

  return (
    <div className="flex justify-center items-center min-h-screen">
      {children}
    </div>
  );
}
