
//pants array created with some dummy placeholder data for now
const pantsArray = [
  {
    model: "Ragnarok",
    sizes: ["Thicc", "Chonky", "Absolute Unit"],
    style: "Viking",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "https://bit.ly/35VVjin",
    price: 59.99,
    id: 0,
  },
  {
    model: "Aesir",
    sizes: ["Chonky", "Absolute Unit", "Big Chungus"],
    style: "Viking",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "https://bit.ly/2YWBLJa",
    price: 249.99,
    id: 1,
  },
  {
    model: "Valhalla",
    sizes: ["Thicc", "Chonky", "Big Chungus"],
    style: "Viking",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "https://cdn.shopify.com/s/files/1/0234/5963/products/10_04_NFL_Pants_9575-Edit.jpg?v=1570221066",
    price: 79.99,
    id: 2,
  },
  {
    model: "Plague Doctor",
    sizes: ["Absolute Unit", "Big Chungus"],
    style: "18th Century",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "https://bit.ly/2WnBj4X",
    price: 119.99,
    id: 3,
  },
  {
    model: "TransAtlantic",
    sizes: ["Thicc", "Chonky", "Absolute Unit"],
    style: "18th Century",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "https://bit.ly/35Oe5Z0",
    price: 499.99,
    id: 4,
  },
  {
    model: "White Lung",
    sizes: ["Thicc", "Chonky", "Absolute Unit"],
    style: "18th Century",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "https://bit.ly/35RlUgp",
    price: 79.99,
    id: 5,
  },
  {
    model: "Maui from Moana",
    sizes: ["Chonky", "Absolute Unit", "Big Chungus"],
    style: "Cosplay",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "https://i.ebayimg.com/images/g/~HEAAOSw62VZzauf/s-l1600.jpg",
    price: 84.99,
    id: 6,
  },
  {
    model: "Sora from Kingdom Hearts",
    sizes: ["Thicc", "Chonky", "Absolute Unit", "Big Chungus"],
    style: "Cosplay",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "https://ae01.alicdn.com/kf/HTB1daUqL8LoK1RjSZFuq6xn0XXag/Game-Kingdom-Hearts-Sora-Cosplay-Costume-Anime-Carnival-Party-Clothing-With-Shirt-Shorts-Pants-Belt-Customization.jpg",
    price: 299.99,
    id: 7,
  },
  {
    model: "Impa from The Legend of Zelda",
    sizes: ["Thicc", "Chonky", "Big Chungus"],
    style: "Cosplay",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "https://bit.ly/3fBUwHX",
    price: 274.99,
    id: 8,
  },
  {
    model: "Leg Sleeves",
    sizes: ["Absolute Unit", "Big Chungus"],
    style: "Absurd",
    description: "Are they shoes or pants? Does it matter? Speed up your morning routine with these stylish leg sleeves and never worry about whether or not your shoes match your pants. Not recommended for those with arthritic fingers.",
    imgUrl: "http://glamazonsblog.com/wp-content/uploads/willow-smith-converse-sneaker-pants-glamazons-blog.jpg",
    price: 64.99,
    id: 9,
  },
  {
    model: "Not Pants",
    sizes: ["Thicc", "Chonky", "Absolute Unit", "Big Chungus"],
    style: "Absurd",
    description: "Every pair of our most unique offering is hand-crocheted with love by sweet grandmas. Show off your shins with style. These trousers are breezy and comfortable. They're suited to keep up with you and your active lifestyle.",
    imgUrl: "https://sadanduseless.b-cdn.net/wp-content/uploads/2018/10/crochet-pants5.jpg",
    price: 449.99,
    id: 10,
  },
  {
    model: "Bum Crack Insecurities",
    sizes: ["Thicc", "Chonky", "Absolute Unit"],
    style: "Absurd",
    description: "Worried about your pants falling down? Never again with these beauties! These pants take the high-waisted trend to the next level and put you ahead of the fashion curve. You'll turn heads everywhere you go!",
    imgUrl: "https://bit.ly/2AkBEgm",
    price: 99.99,
    id: 11,
  },
];

