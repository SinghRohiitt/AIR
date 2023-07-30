const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
    id: 1,
    tittle: "Air Force",
    price: 119,
    colors: [
        {
        code: "black",
        img: "air.png",
        },
        {
        code: "darkblue",
        img: "air2.png",
        },
    ],
    },
    {
    id: 2,
    tittle: "Air Jordan",
    price: 149,
    colors: [
        {
        code: "lightgray",
        img: "jordan.png",
        },
        {
        code: "green",
        img: "jordan2.png",
        },
    ],
    },
    {
    id: 3,
    tittle: "Blazer",
    price: 109,
    colors: [
        {
        code: "lightgray",
        img: "blazer.png",
        },
        {
        code: "green",
        img: "blazer2.png",
        },
    ],
    },
    {
    id: 4,
    tittle: "Crater",
    price: 129,
    colors: [
        {
        code: "black",
        img: "crater.png",
        },
        {
        code: "lightgray",
        img: "crater2.png",
        },
    ],
    },
    {
    id: 5,
    tittle: "Hippie",
    price: 99,
    colors: [
        {
        code: "gray",
        img: "hippie.png",
        },
        {
        code: "black",
        img: "hippie2.png",
        },
    ],
    },
];
let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTittle = document.querySelector(".productTittle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    
    choosenProduct = products[index];

    currentProductTittle.textContent = choosenProduct.tittle;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) =>{
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});


currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
      currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size,index)=>{
  size.addEventListener("click",()=>{
    currentProductSizes.forEach((size)=>{
      size.style.backgroundColor = "white"
      size.style.color = "black"
    });
    size.style.backgroundColor = "black"
    size.style.color = "white"
  });
});

const productButton = document.querySelector(".productButton");
const paymment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
  paymment.style.display = "flex";
});

close.addEventListener("click",()=>{
  paymment.style.display = "none";
});

 
