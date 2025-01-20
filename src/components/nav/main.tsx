"use client";

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { BookOpen, Bot, Settings2, SquareTerminal } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavItem {
  title: string;
  url: string;
  icon: React.ElementType;
  isActive?: boolean;
}

interface NavMainProps {
  items: NavItem[];
}

const NavMain = () => {
  const pathname = usePathname();

  const items = [
    {
      title: "HealthDesk",
      url: "/healthboard",
      icon: SquareTerminal,
      isActive: pathname.toLowerCase() === "/healthboard",
    },
    {
      title: "Query",
      url: "/healthboard/query",
      icon: Bot,
      isActive: pathname.toLowerCase() === "/healthboard/query",
    },
    {
      title: "History",
      url: "/healthboard/history",
      icon: BookOpen,
      isActive: pathname.toLowerCase() === "/healthboard/history",
    },
    {
      title: "Settings",
      url: "/healthboard/settings/profile",
      icon: Settings2,
      isActive: pathname.toLowerCase() === "/healthboard/settings/profile",
    },
  ];

  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton
            asChild
            tooltip={item.title}
            isActive={item.isActive}
          >
            <a href={item.url}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};

export default NavMain;
