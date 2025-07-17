'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { daysTranslete, times } from '@/lib/utils'
import { Availibility } from '@/validations/Availibility'
import { ChevronRight } from 'lucide-react'
import { FormEvent } from 'react'

interface Props {
  availibility: Availibility
  handleTimeChange: (id:number, time_start: string, time_end: string) => void
  handleChangeStatus: (value: boolean, id: number) => void
}




export default function AvailabilityItem({availibility, handleChangeStatus, handleTimeChange}: Props) {

  const { id,day, time_start, time_end, active } = availibility

  return (
     <div className='flex flex-col md:flex-row gap-4 max-w-[800px] py-2 md:items-center'>
          <div className='min-w-[200px] flex md:block items-center justify-between'>
              <div className='md:hidden'>
                <span className='text-xs text-gray-500 md:hidden'>Dia</span>
                <p className='text-sm text-black font-medium md:block'>{daysTranslete[day as keyof typeof daysTranslete]}</p>
              </div>
            <div className='flex items-center gap-4 text-sm text-gray-400 max-w-48 md:max-w-full'>
              <Switch className='cursor-pointer' checked={active} onCheckedChange={(value) => handleChangeStatus(value, id)} />
              <span className='md:block hidden'>{daysTranslete[day as keyof typeof daysTranslete]}</span>
            </div>
          </div>
          <div className='flex-1 grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center'>
            <div className='flex md:block items-center justify-between'>
              <span className='text-sm text-gray-500 md:hidden'>Desde:</span>
              <Select defaultValue={time_start} onValueChange={(value) => handleTimeChange(id, value, time_end)} disabled={!active}>
                <SelectTrigger className="w-3/4 md:max-w-full">
                  <SelectValue placeholder="10:00" />
                </SelectTrigger>
                <SelectContent>
                  {
                    times.map((time,i) => (
                      <SelectItem key={i} value={time.value}>{time.name}</SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
            </div>
            <div className="text-gray-400 hidden md:block">
              <ChevronRight width={18} height={18} />
            </div>
            <div className='flex md:block items-center justify-between'>
              <span className='text-sm text-gray-500 md:hidden'>Hasta:</span>
              <Select defaultValue={time_end} onValueChange={(value) => handleTimeChange(id, time_start, value)} disabled={!active}>
                <SelectTrigger className="w-3/4 md:max-w-full">
                  <SelectValue placeholder="20:00" />
                </SelectTrigger>
                <SelectContent className=''>
                    {
                        times.map((time,i) => (
                          <SelectItem key={i} value={time.value}>{time.name}</SelectItem>
                        ))
                    }
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
  )
}
