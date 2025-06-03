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
     <SidebarMenuButton asChild isActive={pathname === href}>
       <Link href={href}>{children}</Link>
     </SidebarMenuButton>
  )
}
