import {CalendarProps, useCalendar, useLocale} from 'react-aria';
import {useCalendarState} from 'react-stately';
import {CalendarDate, createCalendar} from '@internationalized/date';
import CalendarGrid from './CalendarioGrid';
import CalendarButton from './CalendarButton';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Availibility } from '@/validations/Availibility';
interface CalendarComponentProps extends CalendarProps<CalendarDate> {
  className?: string;
}


export default function Calendar(props: CalendarComponentProps) {
  let { locale } = useLocale();
  const [daysWeek, setDaysWeek] = useState<Pick<Availibility,'day'|'active'>[]>([])  
  
  let state = useCalendarState({
    createCalendar,
    visibleDuration:{months:1},
    ...props,
    locale
  });

  let { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(
    props,
    state
  );

  useEffect(() => {
  
    fetch('/api/availibility')
      .then(res => res.json())
      .then(data => {
        setDaysWeek(data.message)
      })
  
  }, [])
  
  
  
  return (
    <div {...calendarProps} className="p-4 rounded-md border border-gray-200">
      <div className="header flex justify-between items-center mb-4">
        
          <CalendarButton {...prevButtonProps} side="left">
            <ChevronLeft />
          </CalendarButton>
        <h2 className='text-gray-500 text-sm capitalize'>{title}</h2>
          <CalendarButton {...nextButtonProps} side="right">
            <ChevronRight />
          </CalendarButton>
        

      </div>
      <div className={`${!daysWeek.length ? 'pointer-events-none opacity-50' : ''}`}>
      <CalendarGrid state={state} firstDayOfWeek={props.firstDayOfWeek} daysWeek={daysWeek} />
      </div>
    </div>
  );
}