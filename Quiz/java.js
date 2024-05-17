function togglePopup() {
    const popup = document.getElementById("previewMenu");
    popup.classList.toggle("active");
    document.body.classList.toggle("popup-open");
    document.body.classList.toggle("popup-active");

    const backgroundElements = document.querySelectorAll("nav, .HomeContent, .btnShopNow");
    backgroundElements.forEach(element => {
        element.classList.toggle("no-pointer-events");
    });
}

function toggleRemove() {
    const popup = document.getElementById("previewMenu");
    popup.classList.remove("active");
    document.body.classList.remove("popup-active");
    document.body.classList.remove("popup-open");



}

var food1 = {
    image: "FoodPic/y1.png",
    name: "Y1",
    price: "₱95",
    description: "Yes With java rice"
};

var food2 = {
    image: "FoodPic/y1.png",
    name: "Y2",
    price: "₱139",
    description: "Yes na yes with java rice"
};

var food3 = {
    image: "FoodPic/y3.png",
    name: "Y3",
    price: "₱129",
    description: "Yes + Hotdog with JavaRice"
};

var food4 = {
    image: "FoodPic/y4.png",
    name: "Y4",
    price: "₱129",
    description: "Yes + Tenga with JavaRice"
};

var food5 = {
    image: "FoodPic/y5.png",
    name: "Y5",
    price: "₱129",
    description: "Yes + Isaw with JavaRice"
};

var food6 = {
    image: "FoodPic/y6.png",
    name: "Y6",
    price: "₱129",
    description: "Yes + Isaw manok with JavaRice"
};

var food7 = {
    image: "FoodPic/y7.png",
    name: "Y7",
    price: "₱235",
    description: "JavaRice With with Friends"
};

var food8 = {
    image: "FoodPic/y8.png",
    name: "Y8",
    price: "₱229",
    description: "INIHAW NA LIEMPO WITH JAVA RICE"
};


var food9 = {
    image: "FoodPic/y9.png",
    name: "Y9",
    price: "₱175",
    description: "Chiken BBQ WITH JAAVA RICE"
};

var food10 = {
    image: "FoodPic/y10.png",
    name: "Y10",
    price: "₱125",
    description: "Inihaw na porkchop with java rice"
};

var food11 = {
    image: "FoodPic/y11.png",
    name: "Y11",
    price: "₱135",
    description: "Yes + Isaw BILOG with Jaava Rice"
};

var food12 = {
    image: "FoodPic/y13.png",
    name: "Y13",
    price: "₱129",
    description: "Yes + Bulaklak with Java Rice"
};

let currentProduct = null;
const shoppingCart = [];

function displayProduct(product) {
    togglePopup();
    currentProduct = product;
    document.getElementById("product_img").src = product.image;
    document.getElementById("product_name").innerHTML = product.name;
    document.getElementById("product_price").innerHTML = product.price;
    document.getElementById("product_desc").innerHTML = product.description;
}
document.getElementById("someButton").addEventListener("click", () => {
    displayProduct(products[0]); // Displaying the first product, change this according to your usage
});