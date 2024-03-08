
let image_hide_1 = document.getElementById("image_1");
image_hide_1.classList.add("img");


function darkBtn(){
    let mainBgColor = document.getElementById("mainBg");
    mainBgColor.style.backgroundColor = "#000000"

    let para = document.getElementById("para");
    para.style.color = "#ffffff";

    let darkBtn = document.getElementById("darkBtn");
    darkBtn.style.backgroundColor = "#ffffff"
    darkBtn.style.color = "#000000"

    let head = document.getElementById("head");
    head.textContent = "Dark Mode Is On";
    head.style.color = "#ffffff"

    // let image = document.getElementById("image");
    image_hide_1.classList.remove("img");
    let image_hide_2 = document.getElementById("image_2");
    image_hide_2.classList.add("img");
}
function lightBtn(){
    let mainBgColor = document.getElementById("mainBg");
    mainBgColor.style.backgroundColor = "#ffffff"

    let para = document.getElementById("para");
    para.style.color = "#000000";

    let darkBtn = document.getElementById("darkBtn");
    darkBtn.style.backgroundColor = "#000000"
    darkBtn.style.color = "#ffffff"

    let head = document.getElementById("head");
    head.textContent = "Light Mode Is On";
    head.style.color = "#000000"

    // let image = document.getElementById("image");
    image_hide_1.classList.add("img");
    let image_hide_2 = document.getElementById("image_2");
    image_hide_2.classList.remove("img");
}
