import React from 'react';
import alertsvg from './assets/alertsvg.svg'
import logOutBtn from './assets/logOutBtn.svg'

const Navbar = () => {
  return (
    <nav className="bg-white p-3 flex justify-between items-center">
    
      <div className="flex items-center space-x-2">
        <span   role="img" 
        aria-label="wave" 
        className="text-[2vw] wave-animation">👋</span>
        <span className="font-bold text-[2vw]">Hello There !</span>
      </div>
      
    
      <div className="flex items-center space-x-3">
        <img src={alertsvg}  alt='alert' className='w-[2.5vw]'
          onClick={() => alert('Alert button clicked')} 
         
        />
         
        <img src={logOutBtn} alt='logOut' className='w-[8vw]'
          onClick={() => console.log('Sign out button clicked')} 
          
        />
         
      </div>
    </nav>
  );
};

export default Navbar;
