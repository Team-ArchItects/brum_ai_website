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
            colorPrimary: '#E708FF',
            colorPrimaryBorder: '#FF822E',
            colorPrimaryHover: '#BF047D',
            handleBg: '#FF822E',
            colorPrimaryBg: '#FF822E',
            colorTextTertiary: '#FF822E'

          }
        }
      }}
    >
      <Switch onChange={onChange} className=""/>
    </ConfigProvider>
  );
};

export default CalendarSwitcher;
