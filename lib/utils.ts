import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const daysTranslete = {
    'Monday': 'Lunes',
    'Tuesday': 'Martes',
    'Wednesday': 'Miércoles',
    'Thursday': 'Jueves',
    'Friday': 'Viernes',
    'Saturday': 'Sábado',
    'Sunday': 'Domingo',
}

enum MeetType {
    GoogleMeet = 'Google Meet',
    ZoomMeeting = 'Zoom Meeting',
    MicrosoftTeams = 'Microsoft Teams'
}

export const meetTypes = [
    {
        label: 'Google Meet',
        value: MeetType.GoogleMeet,
        active: true
    },
    {
        label: 'Zoom',
        value: MeetType.ZoomMeeting,
        active: false
    },
    {
        label: 'Microsoft Teams',
        value: MeetType.MicrosoftTeams,
        active: false
    }
]

export const formatDateLongMX = (date: Date) => {
    return date.toLocaleDateString('es-MX', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'America/Mexico_City'
    })
    
}

export const getDateOfISOString = (date: Date) => {
    return date.toISOString().split('T')[0]
}


export const times = [
  { name: "00:00", value: "00:00:00" },
  { name: "00:30", value: "00:30:00" },
  { name: "01:00", value: "01:00:00" },
  { name: "01:30", value: "01:30:00" },
  { name: "02:00", value: "02:00:00" },
  { name: "02:30", value: "02:30:00" },
  { name: "03:00", value: "03:00:00" },
  { name: "03:30", value: "03:30:00" },
  { name: "04:00", value: "04:00:00" },
  { name: "04:30", value: "04:30:00" },
  { name: "05:00", value: "05:00:00" },
  { name: "05:30", value: "05:30:00" },
  { name: "06:00", value: "06:00:00" },
  { name: "06:30", value: "06:30:00" },
  { name: "07:00", value: "07:00:00" },
  { name: "07:30", value: "07:30:00" },
  { name: "08:00", value: "08:00:00" },
  { name: "08:30", value: "08:30:00" },
  { name: "09:00", value: "09:00:00" },
  { name: "09:30", value: "09:30:00" },
  { name: "10:00", value: "10:00:00" },
  { name: "10:30", value: "10:30:00" },
  { name: "11:00", value: "11:00:00" },
  { name: "11:30", value: "11:30:00" },
  { name: "12:00", value: "12:00:00" },
  { name: "12:30", value: "12:30:00" },
  { name: "13:00", value: "13:00:00" },
  { name: "13:30", value: "13:30:00" },
  { name: "14:00", value: "14:00:00" },
  { name: "14:30", value: "14:30:00" },
  { name: "15:00", value: "15:00:00" },
  { name: "15:30", value: "15:30:00" },
  { name: "16:00", value: "16:00:00" },
  { name: "16:30", value: "16:30:00" },
  { name: "17:00", value: "17:00:00" },
  { name: "17:30", value: "17:30:00" },
  { name: "18:00", value: "18:00:00" },
  { name: "18:30", value: "18:30:00" },
  { name: "19:00", value: "19:00:00" },
  { name: "19:30", value: "19:30:00" },
  { name: "20:00", value: "20:00:00" },
  { name: "20:30", value: "20:30:00" },
  { name: "21:00", value: "21:00:00" },
  { name: "21:30", value: "21:30:00" },
  { name: "22:00", value: "22:00:00" },
  { name: "22:30", value: "22:30:00" },
  { name: "23:00", value: "23:00:00" },
  { name: "23:30", value: "23:30:00" }
];


export const genetareRangeTime = (range = 30) => {
  let arrayRange = [];
  
  let hour = 0;
  let minute = 0;
  let acc = 0
  while (hour < 24) {
    
    const value = hour.toString().padStart(2, '0') +':' + minute.toString().padStart(2, '0')
    
    arrayRange.push({
      value:`${value}:00`,
      name: value 
    })
    
    acc = acc + range
    minute = acc % 60;
    hour = Math.floor(acc / 60)
    
    if (minute >= 60){
      minute = 0
    }
  
  }
 return arrayRange
};

export const formedDate = (value: number | string) => {
   return new Date(value).toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

export const formedTime = (value: number | string) => {
  return new Date(value).toLocaleTimeString('es-MX', {
    hour: 'numeric',
    minute: 'numeric'
  })
}

export const getUrl = () => {
  return process.env?.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'
}