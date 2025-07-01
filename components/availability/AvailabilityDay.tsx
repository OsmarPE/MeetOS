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



export default function AvailabilityDay({availibility, handleChangeStatus, handleTimeChange}: Props) {

  const { id,day, time_start, time_end, active } = availibility

  return (
     <div className='flex gap-4 max-w-[800px] py-2 items-center'>
          <div className='min-w-[200px]'>
            <div className='flex items-center gap-4 text-sm text-gray-400'>
              <Switch className='cursor-pointer' checked={active} onCheckedChange={(value) => handleChangeStatus(value, id)} />
              <span>{daysTranslete[day as keyof typeof daysTranslete]}</span>
            </div>
          </div>
          <div className='flex-1 grid grid-cols-[1fr_auto_1fr] gap-4 items-center'>
            <div className=''>
              <Select defaultValue={time_start} onValueChange={(value) => handleTimeChange(id, value, time_end)} disabled={!active}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="10:00" />
                </SelectTrigger>
                <SelectContent>
                  {
                    times.map((time) => (
                      <SelectItem key={time.value} value={time.value}>{time.name}</SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
            </div>
            <div className="text-gray-400">
              <ChevronRight width={18} height={18} />
            </div>
            <div className=''>
              <Select defaultValue={time_end} onValueChange={(value) => handleTimeChange(id, time_start, value)} disabled={!active}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="20:00" />
                </SelectTrigger>
                <SelectContent>
                    {
                        times.map((time) => (
                          <SelectItem key={time.value} value={time.value}>{time.name}</SelectItem>
                        ))
                    }
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
  )
}
