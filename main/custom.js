document.addEventListener('DOMContentLoaded',function(){
    const cnicInput=document.getElementById('cnic1');
    if(cnicInput){
        cnicInput.addEventListener('input',function(){
            if (this.value.length > 13){
                this.value = this.value.slice(0,13);
            }
        })
    }
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
    window.location.href = "https://meezan-demo.netlify.app/products.html"; 
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
    window.location.href = "https://meezan-demo.netlify.app/"; 
}


// JS for the Timer Icon

let countdown = 20; 

const timerElement = document.getElementById("timer1");

const countdownInterval = setInterval(() => {
  countdown -= 1;
  timerElement.textContent = countdown;

  if (countdown <= 0) {
    clearInterval(countdownInterval);
    timerElement.textContent = "Done";
  }
}, 1000); // Update every 1 second


console.log("JS WORKING")
