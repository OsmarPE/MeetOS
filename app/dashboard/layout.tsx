import AppSidebar from "@/components/app-sidebar"
import LogInGoogle from "@/components/layout/LogInGoogle"
import Profile from "@/components/Profile"
import { Button } from "@/components/ui/button"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { createClient } from "@/utils/supabase/server"
import { Calendar } from "lucide-react"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function Layout({ children }: { children: React.ReactNode }) {

  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <header className="h-16 p-4 flex items-center justify-end border-b border-b-sidebar-ring/50">
          <Profile name={'osmar'} />
        </header>
        <main className="p-6 w-full">
          {children}
        </main>
      </div>
    {/* <LogInGoogle  /> */}

    </SidebarProvider>
  )
}
