
/*--------------------------Total function  here--------------------------------*/

// getting best price
function getBestPrice() {
    const bestPrice = document.getElementById('best-price');
    const bestPriceTxt = bestPrice.innerText;
    const bestPriceBal = parseInt(bestPriceTxt);
    return bestPriceBal;
}

// getting extra memory cost
function getExMemoryCost() {
    const exMemoryCost = document.getElementById('ex-memory-cost');
    const exMemoryCostTxt = exMemoryCost.innerText;
    const exMemoryCostBal = parseInt(exMemoryCostTxt);
    return exMemoryCostBal;
}

// getting extra storage cost
function getExStorageCost() {
    const exStorageCost = document.getElementById('ex-storage-cost');
    const exStorageCostTxt = exStorageCost.innerText;
    const exStorageCostBal = parseInt(exStorageCostTxt);
    return exStorageCostBal;
}

// getting delivery cost
function getDeliveryCost() {
    const deliveryCost = document.getElementById('delivery-charge');
    const deliveryCostTxt = deliveryCost.innerText;
    const deliveryCostBal = parseInt(deliveryCostTxt);
    return deliveryCostBal;
}

// getting total price
function getTotalPrice() {
    const totalPrice = document.getElementById('total-price');

    const bestPrice = getBestPrice();
    const memoryPrice = getExMemoryCost();
    const storagePrice = getExStorageCost();
    const deliveryPrice = getDeliveryCost();

    const totalPriceNew = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    totalPrice.innerText = totalPriceNew;
    return totalPriceNew;
}
// getting total
function getTotal() {
    const total = document.getElementById('total');
    const totalTxt = total.innerText;
    const totalBal = parseInt(totalTxt);
    const totalPriceGet = getTotalPrice();
    total.innerText = totalPriceGet;
    return totalBal;
}
//pomo code checker
function pomochecker() {
    const pomoCode = document.getElementById('pomo-code');
    const pomoCodeTxt = pomoCode.value;
    const totalNew = getTotalPrice();
    const pomo = 'stevekaku';
    if (pomoCodeTxt == pomo) {  //validation
        let discount = parseFloat(totalNew * 0.8).toFixed(2);
        const total = document.getElementById('total');
        total.innerText = discount;
        document.getElementById('pomo-msg').style.display = 'none';
    }
    else if (pomoCodeTxt == '') { //validation

        alert('Please enter pomo code');
        document.getElementById('pomo-msg').style.display = 'none';
    }
    else {
        document.getElementById('pomo-msg').style.display = 'block';
    }
    pomoCode.value = '';

}


/*--------------------------Total event list here----------------------------------*/

// 8GB memory btn click event
document.getElementById('eight-gb-memory-btn').addEventListener('click', function () {
    const exMemoryCost = document.getElementById('ex-memory-cost');
    exMemoryCost.innerText = 0;
    getTotalPrice();
    getTotal();
});

// 16GB memory btn click event
document.getElementById('sixteen-gb-memory-btn').addEventListener('click', function () {
    const exMemoryCost = document.getElementById('ex-memory-cost');
    exMemoryCost.innerText = 180;
    getTotalPrice();
    getTotal();
});

// 256GB ssd storage btn click event
document.getElementById('ssd-storage-256-gb-btn').addEventListener('click', function () {
    const exStorageCost = document.getElementById('ex-storage-cost');
    exStorageCost.innerText = 0;
    getTotalPrice();
    getTotal();
});

// 512GB ssd storage btn click event
document.getElementById('ssd-storage-512-gb-btn').addEventListener('click', function () {
    const exStorageCost = document.getElementById('ex-storage-cost');
    exStorageCost.innerText = 100;
    getTotalPrice();
    getTotal();

});

// 1TB ssd storage btn click event
document.getElementById('ssd-storage-1-TB-btn').addEventListener('click', function () {
    const exStorageCost = document.getElementById('ex-storage-cost');
    exStorageCost.innerText = 180;
    getTotalPrice();
    getTotal();
});

// free delivery btn click event
document.getElementById('free-delivery-btn').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-charge');
    deliveryCost.innerText = 0;
    getTotalPrice();
    getTotal();
});

// delivery charge btn click event
document.getElementById('charge-with-delivery-btn').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-charge');
    deliveryCost.innerText = 20;
    getTotalPrice();
    getTotal();
});

// pomo apply btn click event
document.getElementById('pomo-apply-btn').addEventListener('click', function () {
    pomochecker();

});
