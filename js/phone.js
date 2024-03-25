const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    const phones = data.data //the phones are in the object which we named data and data is a property of that obj where the phone details are kept
    console.log(phones)
    displayPhone(phones) //passing the phones array as parameter value to the displayPhone function.
}

const displayPhone = (materials) => {
    // step1: grab the container
    const container = document.getElementById('phone-container')
    // clear phone container cards before adding cards
    container.textContent = '';

    const loadMoreButton = document.getElementById('load-more-button')
    // show the load more button if there are more than 10 phones to show
    if(materials.length > 5){
        loadMoreButton.classList.remove('hidden')
    }
    else {
        loadMoreButton.classList.add('hidden')
    }

    // display only first ten phones
    materials = materials.slice(0,5)

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
    // call the loader function again and this time pass the parameter value false. because now the data is loaded 
    toggleLoadingSpinner(false)
}

// handle Search function for button
const handleSearch = () =>{
    toggleLoadingSpinner(true)
    const searchBox = document.getElementById("search-box")
    const searchText = searchBox.value
    loadPhone(searchText)
}

const toggleLoadingSpinner = (isLoading) => {
    const loader = document.getElementById('loading-spinner')
    if(isLoading) {
        loader.classList.remove('hidden')
    }
    else{
        loader.classList.add('hidden')
    }
}

