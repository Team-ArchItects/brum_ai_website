"use client"
import React from 'react';
import { Badge, Calendar, ConfigProvider } from 'antd';

const getListData = (value, eventsList) => {
  const listData = [];
  const calendarDateString = value.$d.toString().substring(0,15);
  eventsList !== null && eventsList.map(elem => {
    const elemDate = new Date(elem.start_date);
    const elemDateString = elemDate.toString().substring(0,15);
    if (elemDateString === calendarDateString) {
      listData.push({
        type: "warning",
        content: elem.event_name,
        link: elem.meetup_link
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
const elemYear = Number(elem.start_date.toString().substring(0, 4));
if (value.$M === elemMonth && value.$y === elemYear) {
  monthList.push(
    {name: elem.event_name, 
     link: elem.meetup_link})
}})
return monthList;
};


const EventCalendar = ({eventsList}) => {
  const monthCellRender = (value) => {
    const events = getMonthData(value, eventsList);
    return events ? (
      <div className="notes-month">
       {events.map((eventInfo, index) => (
         <a key={index} href={eventInfo.link} target="_blank"> 
         <li>
          {eventInfo.name}        
          </li>
          </a>
        ))}
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value, eventsList);
    return (
      <ul className="events">
        {listData.map((item) => (
          <a key={item.content} href={item.link} target="_blank"><li >
            <Badge status={item.type} text={item.content} />
          </li></a>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };
  return (
    <ConfigProvider
    theme={{
      components: {
        Calendar: {
          // fullBg: '#FF822E', // Also background color
          //itemActiveBg: '#00CCCC', // Active panel color
          colorBgContainer: '#f0f0f0', // Background color
          // colorPrimary: '#00CCCC', // Text color
          colorSplit: '#FF822E', // Underline/day border
          // colorText: '#00CCCC', // Non selected text
          // colorTextDisabled: '#00CCCC', // Days outside the month
          // controlItemBgActive: '#00CCCC',  // Selected day
          // controlItemBgHover: '#FF822E', // Hover over selected day
          // fontFamily: '', //Font style, by being empty applies site default of vietnam
          // fontSize: 14, // Font size
        }
      }
    }}
    >
    <Calendar cellRender={cellRender}/>
    </ConfigProvider>
  );
};

export default EventCalendar;