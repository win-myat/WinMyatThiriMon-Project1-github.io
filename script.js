


// responsive
function myFunction() {
  var x = document.getElementById("cafenav");
  if (x.className === "nav") {
    x.className += " responsive ";
  } else {
    x.className = "nav";
  }
}


// first visitor
const modal = document.getElementById("discountModal");
const closeBtn = document.querySelector(".close");

// show modal only for the first-time visitors
window.onload = function () {
  if (modal && !localStorage.getItem("visited")) {
    modal.style.display = "flex";
    localStorage.setItem("visited", "true");
  }
};

// close modal
if (closeBtn && modal) {
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };
}

// 
function cliamDiscount() {
  const emailInput = document.getElementById("emailInput");
  const email = emailInput ? emailInput.value : "";
  if (email) {
    alert("Thanks for signing up! Your 10% discount code is : CODE22");
  } else {
    alert("Please enter a valid email.")
  }
}

// close if clicked outside modal
window.onclick = function (event) {
  if (modal && event.target === modal) {
    modal.style.display = "none";
  }
};


// search
const searchInput = document.getElementById("searchinput");
const products = document.querySelectorAll(".fivecol, .equip-col");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const filter = searchInput.value.toLowerCase();
    for (let i = 0; i < products.length; i++) {
      const title = products[i].getElementsByTagName("h4")[0].textContent.toLowerCase();
      if (title.includes(filter)) {
        products[i].classList.remove("hidden");
      } else {
        products[i].classList.add("hidden");
      }
    }

    document.querySelectorAll(".row").forEach(row => {
      row.style.display = row.querySelector(".fivecol:not(.hidden), .equip-col:not(.hidden)") ? "flex" : "none";
    });

    document.querySelectorAll(".section").forEach(sec => {
      sec.style.display = sec.querySelector(".fivecol:not(.hidden), .equip-col:not(.hidden)") ? "" : "none";
    })

  });
}

// event register
function submitRegister() {
  alert('Thank you! Your registration has been received.');
}

// cart
let cart = JSON.parse(sessionStorage.getItem('cart')) || {};
let addtocart = document.querySelectorAll('.add-to-cart');
addtocart.forEach((button) => {
  button.addEventListener('click', (e) => {
    let name = e.currentTarget.dataset.name;
    let price = parseFloat(e.currentTarget.dataset.price); // "$10" -> 10

    if (cart[name]) {
      cart[name].quantity += 1;
    } else {
      cart[name] = { price: isNaN(price) ? 0 : price, quantity: 1 };
    }

    sessionStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} has been added to your cart`);
  });
});


let cart_body = document.getElementById('cart-body');
let total = document.getElementById('total');

if (cart_body && total) {
  let carttotal = 0;

  for (const [name, details] of Object.entries(cart)) {
    let price = Number(details.price) || 0;
    let qty = Number(details.quantity) || 1;
    let itemtotal = price * qty;
    carttotal += itemtotal;

    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${name}</td>
      <td>$ ${price.toFixed(2)}</td>
      <td>${qty}</td>
      <td>$ ${itemtotal.toFixed(2)}</td>
      <td>
        <button class="btn btn-danger remove-btn" data-name="${name}">
          Remove
        </button>
      </td>
    `;
    cart_body.appendChild(row);
  }

  let remove_btn = document.querySelectorAll('.remove-btn');
  remove_btn.forEach((button) => {
    button.addEventListener('click', (e) => {
      let name = e.currentTarget.dataset.name;
      delete cart[name];
      sessionStorage.setItem('cart', JSON.stringify(cart));
      location.reload();
    });
  });

  total.textContent = carttotal.toFixed(2);
}

// subscribe

function subscribeNow() {
  alert("Subscribe successful! 🎉 You get 5% OFF for all items. ")
}




