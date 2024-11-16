
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
