import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './Components/ChatFeed.jsx';
import LoginForm from './Components/LoginForm'


const projectID = 'b96d1201-89ad-423d-9e30-3a51cfff2fb2';
const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};

// infinite scroll, logout, more customizations...

export default App;
