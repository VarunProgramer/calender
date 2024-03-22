import { useEffect, useState } from 'react';
import './App.css';
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const years = [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const daysInMonth = () => {
    const daysArray = []

    const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1)
    const lastDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth()+1, 0)

    for (let i = 0; i<firstDay.getDay(); i++){
      // console.log(firstDay.getDay())
      daysArray.push(null)
    }
    for (let i = 1; i<lastDay.getDate(); i++){
      daysArray.push(new Date(selectedDate.getFullYear(),selectedDate.getMonth(),i))
    }
    // console.log(daysArray)
    return daysArray
  }
  // console.log(selectedDate)

  const handleChengMonth = (e) => {
    const newMonth = parseInt(e.target.value, 10)
    setSelectedDate(new Date(selectedDate.getFullYear(), newMonth, 1))
    // console.log(newMonth)
    // console.log(selectedDate)
  }
  const handleChengYear = (e) => {
    const  yearNum = parseInt(e.target.value, 10)
    setSelectedDate(new Date(yearNum, selectedDate.getMonth(), 1))
  }
  
  const isSameDay = (dateOne, dateTwo) => {
  return (
    dateOne.getDate() === dateTwo.getDate() && 
    dateOne.getMonth() === dateTwo.getMonth() &&
    dateOne.getFullYear() === dateTwo.getFullYear()
    )
  }  // console.log(selectedDate.getMonth())
  return (
    <div className="calender">
      <div className="header">
        <button onClick={() => {
          setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth()-1, 1))}
          }>
          <FaAngleDoubleLeft />
          </button>
        
        <select value={selectedDate.getMonth()} onChange={handleChengMonth}>
          {months.map((month,index) => (
            <option key={index} value={index}>{month}</option>
          ))}
        </select>

        <select value={selectedDate.getFullYear()} onChange={handleChengYear} className='year'>
          {years.map((year,index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>

        <button onClick={() => {
          setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth()+1, 1))}
          }><FaAngleDoubleRight /></button>
      </div>
      <div className="daysOfWeek">
        {dayOfWeek.map((day)=>(
          <b>{day}</b>
        ))}
      </div>
      <div className="days">
        {daysInMonth().map((day, index)=>(
          <div key={index} value={day} className={day? (isSameDay(day,new Date))?"day current":"day":"empty"}>
            {day?day.getDate():" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
