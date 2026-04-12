"use client"
import {useState} from 'react';

import { Calendar } from "@/shared/components/ui/calendar"
interface Props{
    className?: string;
}

export function Schedule({className} : Props) {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className={`rounded-lg border   ${className}`}
      captionLayout="dropdown"
    />
  )
}
