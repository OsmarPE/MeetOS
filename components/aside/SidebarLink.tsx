'use client'

import { SidebarMenuButton } from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props{
    href: string,
    children: React.ReactNode
}

export default function SidebarLink({ href, children }: Props) {

  const pathname = usePathname()

    console.log(href)

  return (
     <SidebarMenuButton className="h-10 px-4 hover:text-sidebar-accent hover:bg-white active:bg-transparent active:text-primary  data-[active=true]:bg-sidebar-accent" asChild isActive={pathname.startsWith(href)}>
       <Link href={href}>{children}</Link>
     </SidebarMenuButton>
  )
}
