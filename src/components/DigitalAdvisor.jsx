
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import alertsvg from '../assets/alertsvg.svg'
import userImage from '../assets/userImage.svg'
import searchIcon from '../assets/searchIcon.svg'
import dragIcon from '../assets/dragIcon.svg'
import deleteIcon from '../assets/deleteIcon.svg'
import DeleteModal from './DeleteModal'; // Import your DeleteModal component
import { Switch } from '@headlessui/react'; 
import { Link } from 'react-router-dom';
const DigitalAdvisor = () => {

 const [ name , setName] = useState('Abhinav')
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
 const [description, setDescription] = useState('');
 const [error, setError] = useState(''); // To show error message
 const [file, setFile] = useState(null);
 const [cards, setCards] = useState([]);
 const fileInputRef = useRef(null);
 const [uploaded, setUploaded] = useState(false);
 console.log(cards  , "card")

 const [currentIndex, setCurrentIndex] = useState(null);

 const handleDeleteClick = (index) => {
   setCurrentIndex(index); // Set the index of the card to be deleted
   setIsModalOpenDelete(true); // Open the modal
 };

 const confirmDelete = () => {
   const updatedCards = cards.filter((_, i) => i !== currentIndex);
   setCards(updatedCards); // Remove the card by index
   setIsModalOpenDelete(false); // Close the modal
   setCurrentIndex(null); // Clear the current index
 };

 const cancelDelete = () => {
   setIsModalOpenDelete(false); // Simply close the modal
   setCurrentIndex(null); // Clear the current index
 };

 const openModal = () => {
  setIsModalOpen(true);
  setError(''); // Clear error when modal opens
};

const closeModal = () => {
  setIsModalOpen(false);
  setUploaded(false);
};

const handleFileUpload = (event) => {
  const uploadedFile = event.target.files[0];
  validateFile(uploadedFile);
};

const handleDrop = (event) => {
  event.preventDefault();
  const droppedFile = event.dataTransfer.files[0];
  validateFile(droppedFile);
};

const handleDragOver = (event) => {
  event.preventDefault();
};

const validateFile = (file) => {
  const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];

  if (file && validImageTypes.includes(file.type)) {
    setFile(URL.createObjectURL(file)); // Store file preview URL
    setError(''); // Clear any existing errors
    setUploaded(true);
  } else {
    setFile(null); // Clear file
    setUploaded(false);
    setError('Please upload an image file (jpg, jpeg, png)'); // Show error message
  }
};

const handleDescriptionChange = (event) => {
  setDescription(event.target.value);
};

const handleSave = () => {
  if (file && description) {
    const newCard = {
      id: Date.now(),  // Use the current timestamp as a unique id
      file,
      description,
      published: false,  // Set initial published state to false
    };

    setCards([...cards, newCard]);  // Add the new card to the existing cards
    setIsModalOpen(false);  // Close the modal
    setFile(null);  // Reset file input
    setDescription('');  // Clear the description input
    setUploaded(false);  // Reset uploaded state
  } else {
    alert('Please upload an image and add a description');
  }
};

// const handleDelete = (index) => {
//   const updatedCards = cards.filter((_, i) => i !== index);
//   setCards(updatedCards); // Remove the card by index
// };

