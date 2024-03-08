cards = [
    {
        id: 1,
        img:"./images/product1.png",
        catg:"Beauty",
        title:"Women Freshwash",
        price:"$150.00"
    },
    {
        id: 2,
        img:"./images/product2.png",
        catg:"Beauty",
        title:"Women Freshwash",
        price:"$150.00"
    },
    {
        id: 3,
        img:"./images/product3.png",
        catg:"Beauty",
        title:"Women Freshwash",
        price:"$150.00"
    },
    {
        id: 4,
        img:"./images/product4.png",
        catg:"Beauty",
        title:"Women Freshwash",
        price:"$150.00"
    },
    {
        id: 5,
        img:"./images/product5.png",
        catg:"Beauty",
        title:"Women Freshwash",
        price:"$150.00"
    },
    {
        id: 6,
        img:"./images/product6.png",
        catg:"Beauty",
        title:"Women Freshwash",
        price:"$150.00"
    },
    {
        id: 7,
        img:"./images/product7.png",
        catg:"Beauty",
        title:"Women Freshwash",
        price:"$150.00"
    },
    {
        id: 8,
        img:"./images/product8.png",
        catg:"Beauty",
        title:"Women Freshwash",
        price:"$150.00"
    }
]

const cardsContainer = document.getElementById('product-cards-container');

  // إضافة الكاردز إلى الصفحة
  cards.forEach(card => {
    const cardHTML = `
    <div class="col">
    <div class="card h-100 border-0 ">
      <img src="${card.img}" class="card-img-top" alt="${card.title}">
      <div class="card-body text-center">
        <small class="card-title text-muted ">${card.catg}</small>
        <h5 class="card-title">${card.title}</h5>
        <h5 class="card-title text-muted ">${card.price}</h5>

      </div>
    </div>
  </div>
  `;
  cardsContainer.innerHTML += cardHTML;
});