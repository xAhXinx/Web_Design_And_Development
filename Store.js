/*
    This is my reference : https://www.youtube.com/watch?v=YeFzkC2awTM
    Assignment

    Author: YEUNG KIEN XIN
    Date:   22.7.2021

    Filename: Store.js

*/

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var buttton = addToCartButtons[i]
        buttton.addEventListener('click', addToCartClicked)
    }
    document.getElementsByClassName('btn-confirm')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    total = parseFloat(document.getElementsByClassName('cart-total-price')[0].innerText.replace('RM', ''))
    if (total > 0) {
        confirm('Please Enter Your Information')
        window.location.href = "Payment.html";
    }
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    addItemToCart(imageSrc, title, price)
    updateCartTotal()
}

function addItemToCart(imageSrc, title, price){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++){
        if (cartItemNames[i].innerText == title){
            alert('This item is already added to the cart')
            return
        }
    }
//     <div class="cart-item cart-column">
//     <img class="cart-item-image" src="${imageSrc}">
//     <span class="cart-item-title">${title}</span>
// </div>
// <span class="cart-price cart-column">${price}</span>
// <div class="cart-quantity cart-column">
//     <input class="cart-quantity-input" type="number" value="1">
//     <button class="btn btn-danger" type="button">REMOVE</button>
// </div>
    var cartRowContents =     `
    <div class="cart-item col-1-3">
        <img class="cart-item-image newRow" src="${imageSrc}">
        <span class="cart-item-title newRow">${title}</span>
    </div>
    <span class="cart-price">${price}</span>
    <div class="cart-quantity col-1-3">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">REMOVE</button>
    </div>
`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('RM', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = 'RM' + total
}
// Display product button
function displayProucdtButton(sw) {
    document.getElementById('desktop').style.left = '0px'
    document.getElementById('laptop').style.left = '0px'
    document.getElementById('mobile').style.left = '0px'
    document.getElementById('tablet').style.left = '0px'
    if (sw == 1) {
        displayDesktop = "block"
        displayLaptop = "none"
        displayMobile = "none"
        displaytablet = "none"
        displayBtn = "0px"
    } 
    else if (sw == 2) {
        displayDesktop = "none"
        displayLaptop = "block"
        displayMobile = "none"
        displaytablet = "none"
        displayBtn = "110px"
    }
    else if (sw == 3) {
        displayDesktop = "none"
        displayLaptop = "none"
        displayMobile = "block"
        displaytablet = "none"
        displayBtn = "220px"
    }
    else if (sw == 4) {
        displayDesktop = "none"
        displayLaptop = "none"
        displayMobile = "none"
        displaytablet = "block"
        displayBtn = "330px"
    }
    document.getElementById('desktop').style.display = displayDesktop;
    document.getElementById('laptop').style.display = displayLaptop;
    document.getElementById('mobile').style.display = displayMobile;
    document.getElementById('tablet').style.display = displaytablet;
    document.getElementById('btn').style.left = displayBtn;
}

// Display next product button
function displayPageProucdtButton(sw) {
    var products = new Array("desktop", "laptop", "mobile", "tablet");
    for (i = 0; i < 4; i++){
        a = 0;
        productDisplay = parseFloat(document.getElementById(products[i]).style.left.replace('%', ''))
        console.log(productDisplay)
        if (sw == 1 && productDisplay < 0) {
            a = productDisplay + 100 + '%'
        }
        else if (sw == 2 && productDisplay > -500) {
            a = productDisplay - 100 + '%'
        }
        else {
            break
        }
        document.getElementById(products[i]).style.left = a
        productDisplay = parseFloat(document.getElementById(products[i]).style.left.replace('%', ''))
    }
}

// Display cart button
function displayCartButton(sw) {
    if (sw == 0) {
        cartRight = "-50%"
        cartDisplay = "none"
        document.getElementById('cart').style.right = cartRight;
        setTimeout(displayCartButtonDisplay, 600)
    } 
    else if (sw == 1) {
        cartRight = "0%"
        cartDisplay = "block"
        document.getElementById('cart').style.display = cartDisplay;
        setTimeout(displayCartButtonRight, 40)
    }
}

function displayCartButtonRight(){
    document.getElementById('cart').style.right = cartRight;
}

function displayCartButtonDisplay(){
    document.getElementById('cart').style.display = cartDisplay;
}


