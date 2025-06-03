import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { ChevronRight } from 'lucide-react'

export default function AvailabilityDay() {
  return (
     <div className='flex gap-4 max-w-[800px] py-2 items-center'>
          <div className='min-w-[200px]'>
            <div className='flex items-center gap-4 text-sm text-gray-400'>
              <Switch />
              <span>Lunes</span>
            </div>
          </div>
          <div className='flex-1 grid grid-cols-[1fr_auto_1fr] gap-4 items-center'>
            <div className=''>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="10:00" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10:00">10:00</SelectItem>
                  <SelectItem value="11:00">11:00</SelectItem>
                  <SelectItem value="12:00">12:00</SelectItem>
                  <SelectItem value="13:00">13:00</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-gray-400">
              <ChevronRight width={18} height={18} />
            </div>
            <div className=''>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="20:00" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10:00">10:00</SelectItem>
                  <SelectItem value="11:00">11:00</SelectItem>
                  <SelectItem value="12:00">12:00</SelectItem>
                  <SelectItem value="13:00">13:00</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
  )
}
