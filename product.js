// to ready to load the document and call the function
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
// ready to call other function
function ready(){
    //call function when the remove button is clicked
    var removecartbuttons = document.getElementsByClassName('cartremove')
        console.log(removecartbuttons)
        for (var i = 0; i < removecartbuttons.length; i++){
            var button = removecartbuttons[i]
            button.addEventListener('click', removecart)
        }



    //call function when the quantity of the item in the cart changed
    var quantityinput = document.getElementsByClassName('cartquantityinput')
    for(var i = 0; i < quantityinput.length; i++){
        var input = quantityinput[i]
        input.addEventListener('change', quantitychange)
    }



    //call function when add to cart function is clicked
    var addtocartbuttons = document.getElementsByClassName('addtocart')
        for(var i = 0; i < addtocartbuttons.length; i++){
        var button = addtocartbuttons[i]
        button.addEventListener('click', addtocart)
    }



    //call function of purchase
    document.getElementsByClassName('purchase')[0].addEventListener('click', purchase)
}


//function to clean the cart
function purchase() {
    alert('Thank you for your purchase')
    var cartproducts = document.getElementsByClassName('cartitems')[0]
    while (cartproducts.hasChildNodes()) {
        cartproducts.removeChild(cartproducts.firstChild)
    }
    updatetotalprice()
}



//function of record the product information of 'add to cart'
function addtocart(event){
    var button = event.target
    var shopitem = button.parentElement
    var description = shopitem.getElementsByClassName('productdescription')[0].innerText
    var price = shopitem.getElementsByClassName('productprice')[0].innerText
    var image = shopitem.getElementsByClassName('productimg')[0].src
    console.log(description,price,image)
    addproducttocart(description,price,image)
    updatetotalprice()
}



//function of add product to cart
function addproducttocart(description,price,image){
    var cartrow = document.createElement('div')
    cartrow.classList.add('cartrow')
    var cartproduct = document.getElementsByClassName('cartitems')[0]
    //check the item is in the cart already or not
    var cartproductname = cartproduct.getElementsByClassName('cartitemtitle')
    for (var i = 0; i < cartproductname.length; i++){
        if (cartproductname[i].innerText == description){
            alert('This product is already added to the cart!')
            return
        }
    }
    var cartrowcontent = `
        <div class="cartitem cartcolumn">
            <img class="cartimg" src="${image}">
            <span class="cartitemtitle">${description}</span>
        </div>
        <span class="cartprice cartcolumn">${price}</span>
        <div class="cartquantity cartcolumn">
            <input class="cartquantityinput" type="number" value="1">
            <button class="cartremove" type="button">REMOVE</button>
        </div>`
    cartrow.innerHTML = cartrowcontent
    //add at the end of the cart
    cartproduct.append(cartrow)
    cartrow.getElementsByClassName('cartremove')[0].addEventListener('click', removecart)
    cartrow.getElementsByClassName('cartquantityinput')[0].addEventListener('change', quantitychange)
}


//function of remove item of the cart
function removecart(event){
    var buttonclicked = event.target
        buttonclicked.parentElement.parentElement.remove()
        updatetotalprice()
}


//function of change total price of cart according to the quantity change
function quantitychange(){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
    input.value = 1
    }
    updatetotalprice()
}


//function to update the tatal price of the cart
function updatetotalprice(){
    var cartitemContainer = document.getElementsByClassName('cartitems')[0]
    var cartrows = cartitemContainer.getElementsByClassName('cartrow')
    var total = 0
    for (var i = 0; i < cartrows.length; i++){
        var cartrow = cartrows[i]
        var priceElement = cartrow.getElementsByClassName('cartprice')[0]
        var quantityElement = cartrow.getElementsByClassName('cartquantityinput')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        console.log(price)
        console.log(quantity)
        total = total + (price * quantity)
    }
    document.getElementsByClassName('carttotalprice')[0].innerText =  '$' + total
}
