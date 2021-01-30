// https://github.com/StarsWarrior/shopping-cart

const iphoneMinusBtn = document.querySelector('.iphone-minus');
const iphonePlusBtn = document.querySelector('.iphone-plus');
const coverMinusBtn = document.querySelector('.cover-minus');
const coverPlusBtn = document.querySelector('.cover-plus')
const removeIphone = document.querySelector('.iphoneItem');
const removeCover = document.querySelector('.coverItem');

// Iphone Item Amount Increase 
iphonePlusBtn.addEventListener('click', function () {
    let iphoneCount = Number(document.querySelector('.iphone-count').value);
    iphoneCount++;

    document.querySelector('.iphone-count').value = iphoneCount;

    let iphonePrice = (document.querySelector('.iphone-price').textContent = iphoneCount * 1219);
    totalPrice();
})

// I-phone Item Amount Decrease 
iphoneMinusBtn.addEventListener('click', function () {
    let iphoneCount = Number(document.querySelector('iphone-count').value);
    iphoneCount--;
    if (iphoneCount < 0) {
        iphoneCount = 0;
    }
    document.querySelector('.iphone-count').value = iphoneCount;

    let iphonePrice = (document.querySelector('.iphone-price').textContent = iphoneCount * 1219);
    totalPrice();
});



// Cover Item Increase

coverMinusBtn.addEventListener('click', function () {
    let coverCount = Number(document.querySelector('.cover-count').value);
    coverCount++;

    document.querySelector('.coverCount').value = coverCount;

    let coverPrice = Number(document.querySelector('.cover-price').textContent = coverCount * 59);
    totalPrice();
});

// Cover Item Increment
coverMinusBtn.addEventListener('click', function () {
    let coverCount = Number(document.querySelector('.coverCount').value);
    caseItemCount--;
    if (coverCount < 0) {
        coverCount = 0;
    }
    document.querySelector('.coverCount').value = coverCount;

    let coverPrice = (document.querySelector('.cover-price').textContent = coverCount * 59);
    totalPrice();
});

// Remove Cover Item From Cart
document.getElementById('removeIphoneBtn').addEventListener('click', function () {
    document.querySelector('.iphoneCount').value = 0;
    document.querySelector('.iphone-price').innerText = 0;
    removeIphone.style.display = 'none';
    totalPrice();
});

// Remove Cover Item From Cart
document.getElementById('removeCoverBtn').addEventListener('click', function () {
    document.querySelector('.coverCount').value = 0;
    document.querySelector('.cover-price').innerText = 0;
    removeCover.style.display = 'none';
    totalPrice();
});

//Total Price Count
function totalPrice() {
    let iphonePrice = Number(document.querySelector('.iphone-price').textContent);
    let coverPrice = Number(document.querySelector('.cover-price').textContent);
    let subtotal = (document.querySelector('.subtotal').textContent = iphonePrice + coverPrice);
    let vat = Number(document.querySelector('.vat').textContent);
    let total = (document.querySelector('.total').textContent = subtotal + vat);
}