const customerReviews = [
  {
    name: "Jane Austen",
    rating: 1,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec.",
    model: "Valhalla",
    style: "Viking"
  },
  {
    name: "Charles Dickens",
    rating: 2,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec.",
    model: "Not Pants",
    style: "Absurd"
  },
  {
    name: "Ernest Hemingway",
    rating: 3,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec.",
    model: "Kingdom Hearts",
    style: "Cosplay"
  },
  {
    name: "Mark Twain",
    rating: 5,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec.",
    model: "Aesir",
    style: "Viking"
  },
  {
    name: "George Orwell",
    rating: 4,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec.",
    model: "Leg Sleeves",
    style: "Absurd"
  },
  {
    name: "Samuel Beckett",
    rating: 4,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec.",
    model: "White Lung",
    style: "18th Century"
  },
  {
    name: "Oscar Wilde",
    rating: 3,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec.",
    model: "TransAtlantic",
    style: "18th Century"
  },
  {
    name: "Virginia Woolf",
    rating: 5,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec.",
    model: "Plague Doctor",
    style: "18th Century"
  },
  {
    name: "Leo Tolstoy",
    rating: 2,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec.",
    model: "Ragnorok",
    style: "Viking"
  },
  {
    name: "John Steinbeck",
    rating: 3,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec.",
    model: "Bum Crack Insecurities",
    style: "Absurd"
  },
];

setTimeout(function() {
  $('#exampleModalCenter').modal();
}, 10000);

const printToDom1 = (divId, textToPrint) => {
  const selectedDiv1 = document.getElementById(divId);
  selectedDiv1.innerHTML = textToPrint;
};

const buildInventoryPage = (pantsArray) => {
  let domString = '';

    for (let i=0; i<pantsArray.length; i++) {
      let sizes = pantsArray[i].sizes.join(", ");

    domString += `
      <div class="card inventory" style="width: 18rem;">
        <img class="card-img-top" src="${pantsArray[i].imgUrl}" alt="Card image cap">
        <div class="card-body">
          <h5>${pantsArray[i].style}: ${pantsArray[i].model}</h5>
          <h6>Available Sizes: ${sizes}</h6>
          <p>${pantsArray[i].description}</p>
          <h3>$${pantsArray[i].price}</h3>
        </div>
    `;
    domString += '</div>'
  };

printToDom1("inventory", domString);
};

const printToDom = (selector,textToPrint) => {
  const selectedDiv = document.querySelector(`#${selector}`);
  selectedDiv.innerHTML = textToPrint  
};

const reviewCardBuilder = (arr) => {
  let domString = "";
  
  for (let i = 0; i < arr.length; i++) {
    let reviewImg = "";
    for (let j = 0; j < pantsArray.length; j++) {
      if (arr[i].model === pantsArray[j].model) {
        reviewImg += pantsArray[j].imgUrl
      }
      
    }
    domString += `
    <div class="card filterDiv${arr[i].style} filterDiv${arr[i].rating}">
      <img class="card-img-top" src="${reviewImg}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${arr[i].name}</h5>
        <h6>Rating: ${arr[i].rating} out of 5</h6>
        <h6>MODEL: ${arr[i].model} STYLE: ${arr[i].style}</h6>
        
        <p class="card-text">${arr[i].review}</p>
        
      </div>
    </div>
    `
    
  }
  printToDom('reviews',domString)
};

const clickEvents = () => {
  if(document.getElementById('reviews')){
    document.querySelector('#oneRating').addEventListener('click', filterRatingEvent)
    document.querySelector('#twoRating').addEventListener('click', filterRatingEvent)
    document.querySelector('#threeRating').addEventListener('click', filterRatingEvent)
    document.querySelector('#fourRating').addEventListener('click', filterRatingEvent)
    document.querySelector('#fiveRating').addEventListener('click', filterRatingEvent)
    document.querySelector('#all').addEventListener('click', displayAllReviews)
    document.querySelector('#all1').addEventListener('click', displayAllReviews)
    document.querySelector('#Viking').addEventListener('click', filterStyleReviewEvent)
    document.querySelector('#Century').addEventListener('click', filterStyleReviewEvent)
    document.querySelector('#Absurd').addEventListener('click', filterStyleReviewEvent)
    document.querySelector('#Cosplay').addEventListener('click', filterStyleReviewEvent)
  };
  if(document.getElementById('inventory')){
    document.querySelector('#Thicc').addEventListener('click', filterInvSizeEvent);
    document.querySelector('#Chonky').addEventListener('click', filterInvSizeEvent);
    document.querySelector('#bigChungus').addEventListener('click', filterInvSizeEvent);
    document.querySelector('#absoluteUnit').addEventListener('click', filterInvSizeEvent);
    document.querySelector('#allSizes').addEventListener('click', filterInvSizeEvent);
    document.querySelector('#Century1').addEventListener('click', filterInvStyleEvent);
    document.querySelector('#Absurd1').addEventListener('click', filterInvStyleEvent);
    document.querySelector('#Viking1').addEventListener('click', filterInvStyleEvent);
    document.querySelector('#Cosplay1').addEventListener('click', filterInvStyleEvent);
    document.querySelector('#allStyles').addEventListener('click', filterInvStyleEvent);
  };
  if(document.getElementById('modelOne')){
    document.querySelector('#submitOrderButton').addEventListener('click', submitOrderForm);
    document.querySelector('#calculate').addEventListener('click', calculateOrderForm);
  };
};


