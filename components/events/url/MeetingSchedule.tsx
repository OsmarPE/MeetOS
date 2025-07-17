import React from 'react'

export default function MeetingSchedule({children}: {children: React.ReactNode}) {
  return (
    <div className='grid gap-4 sm:grid-cols-[3fr_2fr] lg:grid-cols-2'>{children}</div>
  )
}
