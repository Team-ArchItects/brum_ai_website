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

const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};
const EventCalendar = ({eventsList}) => {
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
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
  return <Calendar cellRender={cellRender} />;
};

export default EventCalendar;