const filterRatingEvent = (event) => {
  
  const tempRating = [];
  let rating = '' ;
  
  switch (event.target.id) {
    case 'oneRating': rating = 1
      break;
    case 'twoRating': rating = 2     
      break;
    case 'threeRating': rating = 3
      break;
    case 'fourRating': rating = 4
      break;
    case 'fiveRating': rating = 5
      break;
  };
  
  for (let i = 0; i < customerReviews.length; i++) {
    if (customerReviews[i].rating === rating){
      tempRating.push(customerReviews[i])
    }
  };
  reviewCardBuilder(tempRating)
};  

const filterStyleReviewEvent = (event) => {
  
  const tempStyle = [];
  let style = "";

  if (event.target.id === 'Century' ) {
    style = "18th Century"
  } else {
    style = event.target.id
  }
  
  for (let i = 0; i < customerReviews.length; i++) {
    if (customerReviews[i].style === style) {
      tempStyle.push(customerReviews[i])
    }    
  }
  reviewCardBuilder(tempStyle)
};

const filterInvSizeEvent = (event) => {
  let clickId = ""
  let tempSizeCollection = [];
  

  switch (event.target.id) {
    case 'Chonky': clickId = "Chonky"
      break;
    case 'Thicc': clickId = "Thicc"
      break;
    case 'bigChungus': clickId = "Big Chungus"
      break;
    case 'absoluteUnit': clickId = "Absolute Unit"
      break;
  }

  if (event.target.id === "allSizes") {
    buildInventoryPage(pantsArray);
    return
  }

  pantsArray.forEach((pant) => {
    if (pant.sizes.includes(clickId)) {
      tempSizeCollection.push(pant)
    }
  })
  buildInventoryPage(tempSizeCollection)
};

const filterInvStyleEvent = (event) => {
  
  let tempStyleCollection = [];
  let style = "";

  switch (event.target.id) {
    case 'Century1': style = "18th Century"
      break;
    case 'Absurd1': style = "Absurd"
      break;
    case 'Viking1': style = "Viking"
      break;
    case 'Cosplay1': style = "Cosplay"
      break;
  }

  if (event.target.id === "allStyles") {
    buildInventoryPage(pantsArray);
    return;
  }
 
  for (let i=0; i<pantsArray.length; i++) {
    if (pantsArray[i].style == style) {
      tempStyleCollection.push(pantsArray[i])
    }
  }

  buildInventoryPage(tempStyleCollection)
};

const displayAllReviews = (event) => {
  reviewCardBuilder(customerReviews)
};

// SD --- ORDER FORM SUBMIT BUTTON 
const submitOrderForm = (event) => {
  document.getElementById('orderForm').reset();
};

