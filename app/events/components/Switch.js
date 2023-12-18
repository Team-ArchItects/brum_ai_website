"use client"
import { Switch } from 'antd';
import { useState } from 'react';

const CalendarSwitcher = () => { 
    const [switchChange, setSwitchChange] = useState(true);
    const onChange = (checked) => {
        setSwitchChange(prevSwitch => !prevSwitch);
        console.log(`switch to ${checked}`);
        console.log(switchChange)
      };

    return (

<Switch onChange={onChange} handleBg={"#fff"} handleShadow={"#fff"}

/>)}

export default CalendarSwitcher;