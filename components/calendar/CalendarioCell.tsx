import { CalendarDate, getLocalTimeZone, isToday } from '@internationalized/date';
import { useRef } from 'react';
import {useCalendarCell} from 'react-aria';
import { CalendarState } from 'react-stately';

interface CalendarCellComponentProps {
  state: CalendarState;
  date: CalendarDate;
  available?: boolean;
}

export default function CalendarCell({ state, date, available = false }: CalendarCellComponentProps) {
  let ref = useRef(null);
  let {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate
  } = useCalendarCell({ date }, state, ref);

  const isDateToday = isToday(date,getLocalTimeZone());

  return (
    <td {...cellProps} 
    className=''>
      <div
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={` relative aspect-square text-sm lg:size-10 lg:text-base flex items-center  rounded justify-center transition focus:shadow-[0_0_0_4px_rgba(0,0,0,0)] active:shadow-[0_0_0_4px_rgba(0,0,0,0)] 
          ${isSelected ? 'bg-primary text-white hover:bg-primary' : ''} 
          ${isDisabled ? 'opacity-30 cursor-auto' : ''} 
          ${!isSelected && !isDisabled ? 'hover:bg-black/5 cursor-pointer' : ''}
          ${(isUnavailable || available) ? 'bg-gray-50 text-gray-400 pointer-events-none' : ''}`}
      >
        {formattedDate}
        {
          isDateToday && <div className='absolute bottom-0.5 -translate-x-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-primary'></div>
        }
      </div>
    </td>
  );
}