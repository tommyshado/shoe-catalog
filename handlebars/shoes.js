// shoe catalog factory function instance
const instanceOfShoeCatalog = ShoeCatalogApp();

// get the reference to the template script tag
const templateSource = document.querySelector(".shoeTemplate").innerHTML;

// compile the template
let shoeTemplate = Handlebars.compile(templateSource);

// get the reference to the element that shows the shoes
const shoesSection = document.querySelector(".shoesSection");

// get the array reference that contains the shoes into the variable from the factory function instance
let shoes = instanceOfShoeCatalog.getShoesData();

// render the shoes data into the template
let shoesDataHtml = shoeTemplate(shoes);

shoesSection.innerHTML = shoesDataHtml;