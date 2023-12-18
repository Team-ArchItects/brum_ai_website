"use client"
import React from 'react';
import { Badge, Calendar } from 'antd';

const getListData = (value, eventsList) => {
  const listData = [];
  const calendarDateString = value.$d.toString().substring(0,15);
  eventsList !== null && eventsList.map(elem => {
    const elemDate = new Date(elem.start_date);
    const elemDateString = elemDate.toString().substring(0,15);
    if (elemDateString === calendarDateString) {
      listData.push({
        type: "warning",
        content: `${elem.event_name}`
      })
      console.log("Event date string: ", elemDateString)
    }
  })

  // types: warning (orange), success (green), error (red)

  return listData;
};

const getMonthData = (value, eventsList) => {
const monthList = [];

  eventsList !== null && eventsList.map(elem => {
    const elemMonth = Number(elem.start_date.toString().substring(5, 7))-1;
    console.log("elemMonth: ", elemMonth)
    console.log(value)
const elemYear = Number(elem.start_date.toString().substring(0, 4));
if (value.$M === elemMonth && value.$y === elemYear) {
  monthList.push(elem.event_name)
}})
return monthList;
};
const EventCalendar = ({eventsList}) => {
  const monthCellRender = (value) => {
    const events = getMonthData(value, eventsList);
    return events ? (
      <div className="notes-month">
       {events.map((eventInfo, index) => (
          <li key={index}>
          {eventInfo}        
          </li>
        ))}
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value, eventsList);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };
  return <Calendar cellRender={cellRender} mode={"year"} />;
};

export default EventCalendar;