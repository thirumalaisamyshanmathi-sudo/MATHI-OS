// ==============================
// MATHI OS v3.1 Script
// ==============================

const PASSWORD = "Sabarishanmathi";

// Auto Login
window.onload = () => {

    if (localStorage.getItem("mathi_login") === "true") {

        document.getElementById("loginScreen").classList.add("hidden");
        document.getElementById("desktop").classList.remove("hidden");

    }

    updateClock();

    setInterval(updateClock, 1000);

}

// ==============================
// LOGIN
// ==============================

function login() {

    const password =
        document.getElementById("password").value;

    const error =
        document.getElementById("error");

    if (password === PASSWORD) {

        document.getElementById("loginScreen")
            .classList.add("hidden");

        document.getElementById("desktop")
            .classList.remove("hidden");

        localStorage.setItem(
            "mathi_login",
            "true"
        );

    } else {

        error.innerHTML =
            "Wrong Password ❌";

    }

}

// ==============================
// CLOCK
// ==============================

function updateClock() {

    const now = new Date();

    const time =
        now.toLocaleTimeString(
            [],
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );

    document.getElementById("clock")
        .innerHTML = time;

}

// ==============================
// START MENU
// ==============================

const startBtn =
    document.getElementById("startBtn");

const startMenu =
    document.getElementById("startMenu");

startBtn.onclick = () => {

    startMenu.classList.toggle("hidden");

}

// Close Menu

document.addEventListener(
    "click",
    function(e){

        if(
            !startBtn.contains(e.target)
            &&
            !startMenu.contains(e.target)
        ){

            startMenu.classList.add(
                "hidden"
            );

        }

    }
);

// ==============================
// Logout
// ==============================

function logout(){

    localStorage.removeItem(
        "mathi_login"
    );

    location.reload();

}
// ---------------------
// NOTES
// ---------------------

function openWindow(name){

document
.getElementById(name)
.classList.remove("hidden");

}

function closeWindow(name){

document
.getElementById(name)
.classList.add("hidden");

}

function saveNotes(){

const note=

document
.getElementById("notesText")
.value;

localStorage.setItem(
"mathi_notes",
note
);

alert("Notes Saved 💜");

}

window.addEventListener(
"load",

()=>{

const saved=

localStorage.getItem(
"mathi_notes"
);

if(saved){

document
.getElementById("notesText")
.value=saved;

}

});
// ======================
// CAMERA
// ======================

let stream;

async function openCamera(){

    openWindow("cameraWindow");

    try{

        stream = await navigator.mediaDevices.getUserMedia({

            video:true

        });

        document.getElementById("camera").srcObject = stream;

    }

    catch(err){

        alert("Camera permission denied!");

    }

}

function capturePhoto(){

    const video =
    document.getElementById("camera");

    const canvas =
    document.getElementById("canvas");

    canvas.width = video.videoWidth;

    canvas.height = video.videoHeight;

    canvas
    .getContext("2d")
    .drawImage(
        video,
        0,
        0
    );

    const a =
    document.createElement("a");

    a.href =
    canvas.toDataURL("image/png");

    a.download =
    "mathi_photo.png";

    a.click();

}
// ================= AI CHAT =================

function openAI() {
    window.location.href = "ai.html";
}

function sendMessage() {

    const input = document.getElementById("userInput");
    const chat = document.getElementById("chatArea");

    if (input.value.trim() === "") return;

    // User Message
    const userMsg = document.createElement("div");
    userMsg.className = "user-message";
    userMsg.innerText = input.value;
    chat.appendChild(userMsg);

    const message = input.value.toLowerCase();

    input.value = "";

    chat.scrollTop = chat.scrollHeight;

    // AI Reply
    setTimeout(() => {

        const aiMsg = document.createElement("div");
        aiMsg.className = "ai-message";

        if(message.includes("hi") || message.includes("hello")){
            aiMsg.innerText = "👋 Hello Shanmathi! How can I help you today?";
        }
        else if(message.includes("name")){
            aiMsg.innerText = "🤖 My name is MATHI AI.";
        }
        else if(message.includes("time")){
            aiMsg.innerText = "🕒 " + new Date().toLocaleTimeString();
        }
        else if(message.includes("date")){
            aiMsg.innerText = "📅 " + new Date().toLocaleDateString();
        }
        else{
            aiMsg.innerText = "🤖 Sorry! Offline AI is running. Real AI support will be added soon.";
        }

        chat.appendChild(aiMsg);

        chat.scrollTop = chat.scrollHeight;

    },500);

}

// Press Enter
document.addEventListener("DOMContentLoaded",()=>{

    const input=document.getElementById("userInput");

    if(input){

        input.addEventListener("keypress",(e)=>{

            if(e.key==="Enter"){

                sendMessage();

            }

        });

    }

});
