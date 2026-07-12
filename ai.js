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
// ===============================
// Create New Chat
// ===============================

function createNewChat(){

    const chat={

        id:Date.now(),

        title:"New Chat",

        messages:[]

    };

    conversations.unshift(chat);

    currentChat=chat.id;

    saveChats();

    renderSidebar();

    loadConversation(currentChat);

}
// ===============================
// Save
// ===============================

function saveChats(){

localStorage.setItem(

"mathi_ai_v3",

JSON.stringify(

conversations

)

);

}
// ===============================
// Find Chat
// ===============================

function getCurrentChat(){

return conversations.find(

c=>c.id===currentChat

);

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
// ======================================
// PART 2
// Sidebar + Conversation Loader
// ======================================

function renderSidebar(){

    history.innerHTML="";

    conversations.forEach(chat=>{

        const item=document.createElement("div");

        item.className="history-item";

        item.innerHTML=`
            💬 ${chat.title}
        `;

        item.onclick=()=>{

            currentChat=chat.id;

            loadConversation(chat.id);

        };

        history.appendChild(item);

    });

}

function loadConversation(id){

    const chat=conversations.find(c=>c.id===id);

    if(!chat) return;

    chatBox.innerHTML="";

    if(chat.messages.length===0){

        chatBox.innerHTML=`
        <div class="ai">
            👋 Hello Shanmathi! Start your conversation.
        </div>
        `;

        return;

    }

    chat.messages.forEach(msg=>{

        const div=document.createElement("div");

        div.className=msg.role;

        div.innerText=msg.text;

        chatBox.appendChild(div);

    });

    chatBox.scrollTop=chatBox.scrollHeight;

}

newChat.onclick=()=>{

    createNewChat();

};
