import React from 'react';
import { Dialog } from '@headlessui/react'; // Import Dialog from Headless UI
import deleteIcon from '../assets/deleteIcon.svg'; // Replace with your delete icon path

const DeleteModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" aria-hidden="true" />
      <div className="bg-white p-4 sm:p-4 lg:p-8 rounded-lg shadow-lg z-10 md:w-[28vw] lg:w-[22vw] ">
        <div className="flex flex-col items-center">
          <img src={deleteIcon} alt="delete" className="w-[3vw] h-[4vh] mb-4 mt-2" />
          <p className="lg:text-[2vw] md:text-[2.1vw] font-semibold mb-1 text-center">Are you sure?</p>
          <p className="text-gray-600 mb-6 text-center lg:text-[0.9vw] md:text-[1.1vw]">Are you sure you want to delete this module</p>
          <div className="flex flex-col sm:flex-row gap-4">
           
            <button
              onClick={onClose}
              className="bg-white lg:text-[0.9vw] md:text-[1.1vw] hover:text-white border border-gray-500 px-4 py-2 rounded-sm hover:bg-custom-black w-[8.5vw] h-[5vh]  xl:h-[5vh] "
            >
              Cancel
            </button>
            <button
              onClick={onDelete}
              className="bg-white lg:text-[0.9vw] md:text-[1.1vw] hover:text-white  border border-gray-500 px-4 py-2 rounded-sm hover:bg-custom-black w-[8.5vw] h-[5vh] xl:h-[5vh]"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default DeleteModal;
