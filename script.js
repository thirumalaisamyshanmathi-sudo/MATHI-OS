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
// Desktop Apps
// ==============================

const apps =
document.querySelectorAll(".icon");

apps.forEach((app)=>{

    app.addEventListener(

        "click",

        ()=>{

            alert(

                app.innerText +

                "\n\nComing in MATHI OS v3.2 🚀"

            );

        }

    );

});

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
