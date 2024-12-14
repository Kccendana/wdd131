const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

const lastModified = document.getElementById("lastModif")
lastModified.textContent = document.lastModified;

// nav button toggle
const navButton = document.querySelector('.nav-button');
const navList = document.querySelector('.navi');
const logo = document.querySelector('.logo');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('close');
  navList.classList.toggle('show');
  logo.classList.toggle('hidden');
}, false);

window.onresize = () => { if (window.innerWidth > 760) 
  navList.classList.remove('show'); 
  navButton.classList.remove('close');
  logo.classList.remove('hidden');
}

// menu
const menu = [
  {
    menuName: "Caldereta",
    category: "beef",
    price: 1000,
    imageUrl: "images/caldereta.webp"
  },
  {
    menuName: "Cassava Cake",
    category: "dessert",
    price: 500,
    imageUrl: "images/cassava_cake.webp"
  },
  {
    menuName: "Chicken Barbecue",
    category: "chicken",
    price: 500,
    imageUrl: "images/chicken_bbq.webp"
  },
  {
    menuName: "Cinnamon Rolls",
    category: "bread",
    price: 500,
    imageUrl: "images/cinnamon_rolls.webp"
  },
  {
    menuName: "Dinuguan",
    category: "pork",
    price: 1000,
    imageUrl: "images/dinuguan.webp"
  },
  {
    menuName: "Empanada",
    category: "bread",
    price: 500,
    imageUrl: "images/empanada.webp"
  },
  {
    menuName: "Ensaymada",
    category: "bread",
    price: 500,
    imageUrl: "images/ensaymada.webp"
  },
  {
    menuName: "Halo halo",
    category: "dessert",
    price: 500,
    imageUrl: "images/halo-halo.webp"
  },
  {
    menuName: "Hamburger",
    category: "bread",
    price: 500,
    imageUrl: "images/hamburger.webp"
  },
  {
    menuName: "Lechon Paksiw",
    category: "pork",
    price: 500,
    imageUrl: "images/lechon_paksiw.webp"
  },
  {
    menuName: "Pandesal",
    category: "bread",
    price: 500,
    imageUrl: "images/pandesal.webp"
  },
  {
    menuName: "Yema Cake",
    category: "dessert",
    price: 500,
    imageUrl: "images/yema_cake.webp"
  }
];

if (location.pathname.endsWith("menu.html")){
  // Function to display menus
  function displayMenus(menuArray = menu) {
    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.innerHTML = ""; // Clear previous content
    menuArray.forEach((menu) => {
      const menuCards = `
        <section class="cards">
          <img src="${menu.imageUrl}" alt="${menu.menuName}" loading="lazy">
          <h3 class="menu-name">${menu.menuName}</h3>
          <p>Price: $${menu.price}</p>
          <a class="button">Order now</a>
        </section>`;
      cardsContainer.innerHTML += menuCards;
    });
  }

  function removeActiveClass() {
    const listItems = document.querySelectorAll('.menu_lists li'); // Select all list items
    const hasActive = Array.from(listItems).some(item => item.classList.contains('active_list'));
  
    if (hasActive) {
      listItems.forEach(item => item.classList.remove('active_list'));
    }
  }
  

  // Function to filter menu
  function filterMenu(menuArray = menu, category) {
    return menuArray.filter(menu => menu.category === category);
  }

  // Event listeners
  document.querySelector('.all').addEventListener('click', () => {
    displayMenus(menu); // Display all menus
  });

  document.querySelector('.beef').addEventListener('click', () => {
    removeActiveClass()
    const list = document.querySelector('.beef');
    const beefMenu = filterMenu(menu, 'beef'); // Use filterMenu function
    list.classList.add('active_list');
    displayMenus(beefMenu); // Display filtered menus
  });

  document.querySelector('.chicken').addEventListener('click', () => {
    removeActiveClass()
    const list = document.querySelector('.chicken');
    const newLists = filterMenu(menu, 'chicken'); // Use filterMenu function
    list.classList.add('active_list');
    displayMenus(newLists); // Display filtered menus
  });

  document.querySelector('.pork').addEventListener('click', () => {
    removeActiveClass()
    const list = document.querySelector('.pork');
    const newLists = filterMenu(menu, 'pork'); // Use filterMenu function
    list.classList.add('active_list');
    displayMenus(newLists); // Display filtered menus
  });

  document.querySelector('.dessert').addEventListener('click', () => {
    removeActiveClass()
    const list = document.querySelector('.dessert');
    const newLists = filterMenu(menu, 'dessert'); // Use filterMenu function
    list.classList.add('active_list');
    displayMenus(newLists); // Display filtered menus
  });

  document.querySelector('.bread').addEventListener('click', () => {
    removeActiveClass()
    const list = document.querySelector('.bread');
    const newLists = filterMenu(menu, 'bread'); // Use filterMenu function
    list.classList.add('active_list');
    displayMenus(newLists); // Display filtered menus
  });


  displayMenus(menu)

}

// Handle inquiries counter on thank_you.html
if (location.pathname.endsWith("thank_you.html")) {
  const count = document.querySelector('.count');
  let inquireCount = localStorage.getItem("inquireCount") || 0;
  inquireCount++;
  if (inquireCount === 1) {
    count.innerHTML = 'You have inquired for the first time.'
  }else {
    count.innerHTML = `You have inquired ${inquireCount} times.`
  }
  localStorage.setItem("inquireCount", inquireCount);
}

