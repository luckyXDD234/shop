var removecartbuttons = document.getElementsByClassName('cartremove')
console.log(removecartbuttons)
for (var i = 0; i < removecartbuttons.length; i++){
    var button = removecartbuttons[i]
    button.addEventListener('click', function(event){
        var buttonclicked = event.target
        buttonclicked.parentElement.parentElement.remove()
        
        updatetotalprice()
    })
}

function updatetotalprice(){
    var cartitemContainer = document.getElementsByClassName('cartitems')[0]
    var cartrows = cartitemContainer.getElementsByClassName('cartrow')
    for (var i = 0; i < cartrows.length; i++){
        var cartrow = cartrows[i]
        var priceElement = cartrow.getElementsByClassName('cartprice')[0]
        var quantityElement = cartrow.getElementsByClassName('cartquantityinput')[0]
        var price = priceElement.innerText
        console.log(priceElement, quantityElement)
    }
}
/*
function cartitem(){
    var cartitemlist = document.getElementsByClassName("cartitem")
    var cartrows = document.getElementsByClassName("cartrow")
    for (var i =0; i <cartrow ; i++){
        var list = cartrows[i]
        console.log(list)
    }
}
*/