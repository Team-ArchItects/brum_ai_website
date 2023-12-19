"use client";
import { Switch, ConfigProvider } from "antd";
import { useState } from "react";

const CalendarSwitcher = ({ changeViewType }) => {
  const onChange = (checked) => {
    changeViewType();
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Switch: {
            colorPrimary: "#00CCCC", // Switch right background
            colorPrimaryHover: "#02A3A3", // Switch right background hover
            handleBg: "#FF822E", // Toggle colour
            colorTextTertiary: "#AB08BD", // Switch left background hover
            // Switch left background is the Tailwind background colour (bg-) below
          },
        },
      }}
    >
    <div className="flex justify-end w-9/12 text-center">
      <div className="flex items-center border-4 border-citrus p-3 rounded-full"><h3>List View</h3>
      <Switch onChange={onChange} className="bg-magenta mx-5" />
      <h3>Calendar View</h3></div></div>
    </ConfigProvider>
  );
};

export default CalendarSwitcher;
