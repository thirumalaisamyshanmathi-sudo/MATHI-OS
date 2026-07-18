/* ======================================
   MATHI OS v2.0
   SCRIPT.JS - PART 1
====================================== */

// Boot Screen

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("bootScreen").classList.add("hidden");

        document.getElementById("app").classList.remove("hidden");

    },3000);

});

// Elements

const chatBox=document.getElementById("chatBox");

const input=document.getElementById("messageInput");

const sendBtn=document.getElementById("sendBtn");

const newChatBtn=document.getElementById("newChat");

const history=document.getElementById("chatHistory");

const emojiBtn=document.getElementById("emojiBtn");

const emojiPanel=document.getElementById("emojiPanel");

const settingsPanel=document.getElementById("settingsPanel");

const themeSelect=document.getElementById("themeSelect");

const toast=document.getElementById("toast");

alert("Script Loaded");

// Storage

let conversations=

JSON.parse(

localStorage.getItem("mathi_conversations")

)||[];

let activeChat=0;

// First Chat

if(conversations.length===0){

conversations.push({

title:"New Chat",

messages:[]

});

// saveChats();

}

function saveChats() {
    localStorage.setItem(
        "mathi_conversations",
        JSON.stringify(conversations)
    );
}

loadSidebar();

openConversation(0);

emojiBtn.addEventListener("click", () => {
    emojiPanel.classList.toggle("hidden");
});

emojiPanel.addEventListener("click", (e) => {

    if (e.target.tagName === "SPAN") {

        input.value += e.target.textContent;

        input.focus();

        emojiPanel.classList.add("hidden");

    }

});

// ==========================
// Send Message
// ==========================

sendBtn.addEventListener("click",sendMessage);

input.addEventListener("keydown",e=>{

if(e.key==="Enter"){

sendMessage();

}

});

function sendMessage(){

const text=input.value.trim();

if(text==="") return;

const user={

role:"user",

text:text

};

conversations[activeChat].messages.push(user);

addMessage(user);

input.value="";

if(conversations[activeChat].messages.length===1){

conversations[activeChat].title=

text.substring(0,30);

loadSidebar();

}

setTimeout(()=>{

const ai={

role:"ai",

text:getReply(text)

};

conversations[activeChat].messages.push(ai);

addMessage(ai);

saveChats();

},600);

saveChats();

}

// ==========================
// Add Message
// ==========================

function addMessage(msg){

const div=document.createElement("div");

div.className=

msg.role==="user"

?

"user-message"

:

"ai-message";

div.innerText=msg.text;

chatBox.appendChild(div);

chatBox.scrollTop=

chatBox.scrollHeight;

}
