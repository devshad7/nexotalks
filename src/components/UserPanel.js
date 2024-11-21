"use client";

import { useState } from 'react';
import { Plus } from 'lucide-react';
import CreateChannelModal from './CreateChannelModal';

const UserPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col h-full items-center py-6 px-4 gap-8 dark:border-gray-700/50 transition-colors duration-300">
      <div className="flex justify-between w-full items-center px-4">
        <h2 className="font-bold text-2xl ml-8 text-gray-900 dark:text-white">Chats</h2>
        <button
          onClick={openModal}
          className="text-gray-600 dark:text-gray-300 mr-1 hover:text-black dark:hover:text-white"
        >
          <Plus size={24} />
        </button>
      </div>

      <div className="mb-4 w-full px-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 ml-7 outline-none rounded bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400"
        />
      </div>

      <div className="flex flex-col  items-center justify-center flex-grow text-center text-gray-500 dark:text-gray-400 mb-10 ml-6">
        <div className="flex flex-col items-center space-y-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="140"
            height="140"
            className="fill-current text-gray-200 dark:text-gray-500"
          >
            <path d="M21 1H3a2 2 0 0 0-2 2v19.5a.5.5 0 0 0 .85.35L6.71 18H21a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 11a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm5 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm5 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" />
          </svg>
          <p className="text-xl font-bold text-gray-500 dark:text-gray-500">You have no channels</p>
          <p className="text-xl font-bold  text-gray-500 dark:text-gray-500">Currently</p>
        </div>
      </div>


      {isModalOpen && <CreateChannelModal onClose={closeModal} />}
    </div>
  );
};

export default UserPanel;
