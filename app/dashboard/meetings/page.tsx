import MeetCard from "@/components/meetings/MeetCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";


export default function page() {
  return (
    <div>
      <header className='flex gap-4 justify-between'>
        <div>
          <h2 className="text-2xl font-semibold">Reuniones</h2>
          <p className='text-sm text-gray-400'>Gestiona las reuniones ya programadas</p>
        </div>
        <Button size={'lg'}  >
          <Plus width={20} height={20} />
          <span>Añadir reunión</span>
        </Button>
      </header>
      <div className="mt-8 grid gap-4 grid-cols-[repeat(auto-fill,minmax(min(460px,100%),1fr))]"> 
          <MeetCard />
          <MeetCard />
      </div>
    </div>
  )
}
