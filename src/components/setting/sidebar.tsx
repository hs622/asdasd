"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();
  const menuItems = [
    { label: "Profile", href: "/healthboard/settings/profile", defaultActive: true },
    { label: "Account", href: "/healthboard/settings/account" },
    // { label: "Appearance", href: "/healthboard/settings/appearance" },
    { label: "Notifications", href: "/healthboard/settings/notifications" },
    { label: "Display", href: "/healthboard/settings/display" },
  ]

  return (
    <aside className="min-h-[calc(100vh-160px)] md:w-80 border-r">
      <nav className="p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${
                  pathname.toLowerCase() == item.href ? "bg-gray-100 font-medium" : "text-gray-600"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

