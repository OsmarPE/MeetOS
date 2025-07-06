import {AriaCalendarGridProps, useCalendarGrid} from 'react-aria';
import CalendarCell from './CalendarioCell';
import { CalendarState } from 'react-stately';
import { CalendarDate, getLocalTimeZone } from '@internationalized/date';
import { Availibility } from '@/validations/Availibility';

interface CalendarGridComponentProps extends AriaCalendarGridProps {
  state: CalendarState;
  daysWeek: Pick<Availibility,'day'|'active'>[]
}

export default function CalendarGrid({ state,daysWeek, ...props }: CalendarGridComponentProps) {
  let { gridProps, headerProps, weekDays, weeksInMonth } = useCalendarGrid(
    props,
    state
  );

  const isAvaiblableDay = (date: CalendarDate) => {
    if (!daysWeek.length) return false
    let indexDay = date.toDate( getLocalTimeZone()).getDay()
    indexDay = indexDay === 0 ? 6 : indexDay - 1
    return !daysWeek[indexDay].active
  };

  
  return (
    <table {...gridProps} className='w-full'>
      <thead {...headerProps}>
        <tr className='text-xs text-gray-400'>
          {weekDays.map((day, index) => <th className='font-normal' key={index}>{day}</th>)}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex} className='w-full'>
            {state.getDatesInWeek(weekIndex).map((date, i) => {
              
              const isAvailable = date ? isAvaiblableDay(date) : false
              
              return date
                ? (
                  <CalendarCell
                    available={isAvailable}
                    key={i}
                    state={state}
                    date={date}
                  />
                )
                : <td key={i} />
              }
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}