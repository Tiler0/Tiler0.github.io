let starter = document.getElementById("starter");

let imgArray = [
    "assets/imgs/Asset20.png",
    "assets/imgs/Asset21.png",
    "assets/imgs/Asset22.png",
    "assets/imgs/Asset23.png",
    "assets/imgs/Asset24.png",
    "assets/imgs/Asset25.png",
    "assets/imgs/Asset26.png",
    "assets/imgs/Asset27.png"
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