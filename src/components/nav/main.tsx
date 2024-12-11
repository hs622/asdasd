"use client"

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

interface NavItem {
  title: string
  url: string
  icon: React.ElementType
  isActive?: boolean
}

interface NavMainProps {
  items: NavItem[]
}

const NavMain = ({ items }: NavMainProps) => {
  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild tooltip={item.title} isActive={item.isActive}>
            <a href={item.url}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}

export default NavMain;