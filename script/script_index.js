cards = [
    {
        id: 1,
        img: "./images/product1.png",
        catg: "Accessories",
        title: "Quartz Belt Watch",
        price: "$150.00"
    },
    {
        id: 2,
        img: "./images/product2.png",
        catg: "Beauty",
        title: "Women Freshwash",
        price: "$150.00"
    },
    {
        id: 3,
        img: "./images/product3.png",
        catg: "Decor",
        title: "Quartz Belt Watch",
        price: "$150.00"
    },
    {
        id: 4,
        img: "./images/product4.png",
        catg: "Decor",
        title: "Room Flash Light",
        price: "$150.00"
    },
    {
        id: 5,
        img: "./images/product5.png",
        catg: "Beauty",
        title: "Women Freshwash",
        price: "$150.00"
    },
    {
        id: 6,
        img: "./images/product6.png",
        catg: "Beauty",
        title: "Women Freshwash",
        price: "$150.00"
    },
    {
        id: 7,
        img: "./images/product7.png",
        catg: "Beauty",
        title: "Women Freshwash",
        price: "$150.00"
    },
    {
        id: 8,
        img: "./images/product8.png",
        catg: "Beauty",
        title: "Women Freshwash",
        price: "$150.00"
    }
]

last_new = [
    {
        id: 1,
        img: "./images/blog1.png",
        descriotion: "Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.",
        title: "The Richland Center Shooping News and weekly shooper",
        comments: [
            {
                name: "Emilly Blunt",
                time: "  December 4, 2017 at 3:12 pm",
                comment: "Never say goodbye till the end comes!"
            },
            {
                name: "Emilly Blunt",
                time: "  December 4, 2017 at 3:12 pm",
                comment: "Never say goodbye till the end comes!"
            },
            {
                name: "Emilly Blunt",
                time: "  December 4, 2017 at 3:12 pm",
                comment: "Never say goodbye till the end comes!"
            }
        ]
    },
    {
        id: 2,
        img: "./images/blog2.png",
        descriotion: "Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.",
        title: "The Shopping News also offers top-quality printing services",
        comments: [
            {
                name: "Emilly Blunt",
                time: "  December 4, 2017 at 3:12 pm",
                comment: "Never say goodbye till the end comes!"
            }
        ]
    },
    {
        id: 3,
        img: "./images/blog3.png",
        descriotion: "Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.",
        title: "Professional design staff and efficient equipment you’ll find we offer",
        comments: [
            {
                name: "Emilly Blunt",
                time: "  December 4, 2017 at 3:12 pm",
                comment: "Never say goodbye till the end comes!"
            },
            {
                name: "Emilly Blunt",
                time: "  December 4, 2017 at 3:12 pm",
                comment: "Never say goodbye till the end comes!"
            }
        ]
    }
];
const cardsContainer = document.getElementById('product-cards-container');
const cardsBastSellers = document.getElementById('product-cards-bast-sellers');
const cardsLatestNews = document.getElementById('product-cards-latest-news');

function add_cards(id_element) {
    // إضافة الكاردز إلى الصفحة
    if(id_element.id != "product-cards-latest-news"){
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
            id_element.innerHTML += cardHTML;
        });
    } else{
        last_new.forEach(card => {
            console.log(card.comments.length)
            const cardHTML = `
        <div class="col">
        <div class="card h-100 border-0 ">
          <img src="${card.img}" class="card-img-top" alt="${card.title}">
          <div class="card-body">
          <div class="d-flex flex-wrap align-items-center text-secondary ">
            <p class="col-3"><small>By Admin</small></p>
            <p class="col-6"><small><i class="ti-comments-smiley"></i> ${card.comments.length} Comments</small></p>
          </div>
            <h5 class="card-title">${card.title}</h5>
            <p class="card-title text-muted ">${card.descriotion}</p>
            <a class="card-blog__link" href="#">Read More <i class="ti-arrow-right"></i></a>
    
          </div>
        </div>
      </div>
      `;
            id_element.innerHTML += cardHTML;
        });
    }
}


add_cards(cardsContainer)
// add_cards(cardsBastSellers)
add_cards(cardsLatestNews)