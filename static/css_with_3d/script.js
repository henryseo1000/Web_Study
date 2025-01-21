let cardList = null;
let mode = "hovering";
const card = document.getElementById("cardContainer");
const spin_fast_button = document.getElementById("spinFastButton");
const spin_slow_button = document.getElementById("spinSlowButton");
const rotate_button = document.getElementById("3DButton");
let isDragging = false;

let mouseX;
let mouseY;

const getData = async() => {
    const res = await fetch("https://sakura-api.onrender.com/cards", {
        method: "GET",
        headers: {
            "Accept" : "*/*",
            "Access-Control-Allow-Origin" : "*"
        }
    });
    const data = await res.json();
    console.log(data);
};

getData();

function handleHold(e) {
    isDragging = true;

    if (isDragging) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }
}

spin_fast_button.addEventListener("click", (e) => {
    if (mode !== "fastSpinner") {
        if (mode === "hovering") {
            card.classList.remove("card_container");
        }
        else if (mode === "slowSpinner") {
            card.classList.remove("card_slow_spin_container");
        }
        card.classList.add("card_fast_spin_container");
        mode = "fastSpinner";
    }
    else {
        card.classList.remove("card_fast_spin_container");
        card.classList.add("card_container");
        mode = "hovering";
    }
});

spin_slow_button.addEventListener("click", (e) => {
    if(mode !== "slowSpinner") {
        if (mode === "hovering") {
            card.classList.remove("card_container");
        }
        else if (mode === "fastSpinner") {
            card.classList.remove("card_fast_spin_container");
        }
        card.classList.add("card_slow_spin_container");
        mode = "slowSpinner"
    }
    else {
        card.classList.remove("card_slow_spin_container");
        card.classList.add("card_container");
        mode = "hovering";
    }
})

rotate_button.addEventListener("click", (e) => {
    if (mode !== "3D") {
        
    }
    else {
        document.addEventListener("mousedown", handleHold);
    }
});