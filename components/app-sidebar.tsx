import { Calendar, Tickets, Video } from "lucide-react"
import Image from "next/image"
import Logo from "@/assets/img/logo.svg"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import SidebarLink from "./aside/SidebarLink"

// Menu items.
const items = [
  {
    title: "Eventos",
    url: "events",
    icon: Calendar,
  },
  {
    title: "Disponibilidad",
    url: "availability",
    icon: Tickets, 
  },
  {
    title: "Reuniones",
    url: "meetings",
    icon: Video,
  },
  
]

export  default function AppSidebar() {

  
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="pt-4 px-2 text-primary font-medium flex items-center gap-4 text-lg">
          <Image src={Logo.src} width={34} height={34} alt="MeetOS" className="rounded" />
          <span>MeetOS</span>
          </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarLink href={`/dashboard/${item.url}`}>
                       <item.icon />
                      <span>{item.title}</span>
                    </SidebarLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
