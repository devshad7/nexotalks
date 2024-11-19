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
