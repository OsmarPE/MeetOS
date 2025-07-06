import { Calendar, Settings, Tickets, UserRound, Video } from "lucide-react"
import Image from "next/image"
import Logo from "@/assets/img/logo.png"
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

const itemsSettings = [
  {
    title: "Perfil",
    url: "profile",
    icon: UserRound,
  },
]

export  default function AppSidebar() {

  
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="w-full pt-3 overflow-hidden">
          <div className="text-foreground font-medium flex items-center gap-2 min-w-max">
            <div className="size-8 grid place-content-center">
              <Image src={Logo.src} width={24} height={24} alt="MeetOS" className="w-6 h-auto" />
            </div>
            <span>MeetOS</span>
          </div>
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
        <SidebarGroup>
          <SidebarGroupLabel>Configuración</SidebarGroupLabel>
          <SidebarGroupContent> 
            <SidebarMenu>
              {
                  itemsSettings.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarLink href={`/dashboard/${item.url}`}>
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarLink>
                    </SidebarMenuItem>
                  ))
              }
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
