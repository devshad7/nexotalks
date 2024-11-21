<<<<<<< HEAD
import ChatWindow from './ChatWindow';
import UserPanel from './UserPanel';

const Chat = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <aside className="w-full md:w-1/4 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 flex flex-col">
        <UserPanel />
      </aside>
      <main className="flex-1 bg-gray-100 dark:bg-gray-900">
        <ChatWindow />
      </main>
    </div>
  );
};

export default Chat;
=======

import ChatWindow from './ChatWindow';
import UserPanel from './UserPanel';
const Chat = () => {
  return (
    <div className="flex h-screen text-gray-900 dark:text-gray-100">
      <aside className="w-1/4 text-gray-800 border-r border-muted dark:border-gray-700/50 px-2 dark:text-gray-100 flex flex-col">
        <UserPanel />
      </aside>
      <main className="flex-1 bg-gray-100 dark:bg-gray-900">
        <ChatWindow />
      </main>
    </div>
  );
};

export default Chat;
>>>>>>> 85243583e93b2f588ec4006326509cdc2c6f166f
