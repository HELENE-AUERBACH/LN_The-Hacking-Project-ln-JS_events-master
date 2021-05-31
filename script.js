let counter = 0;
let footerElement = document.getElementsByTagName("footer")[0];
footerElement.addEventListener("click", function() {
  counter++;
  console.log(`clic numéro ${counter}`);
});
let navbarTogglerBtn = document.getElementsByClassName("navbar-toggler")[0];
navbarTogglerBtn.addEventListener("click", function() {
  let navbarHeaderElement = document.getElementById("navbarHeader");
  navbarHeaderElement.classList.toggle("collapse");
});
let cardImages = document.getElementsByClassName("card-img-top");
let nbCardImages = cardImages.length;
console.log(`number of cards : ${nbCardImages}`);
console.log(`cardImages[0].nextElementSibling.children[1].children[0].children[1].getAttribute("class") : ${cardImages[0].nextElementSibling.children[1].children[0].children[1].getAttribute("class")}`);
let firstCardImageEditBtn = cardImages[0].nextElementSibling.children[1].children[0].children[1];
firstCardImageEditBtn.addEventListener("click", function() {
  let firstCardImageText = cardImages[0].nextElementSibling.children[0];
  firstCardImageText.style = "color: red";
});
let secondCardImageEditBtn = cardImages[1].nextElementSibling.children[1].children[0].children[1];
secondCardImageEditBtn.addEventListener("click", function() {
  let secondCardImageText = cardImages[1].nextElementSibling.children[0];
  if (secondCardImageText.style.color === 'green') {
    secondCardImageText.style.color = '';
  } else {
    secondCardImageText.style.color = 'green';
  }
});

let headerNavbarElement = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0];
headerNavbarElement.addEventListener("dblclick", function() {
  let headLinkElement = document.getElementsByTagName("link")[0];
  console.log("dblclick");
  console.log(`before dblclick : ${headLinkElement.getAttribute("href")}`);
  var href;
  if (headLinkElement.getAttribute("href") && headLinkElement.getAttribute("href") != null) {
    // Protect against multiple deactivations
    var href_bak = headLinkElement.getAttribute("href_bak");
    if (href_bak && href_bak != null) {
      return;
    }
    
    // Deactivate the hyperlink and save it for future reactivation
    href = headLinkElement.getAttribute("href");
    
    if (href && href != null) {
      headLinkElement.setAttribute("href_bak", href);
      headLinkElement.removeAttribute("href"); // ou headLinkElement.setAttribute("href", "#");
    }
  } else {
    // Reactivate the hyperlink using saved link address
    href = headLinkElement.getAttribute("href_bak");
    if (href && href != null) {
      headLinkElement.setAttribute("href", href);
    }
    headLinkElement.removeAttribute("href_bak");
  }
});

for (let index = 0; index < nbCardImages; index++) {
  console.log(`index : ${index}`);
  let cardImageViewBtn = cardImages[index].nextElementSibling.children[1].children[0].children[0];
  cardImageViewBtn.addEventListener("mousemove", function() {
    let cardImage = cardImages[index];
    console.log("mousemove");
    console.log(`before mousemove : ${cardImage.style.width}`);
    console.log(`clientWidth : ${cardImage.clientWidth}`);
    let cardImageText = cardImages[index].nextElementSibling.children[0];
    cardImageText.classList.toggle("d-none");
    if (cardImage.style.width) {
      cardImage.style.width = null;
    } else {
      cardImage.style.width = "20%";
    }
  });
}

let cardsImagesRow = document.getElementsByClassName("card-img-top")[0].parentNode.parentNode.parentNode;
let jumbotronGrayBtn = document.getElementsByClassName("btn btn-secondary my-2")[0];
jumbotronGrayBtn.addEventListener("click", function() {
  let lastCardImage = cardImages[nbCardImages - 1].parentNode.parentNode;
  cardsImagesRow.removeChild(lastCardImage);
  cardsImagesRow.insertBefore(lastCardImage, cardsImagesRow.childNodes[0]);
});

let jumbotronBlueBtn = document.getElementsByClassName("btn btn-primary my-2")[0];
jumbotronBlueBtn.addEventListener("click", function(e) {
  e.preventDefault();
  let firstCardImage = cardImages[0].parentNode.parentNode;
  let lastCardImage = cardImages[nbCardImages - 1].parentNode.parentNode;
  cardsImagesRow.removeChild(firstCardImage);
  cardsImagesRow.insertBefore(firstCardImage, lastCardImage.nextSibling);
});