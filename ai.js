// ================================
// MATHI AI v2
// ================================

const chatBox = document.getElementById("chatBox");
const input = document.getElementById("message");
const sendBtn = document.getElementById("send");
const history = document.getElementById("history");
const newChat = document.getElementById("newChat");

// ===============================
// MATHI AI v3
// Conversation System
// ===============================

let conversations =
JSON.parse(
localStorage.getItem("mathi_ai_v3")
) || [];

let currentChat = null;

// Create first chat

if(conversations.length===0){

    createNewChat();

}else{

    currentChat =
    conversations[0].id;

    renderSidebar();

    loadConversation(currentChat);

}

// ----------------------------
// Load History
// ----------------------------

function loadHistory(){

    history.innerHTML="";

    chats.forEach((chat,index)=>{

        const item=document.createElement("div");

        item.className="history-item";

        item.innerText=chat.user;

        item.onclick=()=>{

            chatBox.innerHTML="";

            addUser(chat.user);
            addAI(chat.ai);

        };

        history.appendChild(item);

    });

}

// ----------------------------
// New Chat
// ----------------------------

newChat.addEventListener("click",()=>{

    chatBox.innerHTML=`
    <div class="ai">
        👋 Hello Shanmathi! New chat started.
    </div>
    `;

});

// ----------------------------
// Auto Scroll
// ----------------------------

chatBox.scrollTop=chatBox.scrollHeight;
