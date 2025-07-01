import {CalendarProps, useCalendar, useLocale} from 'react-aria';
import {useCalendarState} from 'react-stately';
import {CalendarDate, createCalendar} from '@internationalized/date';
import {Button} from '@/components/ui/button';
import CalendarGrid from './CalendarioGrid';
import CalendarButton from './CalendarButton';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarComponentProps extends CalendarProps<CalendarDate> {
  className?: string;
}

export default function Calendar(props: CalendarComponentProps) {
  let { locale } = useLocale();

  
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
      <CalendarGrid state={state} firstDayOfWeek={props.firstDayOfWeek} />
    </div>
  );
}