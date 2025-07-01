import {AriaCalendarGridProps, useCalendarGrid} from 'react-aria';
import CalendarCell from './CalendarioCell';
import { CalendarState } from 'react-stately';

interface CalendarGridComponentProps extends AriaCalendarGridProps {
  state: CalendarState;
}

export default function CalendarGrid({ state, ...props }: CalendarGridComponentProps) {
  let { gridProps, headerProps, weekDays, weeksInMonth } = useCalendarGrid(
    props,
    state
  );

  
  // state.visibleRange.start.add()

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
            {state.getDatesInWeek(weekIndex).map((date, i) => (
              date
                ? (
                  <CalendarCell
                    
                    key={i}
                    state={state}
                    date={date}
                  />
                )
                : <td key={i} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}