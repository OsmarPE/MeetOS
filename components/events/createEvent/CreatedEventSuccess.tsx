import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MenuEdit from '@/assets/img/menu-edit.webp'

export default function CreatedEventSuccess() {


  return (
    <div 
      className={cn(
        'border text-center border-gray-200 rounded-lg p-6 max-w-md w-[90%]',
        'bg-white'
      )}
    >
      <div 
        className={cn(
          'mb-4 flex mx-auto items-center justify-center size-12 rounded-full border',
          'border-green-200 bg-green-50'
        )}
      >
        <Check className={cn('size-5', 'text-green-600')} />
      </div>


      <h2 className='text-lg font-semibold leading-6 text-gray-900 mb-2'>
        Tu evento ha sido creado correctamente
      </h2>
      <p className='text-gray-600 text-sm mb-6 leading-relaxed'>
       Ve a <span className="text-primary">Eventos</span> y haz clic en el menu creado y haz click sobre en <span className="text-primary">Calendario</span> para programar tu evento 
      </p>
      
      <img src={MenuEdit.src} alt="menu del evento" className="block mx-auto max-w-44 mb-8" />

        <Button 
          className="w-full"
          variant={'outline'}
          >
            <Link href={'/dashboard/events'} className="font-medium">
              Ir a eventos
            </Link>
    
        </Button>
    </div>
  );
}