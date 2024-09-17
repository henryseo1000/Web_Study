let container = document.querySelector(".container");
let gridButton = document.getElementById("submit-grid");
let clearGridButton = document.getElementById("clear-grid");
let gridWidth = document.getElementById("width-range");
let gridHeight = document.getElementById("height-range");
let colorButton = document.getElementById("color-input");
let eraseBtn = document.getElementById("erase-btn");
let paintBtn = document.getElementById("paint-btn");
let saveBtn = document.getElementById("save-btn");
let widthValue = document.getElementById("width-value");
let heightValue = document.getElementById("height-value");

let events = {
    mouse : {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup"
    },
    touch: {
        down: "touchstart",
        mobe: "touchmove",
        up: "touchend"
    },
}

let deviceType = "";

let draw = false;
let erase = false;

const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch(error) {
        deviceType = "mouse";
        return false;
    }
}

isTouchDevice();

gridButton.addEventListener("click", () => {
    container.innerHTML = "";
    let count = 0;
    for(let i = 0; i < gridHeight.value; i++){
        count += 2;
        let div = document.createElement("div");
        div.classList.add("gridRow")

        for(let j = 0; j < gridWidth.value; j++){
            count += 2;
            let col = document.createElement("div");
            col.classList.add("gridCol");
            col.setAttribute("id", `gridCol${count}`);
            col.addEventListener(events[deviceType].down, () => {
                draw = true;
                if (erase) {
                    col.style.backgroundColor = "transparent"
                } else {
                    col.style.backgroundColor = colorButton.value;
                }
            });

            col.addEventListener(events[deviceType].move, (e) => {
                let elementId = document.elementFromPoint(
                    !isTouchDevice() ? e.clientX : e.touches[0].clientX,
                    !isTouchDevice() ? e.clientY : e.touches[0].clientY
                ).id;

                checker(elementId);
            });

            col.addEventListener(events[deviceType].up, (e) => {
                draw = false;
            });

            div.appendChild(col);
        }

        container.appendChild(div);
    }
});

function checker(elementId){
    let gridColumns = document.querySelectorAll(".gridCol");
    gridColumns.forEach((element) => {
        if(elementId == element.id) {
            if (draw && !erase) {
                element.style.backgroundColor = colorButton.value;
            }
            else if (draw && erase) {
                element.style.backgroundColor = "transparent";
            }
        }
    });
}

function saveAs(url, fileName) {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function makeDivToImageFile() {
    html2canvas(container, {
        allowTaint: true,
        useCORS: true,
        width: container.offsetWidth,
        height: container.offsetHeight,
        scale: 1
    }).then(function(canvas) {
        const imageUrl = canvas.toDataURL('image/jpeg');
        saveAs(imageUrl, 'myfile.jpg') 
    }).catch(function (error) {
        console.log(error);
    })
}

clearGridButton.addEventListener("click", () => {
    container.innerHTML = "";
})

eraseBtn.addEventListener("click", () => {
    erase = true;
})

paintBtn.addEventListener("click", () => {
    erase = false;
})

saveBtn.addEventListener("click", () => {
    makeDivToImageFile();
})

gridWidth.addEventListener("input", () => {
    widthValue.innerHTML = gridWidth.value < 9 ? `0${gridWidth.value}` : gridWidth.value;
})

gridHeight.addEventListener("input", () => {
    heightValue.innerHTML = gridHeight.value < 9 ? `0${gridHeight.value}` : gridHeight.value;
})

window.onload = () => {
    gridWidth.value = 0;
    gridHeight.value = 0;
};