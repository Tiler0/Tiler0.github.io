let starter = document.getElementById("starter");

let imgArray = [
    "assets/imgs/Assets20.png",
    "assets/imgs/Assets21.png",
    "assets/imgs/Assets22.png",
    "assets/imgs/Assets23.png",
    "assets/imgs/Assets24.png",
    "assets/imgs/Assets25.png",
    "assets/imgs/Assets26.png",
    "assets/imgs/Assets27.png"
]
let count = 0;

function animate() {
    starter.src = imgArray[count];

    count++;

    if (imgArray.length == count) {
        count = 0;
    }
}
setInterval(animate, 100);