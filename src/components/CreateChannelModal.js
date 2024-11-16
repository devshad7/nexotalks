import React from 'react';

const CreateChannelModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 h-screen w-screen">
      <div className="bg-gray-200 dark:bg-gray-900 p-6 rounded-lg w-96 text-gray-900 dark:text-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Create new channel</h2>
          <button
            onClick={onClose}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-5xl"
          >
            &times;
          </button>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Start a new conversation with someone
        </p>

        <input
          type="text"
          placeholder="Channel name"
          className="w-full p-2 mb-4 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 outline-none"
        />

        <input
          type="text"
          placeholder="Channel image URL"
          className="w-full p-2 mb-4 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 outline-none"
        />

        <div className="flex items-center justify-between mt-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-300 dark:bg-black bg-opacity-50 text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-opacity-70 rounded-md">
            <span className="text-2xl">+</span> Select users
          </button>

          <button className="bg-gray-800 dark:bg-white px-4 py-2 rounded-xl text-white dark:text-black hover:bg-gray-700 dark:hover:bg-gray-200">
            Create channel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateChannelModal;
