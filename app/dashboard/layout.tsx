import AppSidebar from "@/components/app-sidebar"
import Profile from "@/components/profile/Profile"
import { SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import LogInNylas from "@/components/dashboard/LogInNylas"

export default async function Layout({ children }: { children: React.ReactNode }) {

  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  const profile = await supabase.from('profiles').select('*').eq('id', data.user.id).single()
  const grantId = profile?.data?.grant_id as string

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <header className="h-16 p-4 flex items-center justify-between border-b border-b-sidebar-ring/50">
          <SidebarTrigger className="text-gray-500" />
          <Profile name={'osmar'} />
        </header>
        <main className="p-6 w-full">
          {children}
        </main>
        {
          !grantId && <LogInNylas />
        }
      </div>
    </SidebarProvider>
  )
}
