// dom elements references

// anchor tags elements reference

const shoesForAll = document.querySelector(".shoesForAll");
const shoesForMen = document.querySelector(".shoesForMen");
const shoesForWomen = document.querySelector(".shoesForWomen");
const shoesForKids = document.querySelector(".shoesForKids");

// element reference to show the shoes

// functions

// local storage code

// variable to update the factory function with new shoes data when the user interacts with the application
let updatedShoesData = null;

if (localStorage["setShoesData"]) {
	updatedShoesData = JSON.parse(localStorage["setShoesData"]);
}

// factory function instance

const appInstance = ShoeCatalogApp(updatedShoesData);

// events listeners

// anchor elements event listeners

shoesForAll.addEventListener("click", function() {
	// when the user clicks the <ALL> element show all the shoes
	
});

// code for local storage

localStorage.setItem(
	"setShoesData",
	JSON.stringify(appInstance.getShoesData())
);