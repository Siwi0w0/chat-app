import React from 'react';
import { ChatBubbleLeftRightIcon, PhoneIcon } from '@heroicons/react/24/solid';

function CustomerHeader() {
  return (
    <div className="chat-header">
        <div className="flexbetween">
            <ChatBubbleLeftRightIcon className="icon-chat" />
            <h3 className="header-text"></h3>
        </div>
    </div>
  )
}

export default CustomerHeader