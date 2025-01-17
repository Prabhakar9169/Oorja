import React from 'react';
import { useState } from 'react';
import Navbar from '../Navbar';
;
import showHistory from '../assets/showHistory.svg'
import soilTestingDate from '../assets/soilTestingDate.svg'
import irrigationdate from '../assets/irrigationdate.svg'
import date1 from '../assets/date1.svg'
import irrigationBtn from '../assets/irrigationBtn.svg'
import soilTestingColor from '../assets/soilTestingColor.svg'
import Chart from "./Chart";
import Rechartjs from './Rechartjs'

const Home = () => {

  const [selectedMonthSeed, setSelectedMonthSeed] = useState('');
  const [selectedYearSeed, setSelectedYearSeed] = useState('');
  const [selectedMonthSoil, setSelectedMonthSoil] = useState('');
  const [selectedYearSoil, setSelectedYearSoil] = useState('');
  const [selectedMonthIrrigation, setSelectedMonthIrrigation] = useState('');
  const [selectedYearIrrigation, setSelectedYearIrrigation] = useState('');

  // Array of months and years
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = Array.from(new Array(50), (val, index) => 2024 - index); // Generate years from 2024 to 1974

  return (
    <div className="flex flex-col min-h-screen bg-custom-gray ">
     
      <Navbar />
        
      <div className="flex w-full md:flex-row  p-4 gap-4 bg-custom-gray ">
          <div className="w-[55.8vw] h-[45.5vh] bg-custom-gray flex flex-col gap-5">
          <div className="bg-white h-[16vh] flex justify-between items-center  p-4 rounded-[15px] ">
     
     <div className="flex flex-col items-center gap-3">
       <span className="text-[1.2vw] font-inter font-custom-black">App User</span>
       <span className="text-[1.7vw] font-inter font-semibold font-custom-black">10,000</span>
     </div>

    
     <div className="flex flex-col items-center gap-3">
       <span className="text-[1.2vw] font-inter font-custom-black">Offline User</span>
       <span className="text-[1.7vw]  font-inter font-semibold font-custom-black">500</span>
     </div>

    
     <div className="flex flex-col items-center gap-3  ">
      <img src={showHistory } alt='show History' className='h-[4vh] w-[8vw]  ' />
      <span className="text-[1.7vw]  font-inter font-semibold font-custom-black invisible">500</span>
     </div>
   </div>
   <div className="flex gap-5">
   <div className="w-[27.6vw] h-[27vh] bg-white rounded-xl p-6 box-border flex flex-col justify-between">

   <div className="flex justify-between gap-2">
        <img src={soilTestingDate} alt='seed service' className='w-[8.5vw]' />
        <div className="flex space-x-2 ">
     
      <select
        value={selectedMonthSeed}
        onChange={(e) => setSelectedMonthSeed(e.target.value)}
        className="border border-gray-300 rounded-md  text-[1vw]
        h-[2vh] w-[12vw] sm:h-[2.5vh] sm:w-[10vw] md:h-[3vh] md:w-[6vw] lg:h-[4vh] lg:w-[5vw]
        "
       
      >
        <option value="" disabled>Select a Month</option>
        {months.map((month, index) => (
          <option key={index} value={month}>{month}</option>
        ))}
      </select>

      
      <select
        value={selectedYearSeed}
        onChange={(e) => setSelectedYearSeed(e.target.value)}
        className="border border-gray-300 rounded-md  text-[1vw]
        h-[2vh] w-[12vw] sm:h-[2.5vh] sm:w-[10vw] md:h-[3vh] md:w-[6vw] lg:h-[4vh] lg:w-[5vw]
        "
      >
        <option value="" disabled>Select a Year</option>
        {years.map((year, index) => (
          <option key={index} value={year}>{year}</option>
        ))}
      </select>

    
    </div>
     </div>
     <div className="bg-white flex ml-3  gap-2  lg:gap-10 ">
  <div className="flex flex-col">
    <span className="text-[0.8vw] text-text-color font-inter font-custom-black">Requested</span>
    <span className="text-[1.4vw] font-inter font-normal font-custom-black">21</span>
  </div>

  <div className="flex flex-col">
    <span className="text-[0.8vw] text-text-color font-inter font-custom-black">InProgress</span>
    <span className="text-[1.4vw] font-inter font-normal font-custom-black">21</span>
  </div>

  <div className="flex flex-col">
    <span className="text-[0.8vw] text-text-color font-inter font-custom-black">Refunds</span>
    <span className="text-[1.4vw] font-inter font-normal font-custom-black">120</span>
  </div>
</div>
   </div>
   <div className="w-[26.6vw] h-[27vh] bg-white rounded-xl p-6 box-border flex flex-col justify-between">
   <div className="flex justify-between gap-2">
        <img src={soilTestingColor} alt='seed service' className='w-[8vw]' />
        <div className="flex space-x-2 ">
     
      <select
        value={selectedMonthSoil}
        onChange={(e) => setSelectedMonthSoil(e.target.value)}
        className="border border-gray-300 rounded-md  text-[1vw]
        h-[2vh] w-[12vw] sm:h-[2.5vh] sm:w-[10vw] md:h-[3vh] md:w-[6vw] lg:h-[4vh] lg:w-[5vw]
        "
       
      >
        <option value="" disabled>Select a Month</option>
        {months.map((month, index) => (
          <option key={index} value={month}>{month}</option>
        ))}
      </select>

      
      <select
        value={selectedYearSoil}
        onChange={(e) => setSelectedYearSoil(e.target.value)}
        className="border border-gray-300 rounded-md  text-[1vw]
        h-[2vh] w-[12vw] sm:h-[2.5vh] sm:w-[10vw] md:h-[3vh] md:w-[6vw] lg:h-[4vh] lg:w-[5vw]
        "
      >
        <option value="" disabled>Select a Year</option>
        {years.map((year, index) => (
          <option key={index} value={year}>{year}</option>
        ))}
      </select>

    
    </div>
     </div>

     <div className="bg-white flex   gap-2    lg:gap-6 ml-3 ">
  <div className="flex flex-col">
    <span className="text-[0.8vw] text-text-color font-inter font-custom-black">Requested</span>
    <span className="text-[1.4vw] font-inter font-normal font-custom-black">21</span>
  </div>

  <div className="flex flex-col">
    <span className="text-[0.8vw] text-text-color font-inter font-custom-black">InProgress</span>
    <span className="text-[1.4vw] font-inter font-normal font-custom-black">21</span>
  </div>

  <div className="flex flex-col">
    <span className="text-[0.8vw] text-text-color font-inter font-custom-black">Completed</span>
    <span className="text-[1.4vw] font-inter font-normal font-custom-black">120</span>
  </div>
  <div className="flex flex-col">
    <span className="text-[0.8vw] text-text-color font-inter font-custom-black">Rejected</span>
    <span className="text-[1.4vw] font-inter font-normal font-custom-black">120</span>
  </div>
</div>

   </div>
   </div>
          </div>
          <div className="w-[23vw] h-[45.5vh] bg-white p-6 flex flex-col gap-6 rounded-xl" >
          <div className="flex justify-between gap-1 md:ml-[-14px]  lg:ml-0">
        <img src={irrigationdate} alt='seed service' className='w-[8vw]' />
        <div className="flex  lg:space-x-2 space-x-1 ">
     
     <select
       value={selectedMonthIrrigation}
       onChange={(e) => setSelectedMonthIrrigation(e.target.value)}
       className="border border-gray-300 rounded-md  text-[1vw]
       h-[2vh] w-[12vw] sm:h-[2.5vh] sm:w-[10vw] md:h-[3vh] md:w-[6vw] lg:h-[4vh] lg:w-[5vw]
       "
      
     >
       <option value="" disabled>Select a Month</option>
       {months.map((month, index) => (
         <option key={index} value={month}>{month}</option>
       ))}
     </select>

     
     <select
       value={selectedYearIrrigation}
       onChange={(e) => setSelectedYearIrrigation(e.target.value)}
       className="border border-gray-300 rounded-md  text-[1vw]
       h-[2vh] w-[12vw] sm:h-[2.5vh] sm:w-[10vw] md:h-[3vh] md:w-[6vw] lg:h-[4vh] lg:w-[5vw]
       "
     >
       <option value="" disabled>Select a Year</option>
       {years.map((year, index) => (
         <option key={index} value={year}>{year}</option>
       ))}
     </select>

   
   </div>
     </div>
     <div className="bg-white flex flex-col   h-full justify-evenly ml-2  ">
  <div className="flex flex-col">
    <span className="text-[0.8vw] text-text-color font-inter font-custom-black">Water Consumed</span>
    <span className="text-[1.4vw] font-inter font-normal font-custom-black">2100 m<sup>3</sup></span>
  </div>

  <div className="flex flex-col">
    <span className="text-[0.8vw] text-text-color font-inter font-custom-black">Number Of Assets</span>
    <span className="text-[1.4vw] font-inter font-normal font-custom-black">30</span>
  </div>

  <div className="flex flex-col">
    <span className="text-[0.8vw] text-text-color font-inter font-custom-black">Subscription</span>
    <span className="text-[1.4vw] font-inter font-normal font-custom-black">120</span>
  </div>
</div>
          </div>
     </div>
      
     <div className="bg-custom-gray w-full  pl-4 pr-4 pb-4 box-border">
     <div className="h-[37vh] bg-white p-2 rounded-[15px]">
          <div className='w-full flex justify-between mb-2 pl-2 pt-2'>
           <h2 className='font-semibold text-[1.35vw] ml-4'>Revenue</h2>
           <div className=" flex justify-center items-center gap-2 text-left pr-4 pt-1 ">
            <span className=' text-[1.1vw]'>From</span>
            <img src={irrigationBtn} alt='irigation' className='w-[7vw]'/>
    </div>
          </div>
         <div className=' flex gap-1 items-center lg:pl-8 md:pl-3 md:w-70vw'>
        <span className='-rotate-90 transform origin-bottom-left absolute text-[0.8vw] text-gray-600 font-semibold'>Rupees (&#8377;)</span> 
        <Chart/>
          </div> 
        </div>
</div>
     
    </div>
  );
};

export default Home;