const calculateOrderForm = (event) => {
  
  modelpriceOne = 0;
  modelpriceTwo = 0;
  modelpriceThree = 0;
  modelpriceFour = 0;
  shipping = 0;
  
  if (document.getElementById("quantityOne").value !==  "Quantity") {
    for (let i = 0; i < pantsArray.length; i++){
      if (pantsArray[i].model ===  document.getElementById("modelOne").value){
        modelpriceOne = pantsArray[i].price
      }
    }
  };
  if (document.getElementById("quantityTwo").value !==  "Quantity") {
    for (let i = 0; i < pantsArray.length; i++){
      if (pantsArray[i].model ===  document.getElementById("modelTwo").value){
        modelpriceTwo = pantsArray[i].price
      }
    }
  };
  if (document.getElementById("quantityThree").value !==  "Quantity") {
    for (let i = 0; i < pantsArray.length; i++){
      if (pantsArray[i].model ===  document.getElementById("modelThree").value){
        modelpriceThree = pantsArray[i].price
      }
    }
  };
  if (document.getElementById("quantityFour").value !==  "Quantity") {
    for (let i = 0; i < pantsArray.length; i++){
      if (pantsArray[i].model ===  document.getElementById("modelFour").value){
        modelpriceFour = pantsArray[i].price
      }
    }
  };  

  switch (document.getElementById("inputShipping").value) {
    case 'First Class +$3.00': shipping = 3      
      break;
    case 'Priority +$7.95':  shipping = 7.95      
      break;
    case 'UPS +$13.00': shipping = 13      
      break;
    case 'Priority Express +$40.00':  shipping = 40
      break;
  }

  let lineOne = 0;
  let lineTwo = 0;
  let lineThree = 0;
  let lineFour = 0;

  let modelOne = document.getElementById("modelOne").value;
  let modelTwo = document.getElementById("modelTwo").value;
  let modelThree = document.getElementById("modelThree").value;
  let modelFour = document.getElementById("modelFour").value;
  
  if (modelOne !== "Style") {
    if (document.getElementById("quantityOne").value !== 'Quantity') { 
      lineOne = document.getElementById("quantityOne").value * modelpriceOne
    }
  };
  if (modelTwo !== "Style") {
    if (document.getElementById("quantityTwo").value !== 'Quantity') { 
      lineTwo = document.getElementById("quantityTwo").value * modelpriceTwo
    }
  };
  if (modelThree !== "Style") {
    if (document.getElementById("quantityThree").value !== 'Quantity') { 
      lineThree = document.getElementById("quantityThree").value * modelpriceThree
    }
  };
  if (modelFour !== "Style") {
    if (document.getElementById("quantityFour").value !== 'Quantity') { 
      lineFour = document.getElementById("quantityFour").value * modelpriceFour
    }
  };
  
  
  
  let totalCost = lineOne + lineTwo + lineThree + lineFour + shipping 
  
  if (document.getElementById("inputCouponCode").value ==='UNICORNSAREREAL') {
    totalCost = totalCost * .9
  }

  document.getElementById('inputPlaceholder').innerHTML = `$${totalCost.toFixed(2)}`

};

// ==============================Nikhil=============================================
let images= [];
let models= [];
x = 0;

const addImageToAboutNate=()=>{
   if (document.querySelector(".aboutImg")){
    let img = document.querySelector(".aboutImg");    
    img.src = 'https://previews.123rf.com/images/elnur/elnur1311/elnur131100481/23538761-funny-man-with-trousers-isolated-on-white.jpg';
  };
};

const buildDomString=(randomNumber)=>{
    let saleString="";
    saleString += 
    `<div class="saleText">
    <h2 class="big">BIG<h1>
    <h2 class="sale">SALE<h1>
    <p> <span class="entireSection">20% OFF</span></p>
    <P class="shopNow"> ${pantsArray[randomNumber].model}</p>
    <P class="original">Price: ${pantsArray[randomNumber].price}</p>
    <P class="shopNow">$ ${calculateDiscount(pantsArray[randomNumber].price)}</p>
    </div>
    `;
    return saleString;
};

const saleDetails=(randomNumber)=>{
    let model= document.querySelector(".saleDetails");
    model.innerHTML= buildDomString(randomNumber);

};

const calculateDiscount=(price)=>{
return (price * .8).toFixed(2);

};

const addSaleImg=()=>{
    let img = document.querySelector(".saleImg");
    randomNumber = pickRandomNumber(pantsArray.length)
    img.src = images[randomNumber];
    saleDetails(randomNumber);

}

const pickRandomNumber=(num)=>{
  return Math.floor(Math.random() * Math.floor(num));

};

const changeImage=()=>
{
    let img = document.querySelector(".carousel"); 
    let model= document.querySelector(".centered");   
    img.src = images[x];
    model.innerHTML= models[x];    
    x++;

    if(x >= images.length){
        x = 0;
    } 

    fadeImg(img, 1000, true);
    setTimeout("changeImage()", 5000);
};

const fadeImg=(el, val, fade)=>{
    if(fade === true){
        val--;
    }else{
        val ++;
    }

    if(val > 0 && val < 100){
        el.style.opacity = val / 100;
        setTimeout(function(){fadeImg(el, val, fade);}, 10);
    }
};
const imageCarousel=()=>{
    pantsArray.forEach(pant => {
        images.push(pant.imgUrl);
        models.push(pant.model);
    })
    console.log(images);
    setTimeout("changeImage()", 1000);
};
// ==============================Nikhil End=============================================

const init = () => {
  if (document.getElementById('index')){
    imageCarousel(); //Nikhil
    addImageToAboutNate(); //Nikhil
    addSaleImg();//Nikhil  
  };   
  if(document.getElementById('reviews')){
    reviewCardBuilder(customerReviews);
  };
  if(document.getElementById('inventory')){
  buildInventoryPage(pantsArray);
  };
  clickEvents();  
};

init();
