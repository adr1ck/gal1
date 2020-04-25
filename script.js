const wrapper = document.querySelector('.wrapper');

function createCard(cardObj) {
    return `
    <div class="card">
        <div class="haeder">
            <img class="header-image" src="https://balev.ru/static/img/user_avatar.jpg" alt="avatar">
            <div class="header-titel">
                ${cardObj.author}
            </div>
        </div>
        <div class="image-wrapper">
            <img class="image" src="${cardObj.download_url}" alt="test image">
        </div>
       <div class="content">
       Alpha Wolf - Mono

       </div>
    </div>
    `;
}

fetch('https://picsum.photos/v2/list')
    .then(function(response) {
        return response.json();
    })
    .then((data) => {
       
        let cardList = '';

        data.forEach((cardObj) => {
            cardList = cardList + createCard(cardObj)
        })

        
        wrapper.innerHTML = cardList;
        setTimeout(() => {
            msnry = new Masonry(wrapper);
        }, 1000)
        setTimeout(() => {
            msnry.reloadedItems();
        }, 2000)
       
       
    });