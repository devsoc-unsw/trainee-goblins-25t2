// javascript file for chat

//import React from "react";

const sendButton = document.getElementById('button-input');

// append new message to html
function appendNewSentMessage() {
    // create a new Message element
    const newMessage = document.createElement('div');
    newMessage.className = 'message sent';
    const textArea = document.getElementById('text-input');
    newMessage.textContent = textArea.value;
    textArea.value = '';

    // Add to the messages container
    document.getElementById('messages').appendChild(newMessage);
}

sendButton.addEventListener("click", appendNewSentMessage);