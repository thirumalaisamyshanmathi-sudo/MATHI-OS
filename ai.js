// ================================
// MATHI AI v2
// ================================

const chatBox = document.getElementById("chatBox");
const input = document.getElementById("message");
const sendBtn = document.getElementById("send");
const history = document.getElementById("history");
const newChat = document.getElementById("newChat");

let chats = JSON.parse(localStorage.getItem("mathi_ai")) || [];

loadHistory();

// ----------------------------
// Send Message
// ----------------------------

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        sendMessage();

    }

});

function sendMessage(){

    const text=input.value.trim();

    if(text==="") return;

    addUser(text);

    input.value="";

    setTimeout(()=>{

        const reply=getReply(text);

        addAI(reply);

        saveChat(text,reply);

    },500);

}

// ----------------------------
// User Message
// ----------------------------

function addUser(msg){

    const div=document.createElement("div");

    div.className="user";

    div.innerText=msg;

    chatBox.appendChild(div);

    chatBox.scrollTop=chatBox.scrollHeight;

}

// ----------------------------
// AI Message
// ----------------------------

function addAI(msg){

    const div=document.createElement("div");

    div.className="ai";

    div.innerText=msg;

    chatBox.appendChild(div);

    chatBox.scrollTop=chatBox.scrollHeight;

}
// ----------------------------
// AI Reply Logic
// ----------------------------

function getReply(text){

    const msg=text.toLowerCase();

    if(msg.includes("hi") || msg.includes("hello")){
        return "👋 Hello Shanmathi! Nice to see you again.";
    }

    if(msg.includes("who are you")){
        return "🤖 I'm MATHI AI. Your personal AI assistant.";
    }

    if(msg.includes("time")){
        return "🕒 Current Time : " + new Date().toLocaleTimeString();
    }

    if(msg.includes("date")){
        return "📅 Today : " + new Date().toLocaleDateString();
    }

    if(msg.includes("love")){
        return "💜 Love makes life beautiful.";
    }

    return "🤖 I understood your message. Gemini AI integration will be added soon!";
}

// ----------------------------
// Save Chat
// ----------------------------

function saveChat(user,ai){

    chats.push({

        user:user,

        ai:ai,

        time:new Date().toLocaleString()

    });

    localStorage.setItem(

        "mathi_ai",

        JSON.stringify(chats)

    );

    loadHistory();

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
