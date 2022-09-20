// var text = prompt("Mark kk !")

// if (text.match(/yomon/gi)) {
//     console.log("O'zin shunaqasan");
// }else {
//     console.log("Rahmat");
// }

// let numObj = 123.456789;

// console.log(numObj.toFixed(0));

// let isMarried = confirm("Uylanganmisiz !")

// if (isMarried == true) {
//     console.log("Battar bo'l");
// }else {
//     console.log("To'y qachon ");
// }

// let elInp = document.querySelector("#input")
// let elBtn = document.querySelector(".btn")

// elBtn.addEventListener("click", function (evt) {
//     evt.preventDefault();

//     let elValue = elInp.value;

//     console.log("elValue");
// })

// let a = +prompt("Sizda nech pul bor (Sum)");

// let yol = 500;
// let mehmon = 250;
// let muzey = 120;

// let b = (yol + mehmon) * 11000 + muzey * 11800;


// if (a >= b) {
//   console.log("Oq yo'l");
// } else {
//   console.log("Sabr kerak ekan");
// }



let elSpan = document.querySelector(".span");
let travelSum = +prompt("Summani kiriting");
let elDollar = (750 * 11000)
let elEvro = (120 * 10900)

if (elDollar + elEvro <= travelSum) {
    elSpan.textContent = ("Sayohatga chiqing");
} else if (isNaN(travelSum) == true) {
    elSpan.textContent = ("Son kiriting");
} else{
    elSpan.textContent = ("Sayohatga chiqmang");
}