import React from 'react'
import {
    useMultiChatLogic,
    MultiChatSocket,
    MultiChatWindow,
} from "react-chat-engine-advanced";
import Header from "@/components/customHeader/index.jsx";

const Chat = () => {
    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "test_user“",
        "1234"
    )

    return <div style={{ flexBasis: "100%"}}>
        <MultiChatSocket { ...chatProps} />
        <MultiChatWindow {...chatProps}
         style={{ height: "100vh"}}
        renderChatHeader={(chat) => <Header chat={chat} />}/>
        </div>
};

export default Chat;