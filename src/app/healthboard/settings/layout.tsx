import { Sidebar } from "@/components/setting/sidebar";

export default function SettingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-[calc(100vh-80px)] space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-sm text-gray-500">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <div className="flex space-y-4">
        <Sidebar />
        <div className="flex justify-center w-full">{children}</div>
      </div>
    </div>
  );
}
