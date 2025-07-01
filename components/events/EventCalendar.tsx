'use client'
import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Calendar from '../calendar/Calendar'
import { CalendarDate, getLocalTimeZone, parseDate, today } from '@internationalized/date'
import { getDateOfISOString } from '@/lib/utils'
import { Availibility } from '@/validations/Availibility'

interface Props{
    availibilities: Availibility[]
}

export default function EventCalendar({ availibilities }: Props) {

    const router = useRouter()
    const search = useSearchParams()
    const pathname = usePathname()
    const dateParam = search.get('date')

    let date = dateParam ? new Date(dateParam+'T00:00:00') : new Date()
    
    const [value, setValue] = React.useState(parseDate(getDateOfISOString(date)));
    
    const handleDateChange = (date: CalendarDate) => {
        const { day, month, year } = date
        const newDate = new Date(year, month - 1, day)
        const params = new URLSearchParams(search);
        params.set('date', getDateOfISOString(newDate))
        router.push(`${pathname}?${params.toString()}`)
        setValue(date)
    }

    return (
        <Calendar minValue={today(getLocalTimeZone())}  value={value} onChange={(date) => handleDateChange(date)} />
    )
}
