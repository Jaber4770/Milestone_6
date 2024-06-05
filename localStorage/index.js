// get and set value in the UI
const addItem = () => {

    const key = document.getElementById('key');
    const value = document.getElementById('value');

    const keyText = key.value;
    const valueText = value.value;
    displayItem(keyText, valueText);
    setToLocalStorage(keyText, valueText);

}

const displayItem = (keyText, valueText) => {
    const div = document.getElementById('addContainer');

    const li = document.createElement("li");

    li.innerText = `${keyText} - ${valueText}`

    div.appendChild(li);
}

// get value and set value in the LocalStorage

const getStoredData = () => {
    let cart = {};
    const storedData = window.localStorage.getItem('cart');
    if (storedData) {
        cart = JSON.parse(storedData);
    }
    return cart;
}

const setToLocalStorage = (keyText, valueText) => {
    const cart = getStoredData();
    cart[keyText] = valueText;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

// display data from localStorage

const displayFromLocalStorage = () => {
    let storedData = getStoredData();
    for (item in storedData) {
        const key = storedData[item];
        displayItem(item, key);
    }

}
displayFromLocalStorage();