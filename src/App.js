import { useState } from 'react';
import NewMessageForm from "./components/NewMessageForm";
import MessageList from './components/MessageList';

function App() {
    const [messages, setMessages] = useState([])

    const handleSend = (NewMessage) => {
        setMessages([NewMessage, ...messages]);
    };

    return ( 
    <div className = "App" >
        <NewMessageForm onSend={handleSend} />
        <MessageList messages={messages} />
    </div>
    );
};

export default App;