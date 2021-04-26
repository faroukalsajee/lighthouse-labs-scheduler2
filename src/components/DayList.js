import React from "react";

import DayListItem from "components/DayListItem";

// DayList renders a list of DayListItem components
export default function DayList(props) {
  return (
    <ul>
      {props.days.map((day, index) => (
        <DayListItem
          name={day.name}
          spots={day.spots}
          key={index}
          selected={day.name === props.day}
          setDay={props.setDay}
        />
      ))}
    </ul>
  );
}
