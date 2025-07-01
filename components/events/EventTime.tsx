'use client'
import { Button } from '../ui/button'
import { cn, times } from '@/lib/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
export default function EventTime() {

  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()


  const handleClick = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('time', value)
    router.push(`${pathname}?${params.toString()}`)
  }

  const timeSelected = searchParams.get('time') ?? ''

  return (
    <div className='h-full overflow-y-auto px-4'>
        <div className='max-h-[300px] grid gap-3 '>

        {
            times.map((item, index) => (
                <Button 
                    onClick={() => handleClick(item.value)} 
                    key={index} 
                    variant='outline' 
                    size='icon' 
                    className={cn('w-full',{
                        'bg-primary text-white hover:bg-primary/80 hover:text-white': item.value === timeSelected,
                    })}>

                    {item.name}
                </Button>
            ))
        }
        </div>
    </div>
  )
}
