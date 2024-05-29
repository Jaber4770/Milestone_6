let huntingPhone = async (seatchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${seatchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhone(phones, isShowAll);
}


const displayPhone = (phones, isShowAll) => {
    const cartContainer = document.getElementById('phone-cart-container');
    // clear phone container search 
    cartContainer.textContent = '';
    // making slice and showing less result
    let showAllButtonContainer = document.getElementById("showAllButtonContainer");
    if (phones.length > 12 && !isShowAll) {
        showAllButtonContainer.classList.remove("hidden");
    }
    else {
        showAllButtonContainer.classList.add("hidden");
    }

    if (!isShowAll) {
        phones = phones.slice(0, 12);
    }

    phones.forEach(phone => {

        const div = document.createElement('div');
        div.classList = `card w-96 bg-base-100 shadow-xl`;
        div.innerHTML = `        
        <div class="border p-5 rounded-md">
            <figure><img  src="${phone.image}" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="text-3xl text-center">${phone.phone_name}</h2>
                <p>Brand: ${phone.brand}</p>
                <p></p>
                <div class="card-actions justify-center">
                    <button onClick="phoneDetails('${phone.slug}')" class="btn text-white bg-[#0D6EFD]">Show Details</button>
                </div>
            </div>
        </div>`
        cartContainer.appendChild(div);

    })
    spinnerHandler(false);
}


// details showing
const phoneDetails = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const details = data.data;
    phoneDetailsModal(details);
}


// Modal
const phoneDetailsModal = (details)=>{
    phone_details_modal.showModal();
    const phoneDetials = document.getElementById("phone_Details_container");
    phoneDetials.innerHTML= 
    `<img src="${details?.image}" alt="">
    <h3 class="font-bold text-2xl">Name: ${details?.name}</h3>
    <p><span class="font-bold">Chipset:</span> ${details?.mainFeatures?.chipSet}</p>
    <p><span class="font-bold">Display:</span> ${details?.mainFeatures?.displaySize}</p>
    <p><span class="font-bold">Memory:</span> ${details?.mainFeatures?.memory}</p>
    <p><span class="font-bold">Storage:</span> ${details?.mainFeatures?.storage}</p>
    <p><span class="font-bold">Bluetooth:</span> ${details?.others?.Bluetooth}</p>
    <p><span class="font-bold">Sendor: </span>${details?.mainFeatures?.sensors[0]}</p>
    <p><span class="font-bold">Sendor: </span>${details?.mainFeatures?.sensors[1]}</p>
    <p><span class="font-bold">Sendor: </span>${details?.mainFeatures?.sensors[2]}</p>
    <p><span class="font-bold">Sendor: </span>${details?.mainFeatures?.sensors[3]}</p>
    <p><span class="font-bold">Sendor: </span>${details?.mainFeatures?.sensors[4]}</p>
    <p><span class="font-bold">Sendor: </span>${details?.mainFeatures?.sensors[5]}</p>
    <p><span class="font-bold">GPS:</span> ${details?.others?.GPS}</p>
    <p><span class="font-bold">NFC:</span> ${details?.others?.NFC}</p>
    <p><span class="font-bold">Radio:</span> ${details?.others?.Radio}</p>
    <p><span class="font-bold">USB:</span> ${details?.others?.USB}</p> 
    <p><span class="font-bold">WLAN:</span> ${details?.others?.WLAN}</p>
    <p><span class="font-bold">Relase Date</span>: ${details?.releaseDate}</p>
    
    <div class="modal-action">
    <form method="dialog">
        <button class="btn">Close</button>
    </form>
</div>`
}




const searchHandler = (isShowAll) => {
    spinnerHandler(true);
    const searchText = document.getElementById("searchText");
    let valueText = searchText.value;
    huntingPhone(valueText, isShowAll);
    // searchText.value = '';

}

const spinnerHandler = (isLoading) => {
    const spinnerContainer = document.getElementById("spinnerContainer");
    if (isLoading) {
        spinnerContainer.classList.remove("hidden");
    }
    else {
        spinnerContainer.classList.add("hidden");
    }
}
// show all phones

const showAll = () => {
    searchHandler(true);
}

