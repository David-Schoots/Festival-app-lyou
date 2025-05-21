import React, { useState } from "react";

const times = [
  "10:00",
  "10:15",
  "10:30",
  "10:45",
  "11:00",
  "11:15",
  "11:30",
  "11:45",
  "12:00",
  "12:15",
  "12:30",
  "12:45",
  "13:00",
  "13:15",
  "13:30",
  "13:45",
  "14:00",
  "14:15",
  "14:30",
  "14:45",
  "15:00",
  "15:15",
  "15:30",
  "15:45",
  "16:00",
  "16:15",
  "16:30",
  "16:45",
  "17:00",
  "17:15",
  "17:30",
  "17:45",
  "18:00",
  "18:15",
  "18:30",
  "18:45",
  "19:00",
  "19:15",
  "19:30",
  "19:45",
  "20:00",
  "20:15",
  "20:30",
  "20:45",
  "21:00",
  "21:15",
  "21:30",
  "21:45",
  "22:00",
  "22:15",
  "22:30",
  "22:45",
  "23:00",
  "23:15",
  "23:30",
  "23:45",
];
/* Verschilende soorten stages  */
const stages = ["Poton", "The Lake", "The Club", "Hangar"];

/* alle tijd naam van de artiest */
const eventsData = {
  Saturday: {
    Poton: [
      { start: "10:15", end: "11:45", name: "Armin van Buuren" },
      { start: "12:00", end: "13:30", name: "Kensington" },
      { start: "14:15", end: "16:15", name: "De Staat" },
      { start: "16:45", end: "18:15", name: "Navarone" },
      { start: "19:15", end: "21:00", name: "Dotan" },
      { start: "22:00", end: "23:45", name: "Froukje" },
    ],
    "The Lake": [
      { start: "10:00", end: "11:00", name: "Talent set 1" },
      { start: "11:15", end: "12:45", name: "Talent set 2" },
      { start: "13:45", end: "14:45", name: "Talent set 3" },
      { start: "15:00", end: "16:00", name: "Talent set 4" },
      { start: "16:15", end: "17:45", name: "Talent set 5" },
      { start: "18:00", end: "19:30", name: "Talent set 6" },
      { start: "20:00", end: "21:30", name: "Talent set 7" },
    ],
    "The Club": [
      { start: "12:00", end: "13:30", name: "Comedy" },
      { start: "14:00", end: "15:30", name: "Lecture" },
      { start: "16:00", end: "17:30", name: "Theater" },
      { start: "18:00", end: "19:30", name: "Movie" },
      { start: "20:00", end: "21:30", name: "Performance" },
      { start: "22:00", end: "23:45", name: "Illusionist" },
    ],
    Hangar: [
      { start: "10:00", end: "11:15", name: "DJ set 1" },
      { start: "11:30", end: "12:45", name: "DJ set 2" },
      { start: "13:00", end: "14:15", name: "DJ set 3" },
      { start: "14:30", end: "15:45", name: "DJ set 4" },
      { start: "16:00", end: "17:15", name: "DJ set 5" },
      { start: "17:30", end: "18:45", name: "DJ set 6" },
      { start: "19:00", end: "20:15", name: "DJ set 7" },
      { start: "20:30", end: "23:45", name: "DJ set 8" },
    ],
  },
  Sunday: {
    Poton: [
      { start: "10:15", end: "13:30", name: "Martin Garrix" },
      { start: "13:45", end: "16:15", name: "Within Temptation" },
      { start: "16:30", end: "18:45", name: "Chef'Special" },
      { start: "19:00", end: "21:15", name: "Eefje de Visser" },
      { start: "21:30", end: "23:45", name: "Spinvis" },
    ],
    "The Lake": [
      { start: "10:00", end: "11:00", name: "Talent set 1" },
      { start: "11:15", end: "12:45", name: "Talent set 2" },
      { start: "13:45", end: "15:00", name: "Talent set 3" },
      { start: "15:15", end: "16:45", name: "Talent set 4" },
      { start: "17:00", end: "18:30", name: "Talent set 5" },
      { start: "18:45", end: "20:15", name: "Talent set 6" },
      { start: "20:30", end: "22:00", name: "Magic Show" },
    ],
    "The Club": [
      { start: "12:00", end: "13:30", name: "Comedy" },
      { start: "14:00", end: "15:30", name: "Lecture" },
      { start: "16:00", end: "17:30", name: "Theater" },
      { start: "18:00", end: "19:30", name: "Movie" },
    ],
    Hangar: [
      { start: "10:00", end: "11:15", name: "DJ set 1" },
      { start: "11:30", end: "12:45", name: "DJ set 2" },
      { start: "13:00", end: "14:15", name: "DJ set 3" },
      { start: "14:30", end: "15:45", name: "DJ set 4" },
      { start: "16:00", end: "17:15", name: "DJ set 5" },
      { start: "17:30", end: "18:45", name: "DJ set 6" },
      { start: "19:00", end: "20:15", name: "DJ set 7" },
      { start: "20:30", end: "23:45", name: "DJ set 8" },
    ],
  },
};

// Helper to check if an event is at a given time
function getEventAtTime(events, stage, time) {
  const stageEvents = events[stage] || [];
  for (const event of stageEvents) {
    if (time >= event.start && time < event.end) {
      return event.name;
    }
  }
  return "";
}

export default function TimeTable() {
  const [selectedDay, setSelectedDay] = useState("Saturday");
  const events = eventsData[selectedDay];

  return (
    <div className="overflow-x-auto w-full ">
      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={() => setSelectedDay("Saturday")}
          className={`px-4 py-2 rounded font-bold ${
            selectedDay === "Saturday"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Zaterdag
        </button>
        <button
          onClick={() => setSelectedDay("Sunday")}
          className={`px-4 py-2 rounded font-bold ${
            selectedDay === "Sunday"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Zondag
        </button>
      </div>
      <table className="min-w-full border-collapse text-xs md:text-sm bg-white rounded-xl shadow">
        <thead>
          <tr>
            <th className="bg-gray-200 px-2 py-2 text-left dark:bg-gray-800">
              Time
            </th>
            {/* naam van de podiumss */}
            {stages.map((stage) => (
              <th
                key={stage}
                className="bg-gray-200 px-2 py-2 text-center dark:bg-gray-800"
              >
                {stage}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Tijd  */}
          {times.map((time) => (
            <tr key={time}>
              <td className="bg-gray-100 px-2 py-1 font-semibold dark:text-white dark:bg-gray-800" >
                {time}
              </td>
              {stages.map((stage) => {
                const eventName = getEventAtTime(events, stage, time);
                return (
                  <td
                    /* naam van de artiest */
                    key={stage}
                    className={`px-2 py-1 text-center ${
                      eventName
                        ? "bg-blue-400 text-white font-bold rounded dark:text-white dark:bg-blue-400"
                        : ""
                    }`}
                  >
                    {eventName}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
