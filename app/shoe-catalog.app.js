function ShoeCatalogApp(updatedShoesData) {
    const shoesData = updatedShoesData || [
        // converse shoes

        {
            brand: "converse",
            size: [4, 5, 8, 9],
            color: "white",
            "in-stock": 15,
            img: "../public/converse1.png",
            price: 1100,

            // shoe identifier
            id: 1,
        },

        {
            brand: "converse",
            size: [7, 8, 9, 10],
            color: "black",
            "in-stock": 5,
            img: "../public/converse2.png",
            price: 1100,

            // shoe identifier
            id: 2,
        },

        {
            brand: "converse",
            size: [7, 8, 9, 10],
            color: "white",
            "in-stock": 7,
            img: "../public/converse3.png",
            price: 1100,

            // shoe identifier
            id: 3,
        },

        {
            brand: "converse",
            size: [6, 7, 8, 9],
            color: "black",
            "in-stock": 15,
            img: "../public/converse4.png",
            price: 1399,

            // shoe identifier
            id: 4,
        },

        {
            brand: "converse",
            size: [7, 8, 9, 10],
            color: "yellow",
            "in-stock": 5,
            img: "../public/converse5.png",
            price: 1399,

            // shoe identifier
            id: 5,
        },

        // adidas shoes

        {
            brand: "adidas",
            size: [7, 8, 9, 10, 11, 12],
            color: "white",
            "in-stock": 5,
            img: "../public/adidas1.png",
            price: 1600,

            // shoe identifier
            id: 6,
        },

        {
            brand: "adidas",
            size: [7, 8, 9, 10, 11, 12, 13, 14],
            color: "white",
            "in-stock": 5,
            img: "../public/adidas2.png",
            price: 2100,

            // shoe identifier
            id: 7,
        },

        {
            brand: "adidas",
            size: [7, 8, 9, 10],
            color: "black",
            "in-stock": 5,
            img: "../public/adidas3.png",
            price: 2400,

            // shoe identifier
            id: 8,
        },

        {
            brand: "adidas",
            size: [7, 8, 9, 10],
            color: "black",
            "in-stock": 5,
            img: "../public/adidas4.png",
            price: 1600,

            // shoe identifier
            id: 9,
        },

        {
            brand: "adidas",
            size: [7, 8, 9, 10],
            color: "white",
            "in-stock": 5,
            img: "../public/adidas5.png",
            price: 2400,

            // shoe identifier
            id: 10,
        },

        // nike shoes

        {
            brand: "nike",
            size: [8, 9, 10],
            color: "white",
            "in-stock": 10,
            img: "../public/nike5.png",
            price: 2600,

            // shoe identifier
            id: 11,
        },

        // asics shoes

        {
            brand: "asics",
            size: [6, 7, 8, 9],
            color: "blue",
            "in-stock": 5,
            img: "../public/asics1.png",
            price: 1399,

            // shoe identifier
            id: 12,
        },

        {
            brand: "asics",
            size: [3, 4, 5, 6],
            color: "pink",
            "in-stock": 3,
            img: "../public/asics2.png",
            price: 1700,

            // shoe identifier
            id: 13,
        },

        {
            brand: "asics",
            size: [6, 7, 8, 9, 10, 11],
            color: "green",
            "in-stock": 4,
            img: "../public/asics3.png",
            price: 2600,

            // shoe identifier
            id: 14,
        },

        {
            brand: "asics",
            size: [6, 7, 8, 11],
            color: "purple",
            "in-stock": 5,
            img: "../public/asics4.png",
            price: 1600,

            // shoe identifier
            id: 15,
        },

        {
            brand: "asics",
            size: [5, 7, 8, 10],
            color: "orange",
            "in-stock": 2,
            img: "../public/asics5.png",
            price: 1600,

            // shoe identifier
            id: 16,
        },

        // new balance shoes

        {
            brand: "new-balance",
            size: [7, 8, 9, 10, 11, 12, 14],
            color: "black",
            "in-stock": 3,
            img: "../public/new-balance1.png",
            price: 2399,

            // shoe identifier
            id: 17,
        },

        {
            brand: "new-balance",
            size: [7, 8, 9, 10, 11, 12, 14],
            color: "grey",
            "in-stock": 7,
            img: "../public/new-balance2.png",
            price: 2500,

            // shoe identifier
            id: 18,
        },

        {
            brand: "new-balance",
            size: [8, 9, 10],
            color: "purple",
            "in-stock": 5,
            img: "../public/new-balance3.png",
            price: 2399,

            // shoe identifier
            id: 19,
        },

        {
            brand: "new-balance",
            size: [7, 8, 9, 10],
            color: "blue",
            "in-stock": 12,
            img: "../public/new-balance4.png",
            price: 2399,

            // shoe identifier
            id: 20,
        },
    ];

    // functions for the searching of a shoe in the user interface

    // create an empty variable to store the shoes
    let shoes = [];

    function searchForShoes(shoeBrand, shoeColor, shoeSize, priceRange) {
        // iterate over the length of the shoesData object then..
        for (let i = 0; i < shoesData.length; i++) {
            // grab the current shoe in the object and...
            const shoe = shoesData[i];

            // case : searching for a shoe brand
            // case : searching for a shoe calor
            // case : searching for a shoe size

            // compare the shoe brand, shoe color and shoe size if equals to the shoes data in the 
            // shoesData object, if true then..

            if (
                (shoeBrand === shoe.brand && shoeColor === null && shoeSize === null) ||
                (shoeBrand === null && shoeColor === shoe.color && shoeSize === null) ||
                (shoeBrand === shoe.brand && shoeColor === shoe.color && shoeSize === null)
            ) {

                // push the shoe into the shoes array
                shoes.push(shoe);
            };

            // compare the shoe brand, shoe color and shoe size if equals to the shoes data in the 
            // shoesData object, if true then..

            if (
                (shoeBrand === null && shoeColor === null && shoe.size.includes(shoeSize)) ||
                (shoeBrand === null && shoeColor === shoe.color && shoe.size.includes(shoeSize)) ||
                (shoeBrand === shoe.brand && shoeColor === shoe.color && shoe.size.includes(shoeSize))
            ) {

                // push the shoe into the shoes array
                shoes.push(shoe);
            };

            // create logic for when the user decides to search for shoes according to their price range below:

        };
    };
    // function to show the shoes that the user searched for

    function foundShoes() {
        /* 
            created an if statement to check the length of the shoes array if it is equal to zero, it that is true
            I will loop over the length of the that contains shoes data, shoesData object and push every shoe object that I find
        */

        // check if the shoes array length is zero and...
        if (shoes.length === 0) {
            // create an empty array
            let allOfTheShoes = [];

            // loop over the length of the shoes data then...
            for (let i = 0; i < shoesData.length; i++) {
                const shoe = shoesData[i];

                // push all the shoes into the empty array
                allOfTheShoes.push(shoe);
            };
            // return the array of shoes
            return allOfTheShoes;
        };
        // return the shoes that the user searched for
        return shoes;
    };

    // functions for the shopping cart in the user interface

    // variables to store the cost of shoes and the number of shoes added to cart
    let shoesTotalPrice = 0;

    // variable to store the shoes added to cart
    let shoesInCart = [];

    /*
        when the user clicks the <add-to-cart> span element which will be shown everytime a user
        use a mouse to hover over the image card element in the user interface, the function inStockDecrement() 
        will decrease the "in-stock" value by one and the function addShoeCost() will add the cost of a shoe to the shoesTotalCost
    */

    function addShoeToCart(shoeIdentifier) {
        // iterate over the length of the shoes data then...
        for (let i = 0; i < shoesData.length; i++) {
            // grab a shoe
            const shoe = shoesData[i];

            // check if the a shoe id is equal to the shoe id we'll get when the user clicks the add to cart element in the 
            // user interface then...

            if (shoe.id === shoeIdentifier) {

                // only add a shoe to the shopping cart when the in-stock value is greater than zero
                if (shoe["in-stock"] > 0) {
                    // decrement the "in-stock" value in the shoesData object
                    shoe["in-stock"]--;

                    // add the cost of a shoe to the shoesTotalCost variable by the shoe price
                    shoesTotalPrice += shoe.price;

                    // add a shoe to the shopping cart
                    shoesInCart.push(shoe);
                }
            };
        };
    };

    /*
        when the user clicks an icon to remove a shoe item in the shopping cart,
        the function removeShart will increase the "in-stock" value in the shoesData object and
        will decrease the shoesTotalPrice variable and also remove a shoe from the cart
    */

    function removeShoeFromCart(shoeIdentifier) {
        // iterate over the length of the shoes data then...
        for (let i = 0; i < shoesData.length; i++) {
            // grab a shoe
            const shoe = shoesData[i];

            // check if the a shoe id is equal to the shoe id we'll get when the user clicks the remove from cart element in the 
            // user interface then...

            if (shoe.id === shoeIdentifier) {

                // iterate over the length of the shoes added in the cart and then...
                for (let j = 0; j < shoesInCart.length; j++) {
                    // grab a shoe added in the shoping cart
                    const shoeAddedInCart = shoesInCart[j];

                    // check if the shoe id in the shopping cart is equal to the disired shoe id and...
                    if (shoeAddedInCart.id === shoeIdentifier) {

                        // when the shoesInCart array includes the current shoe in the shoesData object then...
                        if (shoesInCart.includes(shoe)) {
                            // increment the "in-stock" value in the shoesData object,
                            shoe["in-stock"]++;
                            // minus the cost of a shoe from the shoesTotalCost variable by the shoe price and
                            shoesTotalPrice -= shoe.price;

                            // remove a shoe in the shoesInCart array
                            shoesInCart.splice(j, 1);
                        }
                    }
                }
            };
        };
    };

    // shopping cart get functions

    // function keep track of the number of shoes added to the shopping cart

    function addedToCart() {
        // add the number in the shopping cart by using the length of the array
        return shoesInCart.length;
    };

    // function to keep track of the shoes price in the shopping cart

    function getTotalShoesPrice() {
        return shoesTotalPrice;
    };

    /*
        avaliableShoeStock() function helps to be able to get the "in-stock" value by giving the function a 
        shoeIdentifier as an argument, so that it can can compare the shoesData object id's with the shoeIdentifier
        and get the shoe "in-stock" value when they are equal by returning it

        The availableShoeStock() function I will be using it to test if I am getting the correct in-stock value
        in the shoesData object, after adding and removing a shoe in the shoesInCart array
    */

    function avaliableShoeStock(shoeIdentifier) {

        // iterate over the length of the shoesData object then...
        for (let i = 0; i < shoesData.length; i++) {
            // grab the current shoe in the shoesData object and...
            const shoe = shoesData[i];

            // compare the shoe id if it equals to the disired shoe id and..
            if (shoe.id === shoeIdentifier) {

                // return the in-stock value
                return shoe["in-stock"];
            };
        };
    };

    // get shoes that are added to the cart to show the added shoes in the shopping cart page

    function shoesAddedToCart() {
        return shoesInCart;
    };

    // get function for setting the shoes data in the local storage

    function getShoesData() {
        return shoesData;
    };

    // functions return 

    return {
        // searching of a shoe functions
        searchForShoes,
        foundShoes,

        // shopping cart return functions
        // decreaseCart,
        addShoeToCart,
        removeShoeFromCart,
        addedToCart,
        getTotalShoesPrice,
        avaliableShoeStock,
        shoesAddedToCart,

        // local storage function
        getShoesData,
    };
};