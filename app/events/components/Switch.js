"use client";
import { Switch, ConfigProvider } from "antd";
import { useState } from "react";

const CalendarSwitcher = () => {
  const [switchChange, setSwitchChange] = useState(true);
  const onChange = (checked) => {
    setSwitchChange((prevSwitch) => !prevSwitch);
    console.log(`switch to ${checked}`);
    console.log(switchChange);
  };

  return (
    <ConfigProvider 
      theme={{
        components: {
          Switch: {
            colorPrimary: '#00CCCC',  // Switch right background
            colorPrimaryHover: '#02A3A3', // Switch right background hover
            handleBg: '#FF822E', // Toggle colour
            colorTextTertiary: '#AB08BD', // Switch left background hover
            // Switch left background is the Tailwind background colour (bg-) below
          }
        }
      }}
    >
      <Switch onChange={onChange} className="bg-magenta"/>
    </ConfigProvider>
  );
};

export default CalendarSwitcher;
