import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
   
     <div className="fixed inset-0 bg-white/80 z-10 flex items-center justify-center">
            <div className="w-[90%] max-w-[460px] bg-white shadow rounded-2xl p-4 border border-gray-10">
            <div className=" text-center p-4">
                <div className="size-18 rounded-full grid place-content-center bg-primary/5 text-primary mx-auto mb-4">
                    <Video width={30} height={30} />
                </div>
                <h2 className="font-semibold text-xl">Cuenta de Zoom sincronizada</h2>
                <p className="text-sm mt-1 text-gray-400 my-6">
                    Ahora puedes crear eventos desde Zoom Meeting
                </p>
                <Button variant={'outline'} className="" size={'lg'} asChild>
                    <Link href={`/dashboard/events`}>
                        Ver eventos
                    </Link>
                </Button>
            </div>
            </div>
        </div>
  )
}
