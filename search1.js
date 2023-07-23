let product = {
    data:[{
        productName : "ASUS STRIX SCAR 18 (2023)",
        category : "ASUS",
        price : "2999$",
        image : "ROG STRIX SCAR 18.png",
    },
    {
        productName : "ASUS ZEPHYRUS M16",
        category : "ASUS",
        price : "1669$",
        image : "ROG ZEPHYRUS M 16.png",
    },
    {
        productName : "MSI TITAN GT77 HX 13V",
        category : "MSI",
        price : "3999$",
        image : "MSI TITAN GT77.png",
    },
    {
        productName : "ACER NITRO 5 (2022)",
        category : "ACER",
        price : "1249$",
        image : "nitro5.webp",
    },
    {
        productName : "ThinkPad P16 (16” Intel) Mobile Workstation",
        category : "LENOVO",
        price : "1869$",
        image : "lenovop16.png",
    },
    {
        productName : "MACBOOK PRO 13 INCH",
        category : "MACOS",
        price : "1699$",
        image : "MAC.png",
    },
    {
        productName : "MACBOOK PRO 16 INCH",
        category : "MACOS",
        price : "2599$",
        image : "MAC 16.webp",
    },
],
};

for(let i of product.data){
    //create card
    let card = document.createElement("div");
    //card should have category and should stay hidden initially
    card.classList.add("card",i.category,"hide");
    //Image div
    let imgcontainer = document.createElement("div");
    imgcontainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgcontainer.appendChild(image);
    card.appendChild(imgcontainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "pricing : "+i.price;
    container.appendChild(price); 
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}
//Parameter passed from button(Parameter same as category)
function filterProduct(value){
    //button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        //check if value equal to innerText
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }else{
            button.classList.remove("active");
        }
    });
    //select all card
    let element = document.querySelectorAll(".card");
    //loop through all card
    element.forEach((element) =>{
        if(value == "all"){
            element.classList.remove("hide");
        }
        else{
            //check if element contains category
            if(element.classList.contains(value)){
                //display element based on category
                element.classList.remove("hide");
            }else{
                //hide other element
                element.classList.add("hide");
            }
        }
    });
}
//search button click
document.getElementById("search").addEventListener("click", () =>{
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards =  document.querySelectorAll(".card");

    //loop through all elements
    elements.forEach((element,index)=>{
        //check if text includes the search value
        if(element.innerText.includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hide");
        }
        else{
            cards[index].classList.add("hide");
        }
    });
});

//Initially display all products
window.onload = () =>{
    filterProduct("all");
};