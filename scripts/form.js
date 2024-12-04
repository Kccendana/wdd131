const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

const lastModified = document.getElementById("lastModif")
lastModified.textContent = document.lastModified;

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

if (location.pathname.endsWith("form.html")){
  // document.addEventListener("DOMContentLoaded", () => {
      const products = [
          { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
          { id: "fc-2050", name: "power laces", averagerating: 4.7 },
          { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
          { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
          { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
      ];

      // Ensure DOM is loaded before accessing elements
      const productSelect = document.getElementById("product-name");
      products.forEach(product => {
          const option = document.createElement("option");
          option.value = product.id;
          option.textContent = product.name;
          productSelect.appendChild(option);
      });   
  // });

}

 // Handle review counter on review.html
 if (location.pathname.endsWith("review.html")) {
  const count = document.querySelector('.count');
  let reviewCount = localStorage.getItem("reviewCount") || 0;
  reviewCount++;
  if (reviewCount === 1) {
    count.innerHTML = 'You have reviewed a product for the first time.'
  }else {
    count.innerHTML = `You have reviewed ${reviewCount} products.`
  }
  localStorage.setItem("reviewCount", reviewCount);
}