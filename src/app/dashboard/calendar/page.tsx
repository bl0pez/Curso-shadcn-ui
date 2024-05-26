"use client";
import { Calendar } from "@/components/ui/calendar";
import React from "react";

export default function CalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = React.useState<Date[] | undefined>([]);

  const smallDate = date?.toLocaleDateString("es-Es", {
    weekday: "long",
    day: "numeric",
    month: "long",
  })

  return (
    <div className="flex-col sm:flex sm:flex-row sm:flex-wrap gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
      />

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={(date) => date > new Date()}
      />

      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDates}
        className="rounded-md border"
        disabled={(date) => date < new Date()}
      />

    <div>
      <h1 className="text-3xl">Información</h1>
      <div className="border-b"></div>
      <p>{smallDate}</p>
      <p>
        {
          multipleDates?.map((date) => {
            return date.toLocaleDateString("es-Es", {
              weekday: "long",
              day: "numeric",
              month: "long",
            }) + ", ";
          })
        }
      </p>
    </div>

    </div>
  );
}
