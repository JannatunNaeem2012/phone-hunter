const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await res.json()
    const phones = data.data //the phones are in the object which we named data and data is a property of that obj where the phone details are kept
    console.log(phones)
    displayPhone(phones) //passing the phones array as parameter value to the displayPhone function.
}

const displayPhone = (materials) => {
    // step1: grab the container
    const container = document.getElementById('phone-container')

    materials.forEach(x => {
        // step2: create the phoneCard
        const phoneCard = document.createElement('div')
        // step3: set the tailwind classes for the card
        phoneCard.classList = `card p-4 bg-gray-100 shadow-xl` //classlist gulo template string er bhitore rakhte hobe

        //step4: set the innerHTML
        phoneCard.innerHTML = `
            <figure><img src="${x.image}" alt="phones" /></figure>
            <div class="card-body">
            <h2 class="card-title">${x.phone_name}</h2>
            <p>${x.slug}</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
            </div>
        `
        // step5: appendchild in the container
        container.appendChild(phoneCard)
    });
}

// handle Search function for button
const handleSearch = () =>{
    
}

loadPhone()