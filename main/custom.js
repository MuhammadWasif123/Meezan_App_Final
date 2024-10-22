const cnicInput = document.getElementById('cnic');
cnicInput.addEventListener('input', function () {
    if (this.value.length > 13) {
        this.value = this.value.slice(0, 13);
    }
});



const smallBike=document.getElementById("small-div")
smallBike.addEventListener('onClick',function(){
    smallBike.classList.add('new-border');

})

function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
}


function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) - 1;
}

function addToCart() {
    const quantity = document.getElementById('quantity').value;
    alert(`Added ${quantity} item(s) to the cart!`);
}



function toggleRadio(radio) {
    if (radio.checked) {
        radio.checked = false;
    } else {
        radio.checked = true;
    }
}



function showSuccessPrompt() {
    alert("Order Placed Successfully!");
}

function redirectToUrl() {
    window.location.href = "file:///home/rizwan/Documents/Wasif_Work/Meezan_Application_updated/Meezan_Application_28Sep/Meezan_Application/products.html"; 
}
//  Functionality to handle Terms and Conditions
function toggleOrderButton() {
    const checkbox = document.getElementById('termsCheckbox');
    const button = document.getElementById('placeOrderButton');
    button.classList.toggle('d-none', !checkbox.checked);
}

// Functionality of the Place Order Button
function showSuccessPrompt() {
    alert("Items ordered successfully!");
    window.location.href = "file:///home/rizwan/Documents/Wasif_Work/Meezan_Application_updated/Meezan_Application_28Sep/Meezan_Application/index.html"; 
}

console.log("JS WORKING")