const togglePublishedStatus = (index) => {
  const updatedCards = cards.map((card, i) => {
    if (i === index) {
      return { ...card, published: !card.published }; // Toggle published status
    }
    return card;
  });
  setCards(updatedCards);

  const navigateToEpisode = () => {
    navigate('/episode', { state: { cards } }); // Pass the cards state
  };
};

  return (
    <div className="flex flex-col md:flex-row h-screen">
    

  
    <div className="flex-grow bg-custom-gray">
    <nav className="bg-white p-3 flex justify-between items-center">
    
      <div className="flex items-center space-x-2">
        
        <span className="font-semibold text-[2vw]">Digital Advisor Modules</span>
      </div>
      
    
      <div className="flex items-center space-x-3">
        <img src={alertsvg}  alt='alert' className='w-[2.5vw]'
          onClick={() => alert('Alert button clicked')} 
         
        />
         <span className='font-semibold text-[1vw]' >{name}</span>
        <img src={userImage} alt='userImage' className='w-[2.5vw] rounded-full  '
          onClick={() => console.log('Sign out button clicked')} 
          
        />
         
      </div>
    </nav>

{/* module section */}
    <div className='w-full bg-custom-gray p-6 flex flex-col gap-6'>
      <div className='flex justify-between items-center'>
         <div className='flex gap-6'>
         <p class="underline-custom text-[1vw]">All Modules</p>
         <p class="text-[1vw] text-text-color">Published</p>
         <p class=" text-[1vw] text-text-color">UnPublished</p>
         </div>
         <div className='flex gap-7 items-center'>
          
         <div>
          <img src={searchIcon} alt='searchIcon' className='w-5' />
         </div>
         <div className='flex gap-2 items-center'>
          <span className='text-[1vw]'>Version :</span>
          
    <select className="border border-gray-200 rounded-md  bg-white shadow-sm focus:outline-none  w-[7vw] h-[3.7vh] text-[0.8vw]">
      <option value="hindi">Hindi</option>
      <option value="english">English</option>
    </select>
  
         </div>
         <div>
          <button className='text-white bg-custom-black md:w-[12vw] h-[4vh] lg:w-[10.3vw] lg:h-[5.3vh] pl-4 pr-4 rounded-sm text-[0.9vw]'
           onClick={openModal}
          >Add New Module</button>
         </div>


         </div>

      </div>


      {/* card -section */}

      <div className="w-full h-full bg-custom-gray p-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {cards.map((card, index) => (
                <div key={index} className="bg-white p-2 rounded-lg shadow-md">
                   <Link to={`/card-details/${card.id}`} 
                     state={{ card }} 
                   
                   className="block">
        {/* This block makes the card clickable */}
        <div className="relative w-full h-48 mb-2">
          <img
            src={card.file}
            alt="Uploaded"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="h-12 overflow-hidden">
          <p className=" line-clamp-2 lg:text-[0.9vw] md:text-[1.2vw]">
            {card.description}
          </p>
        </div>
      </Link>
                 
                  <hr className="" /> {/* Line between description and status */}
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center justify-between space-x-2">
                      <p className="text-gray-700 md:text-[1.2vw] lg:text-[0.8vw]">Status:</p>
                      <Switch
                        checked={card.published}
                        onChange={() => togglePublishedStatus(index)}
                        className={`${
                          card.published ? 'bg-green-600' : 'bg-gray-300'
                        } relative inline-flex items-center h-4 rounded-full w-7 transition-colors duration-300 ease-in-out`}
                      >
                        <span
                          className={`${
                            card.published ? 'translate-x-3' : 'translate-x-[0.1vw]'
                          } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200`}
                        />
                      </Switch>

                      <p className="md:text-[1.2vw] lg:text-[0.8vw] ml-1">
                        {card.published ? '(Published)' : '(Unpublished)'}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteClick(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                    <img src={deleteIcon} alt='delete' className='w-[2vw] h-[3vh]'/>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>


    </div>
    </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white p-3 rounded-lg lg:w-[18vw]  md:w-[24vw]">
            <div className='w-full flex justify-end'>
            <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                <svg className="w-4 h-4 text-black mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          
            <div className="flex justify-between items-center mb-2">
            <div className='flex gap-2 items-center'>
          <span className='text-[1vw]'>Version :</span>
          
    <select className="border border-gray-200 rounded-md  bg-white shadow-sm focus:outline-none  w-[7vw] h-[3.7vh] text-[0.8vw]">
      <option value="hindi">Hindi</option>
      <option value="english">English</option>
    </select>
  
         </div>
              
            </div>
            <div
              className="flex flex-col items-center justify-center border-2 border-dashed border-gray-500 p-4 rounded-lg h-[28vh]"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={() => fileInputRef.current.click()}
            >
               {uploaded ? (
        <p className="text-green-500 text-[1vw]">Image uploaded</p>
      ) : (
        <>
          <img src={dragIcon} alt="Drag icon" className="w-[2.5vw]" />
          <p className="text-gray-600 mb-2 text-[1vw]">Click to Upload or Drag & Drop</p>
        </>
      )}
              <input
                type="file"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileUpload}
              />
           
            </div>
            <div className="mt-2">
              
              <input
                type="text"
                id="description"
                value={description}
                onChange={handleDescriptionChange}
                className="w-full h-[6vh] border border-gray-300 rounded-md p-2 focus:outline-none"
                placeholder="Enter The module"
              />
            </div>
            <div className="flex justify-end mt-2">
              <button
                className=" text-white rounded-sm w-[6vw] h-[5vh] text-[1vw] bg-custom-black"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
       {/* Modal component */}
       <DeleteModal
        isOpen={isModalOpenDelete}
        onClose={cancelDelete}
        onDelete={confirmDelete}
      />
  </div>

  
  );
};

export default DigitalAdvisor
