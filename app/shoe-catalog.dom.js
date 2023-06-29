// dom elements references

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

// events

// code for local storage

localStorage.setItem(
	"setShoesData",
	JSON.stringify(appInstance.getShoesData())
);